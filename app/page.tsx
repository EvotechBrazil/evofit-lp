import type { Metadata } from 'next';
import { archivoBlack, instrument, Marquee, P } from '@/components/fusion/theme';
import { LeadModalProvider } from '@/components/lead/lead-modal';
import { Nav } from '@/components/sections/nav';
import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import { IaVendas } from '@/components/sections/ia-vendas';
import { Murph } from '@/components/sections/murph';
import { Modules } from '@/components/sections/modules';
import { Integracoes } from '@/components/sections/integracoes';
import { WhiteLabel } from '@/components/sections/white-label';
import { Diferenciais } from '@/components/sections/diferenciais';
import { Seguranca } from '@/components/sections/seguranca';
import { ProvaSocial } from '@/components/sections/prova-social';
import { Faq } from '@/components/sections/faq';
import { FinalCta } from '@/components/sections/final-cta';
import { Footer } from '@/components/sections/footer';
import { MobileCta } from '@/components/sections/mobile-cta';
import { FAQ, LEMA, SUB } from '@/content/site';
import { SITE_URL } from '@/lib/site';
import { fetchPublicProduct } from '@/lib/product';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'EvoFit — Sistema de gestão para academias com IA',
  description: `${LEMA}: IA que vende no WhatsApp 24/7, agenda de aulas, financeiro completo, portal do aluno gamificado, catraca com reconhecimento facial e LGPD — com a marca da sua academia.`,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'EvoFit — Sistema de gestão para academias com IA',
    description: SUB,
    siteName: 'EvoFit',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EvoFit — Sistema de gestão para academias com IA',
    description: SUB,
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EvoFit',
    legalName: 'Evotech System',
    url: SITE_URL,
    logo: `${SITE_URL}/logos/evofit_logo_clean.svg`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'EvoFit',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: `${LEMA}. ${SUB}`,
    url: SITE_URL,
    inLanguage: 'pt-BR',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
];

export default async function Landing() {
  const product = await fetchPublicProduct();
  return (
    <div
      className={`${instrument.variable} ${archivoBlack.variable} min-h-screen`}
      style={{ background: P.paper, color: P.ink, fontFamily: 'var(--font-instrument)' }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LeadModalProvider>
        <Nav />
        <main>
          <Hero />
          <div className="mt-6">
            <Marquee
              items={[
                'Venda no automático',
                'Retenha mais alunos',
                'Zero lead perdido',
                'IA 24/7 no WhatsApp',
              ]}
            />
          </div>
          <Stats />
          <IaVendas />
          <Murph />
          <Marquee
            dark
            items={[
              'Cobrança que negocia',
              'Anti-churn preditivo',
              'Catraca facial',
              'Contratos digitais',
            ]}
          />
          <Modules modules={product.modules} />
          <Integracoes />
          <WhiteLabel />
          <Diferenciais />
          <Seguranca />
          <ProvaSocial />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
        <MobileCta />
      </LeadModalProvider>
    </div>
  );
}
