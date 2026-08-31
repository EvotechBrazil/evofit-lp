import type { Metadata } from 'next';
import { SiteChrome } from '@/components/site-chrome';
import { ProductGrid } from '@/components/product/product-grid';
import { SectionHeading, P } from '@/components/fusion/theme';
import { fetchPublicProduct, CATEGORY_LABEL } from '@/lib/product';
import { SITE_URL } from '@/lib/site';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Funcionalidades',
  description:
    'Tudo que o EvoFit faz: IA de vendas, Murph, financeiro, agenda, portal do aluno, catraca e mais — direto do produto.',
  alternates: { canonical: `${SITE_URL}/funcionalidades` },
};

export default async function FuncionalidadesPage() {
  const product = await fetchPublicProduct();
  const categories = [...new Set(product.modules.map((m) => m.category))];

  return (
    <SiteChrome>
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeading
          kicker="Catálogo vivo"
          title={
            <>
              Tudo que o EvoFit faz. <span style={{ color: P.orange }}>Atualizado pelo produto.</span>
            </>
          }
          lead="A lista vem da Alicia. Quando um módulo entra em produção lá, aparece aqui — sem copiar texto no site."
        />
        <p className="mt-4 text-center text-[12px]" style={{ color: P.muted }}>
          {categories.map((c) => CATEGORY_LABEL[c] ?? c).join(' · ')}
        </p>
        <ProductGrid modules={product.modules} />
      </main>
    </SiteChrome>
  );
}
