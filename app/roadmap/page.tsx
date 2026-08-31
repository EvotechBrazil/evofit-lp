import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteChrome } from '@/components/site-chrome';
import { SectionHeading, P, black } from '@/components/fusion/theme';
import { fetchPublicProduct, type PublicProductModule } from '@/lib/product';
import { SITE_URL } from '@/lib/site';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Roadmap',
  description: 'O que o EvoFit oferece hoje, o que está chegando e o que vem em seguida.',
  alternates: { canonical: `${SITE_URL}/roadmap` },
};

const COLUMNS: { key: 'production' | 'building' | 'radar'; title: string; hint: string }[] = [
  { key: 'production', title: 'O que oferecemos', hint: 'Já disponível na sua academia' },
  { key: 'building', title: 'Chegando agora', hint: 'Em ativação' },
  { key: 'radar', title: 'Em breve', hint: 'Na fila para entrar' },
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
          kicker="O produto"
          title={
            <>
              O que você tem. <span style={{ color: P.orange }}>O que vem aí.</span>
            </>
          }
          lead="O que a sua academia já usa, o que está chegando e o que vem em seguida."
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
