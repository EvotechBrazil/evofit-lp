import type { Metadata } from 'next';
import Link from 'next/link';
import { archivoBlack, instrument, P, black } from '@/components/fusion/theme';
import { EvoFitWordmarkMono } from '@/components/brand';
import { SITE_HOST, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Termos de uso',
  description: `Condições de uso do site ${SITE_HOST} e do formulário de demonstração.`,
  alternates: { canonical: `${SITE_URL}/termos-de-uso` },
};

const SECTIONS: { title: string; body: React.ReactNode }[] = [
  {
    title: '1. Aceite',
    body: (
      <>
        Ao acessar <strong>{SITE_HOST}</strong> ou enviar o formulário de demonstração, você
        concorda com estes termos e com a{' '}
        <Link href="/politica-de-privacidade" className="underline" style={{ color: P.blue }}>
          política de privacidade
        </Link>
        . Se não concordar, não utilize o site nem o formulário.
      </>
    ),
  },
  {
    title: '2. O que é este site',
    body: (
      <>
        Este site é a página institucional e de captação de leads do <strong>EvoFit</strong>,
        produto da Evotech System. Não é o painel operacional da plataforma (acesso de clientes
        em www.evofit.tech). Conteúdo de marketing pode ser atualizado sem aviso prévio.
      </>
    ),
  },
  {
    title: '3. Formulário de demonstração',
    body: (
      <>
        Ao solicitar demonstração, você declara que os dados informados são verdadeiros e que
        tem legitimidade para representar a academia ou negócio indicado. O envio não gera
        contrato de prestação de serviços — apenas interesse comercial. Propostas, prazos e
        valores são definidos em negociação posterior.
      </>
    ),
  },
  {
    title: '4. Uso adequado',
    body: (
      <>
        É proibido usar o site ou a API de lead para spam, scraping abusivo, engenharia social,
        testes de carga não autorizados ou qualquer atividade ilícita. Podemos bloquear IPs e
        recusar leads que violem estas regras.
      </>
    ),
  },
  {
    title: '5. Propriedade intelectual',
    body: (
      <>
        Marca EvoFit, textos, layout, identidade visual e demais materiais do site pertencem à
        Evotech System ou a licenciantes. Não é permitida reprodução comercial sem autorização.
      </>
    ),
  },
  {
    title: '6. Limitação',
    body: (
      <>
        O site é fornecido &ldquo;como está&rdquo;. Empregamos diligência razoável de
        disponibilidade e segurança, mas não garantimos ausência de interrupções. Em nenhuma
        hipótese a Evotech System responde por danos indiretos decorrentes do uso deste site
        institucional, na medida permitida pela lei aplicável.
      </>
    ),
  },
  {
    title: '7. Contato e foro',
    body: (
      <>
        Dúvidas: {' '}
        <a href="mailto:privacidade@evofit.tech" className="underline" style={{ color: P.blue }}>
          privacidade@evofit.tech
        </a>
        . Estes termos regem-se pelas leis brasileiras. Foro da comarca da sede da Evotech
        System, salvo disposição legal de foro do consumidor. Última atualização: julho de 2026.
      </>
    ),
  },
];

export default function TermosDeUso() {
  return (
    <div
      className={`${instrument.variable} ${archivoBlack.variable} min-h-screen`}
      style={{ background: P.paper, color: P.ink, fontFamily: 'var(--font-instrument)' }}
    >
      <header className="border-b border-black/6 bg-white/90">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link href="/" aria-label="Voltar para a página inicial">
            <EvoFitWordmarkMono className="text-xl" color={P.blue} accent={P.orange} />
          </Link>
          <Link href="/" className="text-[13px] font-semibold" style={{ color: P.blue }}>
            ← Voltar ao site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-14">
        <h1 className="text-3xl italic uppercase leading-tight md:text-4xl" style={{ ...black, color: P.blue }}>
          Termos de uso
        </h1>
        <p className="mt-3 text-[14px]" style={{ color: P.muted }}>
          Condições simples para o uso do site e do formulário de demonstração.
        </p>

        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="text-[16px] font-bold" style={{ color: P.ink }}>
                {s.title}
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed" style={{ color: '#3c4756' }}>
                {s.body}
              </p>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-black/6 bg-white py-8">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 text-[12px]" style={{ color: P.muted }}>
          <span>EvoFit © 2026 — Evotech System</span>
          <Link href="/politica-de-privacidade" className="underline">
            Privacidade
          </Link>
        </div>
      </footer>
    </div>
  );
}
