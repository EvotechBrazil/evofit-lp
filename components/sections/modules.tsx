import Link from 'next/link';
import { P, SectionHeading } from '@/components/fusion/theme';
import { ProductGrid } from '@/components/product/product-grid';
import type { PublicProductModule } from '@/lib/product';

export function Modules({ modules }: { modules: PublicProductModule[] }) {
  const preview = modules.slice(0, 9);
  return (
    <section id="funcionalidades" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-24">
      <SectionHeading
        title={
          <>
            Tudo que uma academia precisa. <span style={{ color: P.orange }}>Num sistema só.</span>
          </>
        }
        lead="Da primeira mensagem do lead até a catraca girar — cada módulo conversa com os outros, no mesmo lugar."
      />
      <ProductGrid modules={preview} />
      {modules.length > preview.length && (
        <p className="mt-8 text-center">
          <Link href="/funcionalidades" className="text-[14px] font-semibold" style={{ color: P.blue }}>
            Ver as {modules.length} funcionalidades →
          </Link>
        </p>
      )}
    </section>
  );
}
