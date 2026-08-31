import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteChrome } from '@/components/site-chrome';
import { SectionHeading, P, black } from '@/components/fusion/theme';
import { fetchPublicProduct, type PublicProductModule } from '@/lib/product';
import { SITE_URL } from '@/lib/site';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Roadmap',
  description: 'O que está em produção, o que estamos construindo e o que ainda pode ser feito no EvoFit.',
  alternates: { canonical: `${SITE_URL}/roadmap` },
};

const COLUMNS: { key: 'production' | 'building' | 'radar'; title: string; hint: string }[] = [
  { key: 'production', title: 'Em produção', hint: 'Academias reais usando' },
  { key: 'building', title: 'Construindo agora', hint: 'Em ativação / rollout' },
  { key: 'radar', title: 'No radar', hint: 'Ainda pode ser feito' },
];

export default async function RoadmapPage() {
  const product = await fetchPublicProduct();
  const byKey = new Map(product.modules.map((m) => [m.key, m]));

  function cards(keys: string[]): PublicProductModule[] {
    return keys.map((k) => byKey.get(k)).filter((m): m is PublicProductModule => Boolean(m));
  }

  return (
    <SiteChrome>
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeading
          kicker="Roadmap"
          title={
            <>
              Onde cada módulo está. <span style={{ color: P.orange }}>Sem slide paralelo.</span>
            </>
          }
          lead="As três colunas saem do mesmo catálogo da Alicia que alimenta Funcionalidades e o changelog."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {COLUMNS.map((col) => (
            <section key={col.key} className="bg-white p-5 shadow-sm">
              <h2 className="text-[15px] italic uppercase" style={{ ...black, color: P.blue }}>
                {col.title}
              </h2>
              <p className="mt-1 text-[12px]" style={{ color: P.muted }}>
                {col.hint}
              </p>
              <ul className="mt-5 space-y-3">
                {cards(product.roadmap[col.key]).map((m) => (
                  <li key={m.key}>
                    <Link
                      href={`/funcionalidades/${m.key}`}
                      className="block rounded-md px-3 py-2 text-[14px] font-semibold hover:bg-black/4"
                      style={{ color: P.ink }}
                    >
                      {m.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </SiteChrome>
  );
}
