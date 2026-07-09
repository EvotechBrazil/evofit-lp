import { NextResponse } from 'next/server';
import { onlyDigits, validateDocumento } from '@/lib/documento';

/**
 * Proxy server-side do formulário de lead → webhook n8n da Evotech.
 * (Substitui o fetch no-cors direto do client do site antigo: aqui dá pra
 * validar payload e observar falhas de entrega no log da função.)
 *
 * A URL do webhook pode ser sobrescrita pela env LEAD_WEBHOOK_URL (Vercel)
 * sem precisar de deploy — o default aponta pro n8n atual da Evotech.
 */
const WEBHOOK_URL =
  process.env.LEAD_WEBHOOK_URL ?? 'https://n8n.evotechsystem.cloud/webhook/formulario';

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

  // CPF/CNPJ é opcional; se vier, precisa ser válido (identificador do lead).
  const documento = onlyDigits(String(payload.documento ?? ''));
  let tipoDocumento: string | null = null;
  if (documento) {
    const res = validateDocumento(documento);
    if (!res.valid) {
      return NextResponse.json({ ok: false, error: 'invalid_documento' }, { status: 400 });
    }
    tipoDocumento = res.tipo;
  }

  const body = JSON.stringify({
    nome,
    telefone,
    email,
    documento: documento || null,
    tipo_documento: tipoDocumento,
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
