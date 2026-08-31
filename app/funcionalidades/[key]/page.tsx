import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteChrome } from '@/components/site-chrome';
import { Badge, BtnFusion, P, black } from '@/components/fusion/theme';
import {
  CATEGORY_LABEL,
  STATUS_LABEL,
  fetchPublicProduct,
  type ProductStatusJson,
} from '@/lib/product';
import { SITE_URL } from '@/lib/site';
import { CTA_PRIMARY } from '@/content/site';

export const dynamicParams = true;

type Params = { key: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { key } = await params;
  const product = await fetchPublicProduct();
  const mod = product.modules.find((m) => m.key === key);
  if (!mod) return { title: 'Funcionalidade' };
  return {
    title: mod.title,
    description: mod.summary,
    alternates: { canonical: `${SITE_URL}/funcionalidades/${mod.key}` },
  };
}

function statusTone(status: ProductStatusJson): 'blue' | 'orange' {
  return status === 'production' ? 'orange' : 'blue';
}

export default async function FuncionalidadePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { key } = await params;
  const product = await fetchPublicProduct();
  const mod = product.modules.find((m) => m.key === key);
  if (!mod) notFound();

  const related = product.modules.filter((m) => m.category === mod.category && m.key !== mod.key).slice(0, 3);

  return (
    <SiteChrome>
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <Link href="/funcionalidades" className="text-[13px] font-semibold" style={{ color: P.blue }}>
          ← Todas as funcionalidades
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {mod.status !== 'production' && (
            <Badge tone={statusTone(mod.status)}>{STATUS_LABEL[mod.status]}</Badge>
          )}
          <span className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: P.muted }}>
            {CATEGORY_LABEL[mod.category] ?? mod.category}
          </span>
        </div>
        <h1 className="mt-4 text-3xl italic uppercase leading-tight md:text-4xl" style={{ ...black, color: P.blue }}>
          {mod.title}
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: '#3c4756' }}>
          {mod.summary}
        </p>
        <div className="mt-8">
          <BtnFusion href="/#inicio">{CTA_PRIMARY}</BtnFusion>
        </div>
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-[13px] font-bold uppercase tracking-[0.2em]" style={{ color: P.orange }}>
              Na mesma área
            </h2>
            <ul className="mt-4 space-y-2">
              {related.map((r) => (
                <li key={r.key}>
                  <Link href={`/funcionalidades/${r.key}`} className="text-[14px] font-semibold" style={{ color: P.blue }}>
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </SiteChrome>
  );
}
