import { createHmac, timingSafeEqual } from 'crypto';
import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';
import { PRODUCT_TAG } from '@/lib/product';

const MAX_SKEW_MS = 5 * 60 * 1000;
const SECRET = process.env.SITE_REVALIDATE_SECRET?.trim() ?? '';

function signaturesMatch(aHex: string, bHex: string): boolean {
  try {
    const a = Buffer.from(aHex, 'hex');
    const b = Buffer.from(bHex, 'hex');
    if (a.length === 0 || a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export async function GET() {
  return NextResponse.json({ ok: false, error: 'method_not_allowed' }, { status: 405 });
}

export async function POST(req: Request) {
  if (!SECRET) {
    return NextResponse.json({ ok: false, error: 'misconfigured' }, { status: 503 });
  }

  const sig = req.headers.get('x-revalidate-signature') ?? '';
  let raw: string;
  try {
    raw = await req.text();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_body' }, { status: 400 });
  }

  const expected = createHmac('sha256', SECRET).update(raw).digest('hex');
  if (!signaturesMatch(sig, expected)) {
    return NextResponse.json({ ok: false, error: 'invalid_signature' }, { status: 401 });
  }

  let payload: { tag?: string; ts?: number };
  try {
    payload = JSON.parse(raw) as { tag?: string; ts?: number };
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  if (typeof payload.ts !== 'number' || Math.abs(Date.now() - payload.ts) > MAX_SKEW_MS) {
    return NextResponse.json({ ok: false, error: 'stale' }, { status: 401 });
  }

  if (payload.tag !== PRODUCT_TAG) {
    return NextResponse.json({ ok: false, error: 'unknown_tag' }, { status: 400 });
  }

  revalidateTag(PRODUCT_TAG, { expire: 0 });
  return NextResponse.json({ ok: true, tag: PRODUCT_TAG });
}
