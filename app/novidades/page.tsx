import type { Metadata } from 'next';
import { SiteChrome } from '@/components/site-chrome';
import { SectionHeading, P, black } from '@/components/fusion/theme';
import { fetchPublicProduct } from '@/lib/product';
import { SITE_URL } from '@/lib/site';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Novidades',
  description: 'O que acabou de sair no EvoFit — changelog vivo, publicado pelo time no produto.',
  alternates: { canonical: `${SITE_URL}/novidades` },
};

const LABEL: Record<string, string> = {
  new: 'Novo',
  improved: 'Melhoria',
  fixed: 'Correção',
};

export default async function NovidadesPage() {
  const product = await fetchPublicProduct();

  return (
    <SiteChrome>
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <SectionHeading
          kicker="Changelog"
          align="left"
          title={
            <>
              O que saiu. <span style={{ color: P.orange }}>Quando saiu.</span>
            </>
          }
          lead="O que o EvoFit ganhou de novo — e quando ficou disponível pra sua academia."
        />

        {product.releases.length === 0 ? (
          <p className="mt-12 text-[14px]" style={{ color: P.muted }}>
            As próximas novidades aparecem aqui assim que forem liberadas.
          </p>
        ) : (
          <ol className="mt-12 space-y-10">
            {product.releases.map((r) => (
              <li key={r.id} className="border-t border-black/8 pt-8">
                <p className="text-[12px] font-semibold uppercase tracking-wide" style={{ color: P.muted }}>
                  {new Date(r.publishedAt).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                  {r.label ? ` · ${LABEL[r.label] ?? r.label}` : ''}
                </p>
                <h2 className="mt-2 text-2xl italic uppercase" style={{ ...black, color: P.blue }}>
                  {r.title}
                </h2>
                <p className="mt-3 whitespace-pre-wrap text-[15px] leading-relaxed" style={{ color: '#3c4756' }}>
                  {r.body}
                </p>
              </li>
            ))}
          </ol>
        )}
      </main>
    </SiteChrome>
  );
}
