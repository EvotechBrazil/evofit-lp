import { NextResponse } from 'next/server';

/**
 * Proxy server-side do formulário de lead → webhook n8n da Evotech.
 *
 * Env (Vercel / .env.local):
 *   LEAD_WEBHOOK_URL     — URL de produção do webhook n8n
 *   LEAD_WEBHOOK_SECRET  — header X-Lead-Secret (obrigatório)
 *   LEAD_ALLOWED_ORIGINS — CSV de origens (opcional)
 *   LEAD_ALERT_WEBHOOK   — URL opcional (Slack/Discord) para falhas upstream
 */

const WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL?.trim() || '';
const WEBHOOK_SECRET = process.env.LEAD_WEBHOOK_SECRET?.trim() || '';
const ALERT_WEBHOOK = process.env.LEAD_ALERT_WEBHOOK?.trim() || '';
const IS_PROD = process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production';

const MAX_BODY_BYTES = 8_192;

const DEFAULT_ORIGINS =
  'https://site.evofit.tech,https://evofit.tech,https://www.evofit.tech,http://localhost:3000';

const ALLOWED_ORIGINS = new Set(
  (process.env.LEAD_ALLOWED_ORIGINS ?? DEFAULT_ORIGINS)
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean),
);

function isAllowedPreviewOrigin(origin: string): boolean {
  try {
    const { hostname } = new URL(origin);
    return (
      hostname === 'site.evofit.tech' ||
      hostname.endsWith('.evofit.tech') ||
      /^evofit-site(-[a-z0-9-]+)?\.vercel\.app$/i.test(hostname) ||
      hostname.endsWith('-evotechs-projects-b14b963c.vercel.app')
    );
  } catch {
    return false;
  }
}

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 10;
const hits = new Map<string, number[]>();

function clientIp(req: Request): string {
  const xf = req.headers.get('x-forwarded-for');
  if (xf) return xf.split(',')[0]?.trim() || 'unknown';
  return req.headers.get('x-real-ip') || 'unknown';
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const prev = (hits.get(ip) ?? []).filter((t) => t > windowStart);
  if (prev.length >= RATE_LIMIT_MAX) {
    hits.set(ip, prev);
    return true;
  }
  prev.push(now);
  hits.set(ip, prev);
  return false;
}

function originAllowed(req: Request): boolean {
  const origin = req.headers.get('origin');
  // Em produção o browser sempre manda Origin no POST cross-origin/same-site form fetch.
  // Sem Origin: só permitido fora de produção (smoke scripts locais).
  if (!origin) return !IS_PROD;
  return ALLOWED_ORIGINS.has(origin) || isAllowedPreviewOrigin(origin);
}

function logEvent(
  level: 'info' | 'warn' | 'error',
  event: string,
  extra: Record<string, unknown> = {},
) {
  const line = JSON.stringify({
    level,
    event,
    ts: new Date().toISOString(),
    ...extra,
  });
  if (level === 'error') console.error(line);
  else if (level === 'warn') console.warn(line);
  else console.log(line);
}

async function alertUpstream(detail: string) {
  if (!ALERT_WEBHOOK) return;
  try {
    await fetch(ALERT_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `[evofit-site/lead] ${detail}`,
      }),
      signal: AbortSignal.timeout(3000),
    });
  } catch {
    /* não bloqueia o request */
  }
}

export async function GET() {
  return NextResponse.json({ ok: false, error: 'method_not_allowed' }, { status: 405 });
}

export async function POST(req: Request) {
  const ip = clientIp(req);

  if (rateLimited(ip)) {
    logEvent('warn', 'lead_rate_limited', { ip });
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 });
  }

  if (!originAllowed(req)) {
    logEvent('warn', 'lead_origin_blocked', { origin: req.headers.get('origin') });
    return NextResponse.json({ ok: false, error: 'origin_not_allowed' }, { status: 403 });
  }

  if (!WEBHOOK_URL || !WEBHOOK_SECRET) {
    logEvent('error', 'lead_misconfigured');
    return NextResponse.json({ ok: false, error: 'misconfigured' }, { status: 503 });
  }

  const contentLength = Number(req.headers.get('content-length') || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: 'payload_too_large' }, { status: 413 });
  }

  let raw: string;
  try {
    raw = await req.text();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_body' }, { status: 400 });
  }
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: 'payload_too_large' }, { status: 413 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  // Honeypot: bots preenchem campos ocultos — aceita em silêncio sem gravar.
  const honeypot = String(payload.website ?? payload.company_url ?? '').trim();
  if (honeypot) {
    logEvent('warn', 'lead_honeypot_triggered', { ip });
    return NextResponse.json({ ok: true });
  }

  const nome = String(payload.nome ?? '').trim().slice(0, 100);
  const telefone = String(payload.telefone ?? '').trim().slice(0, 30);
  const email = String(payload.email ?? '').trim().slice(0, 255).toLowerCase();
  const phoneDigits = telefone.replace(/\D/g, '');

  if (
    !nome ||
    !telefone ||
    !email ||
    phoneDigits.length < 10 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json({ ok: false, error: 'invalid_fields' }, { status: 400 });
  }

  const body = JSON.stringify({
    nome,
    telefone,
    email,
    timestamp: new Date().toISOString(),
    origem:
      typeof payload.origem === 'string' && payload.origem.length > 0
        ? payload.origem.slice(0, 200)
        : 'site.evofit.tech',
  });

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Lead-Secret': WEBHOOK_SECRET,
      },
      body,
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      logEvent('error', 'lead_upstream_failed', { status: res.status });
      void alertUpstream(`webhook n8n status ${res.status}`);
      return NextResponse.json({ ok: false, error: 'upstream_failed' }, { status: 502 });
    }
  } catch (err) {
    logEvent('error', 'lead_upstream_error', {
      message: err instanceof Error ? err.message : 'unknown',
    });
    void alertUpstream(`webhook n8n exception: ${err instanceof Error ? err.message : 'unknown'}`);
    return NextResponse.json({ ok: false, error: 'upstream_failed' }, { status: 502 });
  }

  logEvent('info', 'lead_accepted', { emailDomain: email.split('@')[1] ?? '' });
  return NextResponse.json({ ok: true });
}
