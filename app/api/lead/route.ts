import { NextResponse } from 'next/server';

/**
 * Proxy server-side do formulário de lead → webhook n8n da Evotech.
 * (Substitui o fetch no-cors direto do client do site antigo: aqui dá pra
 * validar payload e observar falhas de entrega no log da função.)
 */
const WEBHOOK_URL = 'https://n8n-n8n.rte6ms.easypanel.host/webhook/formulario';

export async function POST(req: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const nome = String(payload.nome ?? '').trim().slice(0, 100);
  const telefone = String(payload.telefone ?? '').trim().slice(0, 30);
  const email = String(payload.email ?? '').trim().slice(0, 255);

  if (!nome || !telefone || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'invalid_fields' }, { status: 400 });
  }

  const body = JSON.stringify({
    nome,
    telefone,
    email,
    timestamp: typeof payload.timestamp === 'string' ? payload.timestamp : new Date().toISOString(),
    origem: typeof payload.origem === 'string' ? payload.origem.slice(0, 200) : 'evofit.tech',
  });

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error(`[lead] webhook n8n respondeu ${res.status}`);
    }
  } catch (err) {
    // Falha de entrega não bloqueia o lead — ele segue pro WhatsApp de qualquer forma.
    console.error('[lead] falha ao entregar no webhook n8n:', err);
  }

  return NextResponse.json({ ok: true });
}
