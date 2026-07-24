import type { Metadata } from 'next';
import Link from 'next/link';
import { archivoBlack, instrument, P, black } from '@/components/fusion/theme';
import { EvoFitWordmarkMono } from '@/components/brand';

export const metadata: Metadata = {
  title: 'Política de privacidade',
  description: 'Como o site do EvoFit coleta e trata os dados enviados no formulário de contato.',
  alternates: { canonical: 'https://evofit.tech/politica-de-privacidade' },
};

const SECTIONS: { title: string; body: React.ReactNode }[] = [
  {
    title: '1. Quem somos',
    body: (
      <>
        Este site (evofit.tech) apresenta o <strong>EvoFit</strong>, sistema de gestão para
        academias desenvolvido pela <strong>Evotech System</strong> (&ldquo;nós&rdquo;), que atua
        como controladora dos dados pessoais coletados por este site nos termos da Lei nº
        13.709/2018 (LGPD).
      </>
    ),
  },
  {
    title: '2. Quais dados coletamos e por quê',
    body: (
      <>
        Ao preencher o formulário de demonstração, coletamos <strong>nome</strong>,{' '}
        <strong>telefone/WhatsApp</strong> e <strong>e-mail</strong>. Usamos esses dados para
        entrar em contato comercial e agendar a demonstração que você solicitou (base legal:
        execução de procedimentos preliminares a pedido do titular — art. 7º, V, da LGPD). Não
        pedimos CPF/CNPJ neste formulário. Também registramos métricas agregadas de uso do site
        via <strong>Vercel Analytics</strong> (páginas visitadas, país/dispositivo em nível
        agregado), com base no legítimo interesse de melhorar o site (art. 7º, IX) — sem
        cookies de publicidade de terceiros.
      </>
    ),
  },
  {
    title: '3. Com quem os dados são compartilhados',
    body: (
      <>
        Os dados do formulário são recebidos pela nossa ferramenta interna de automação e
        armazenados em base de dados própria da Evotech System, acessíveis à nossa equipe
        comercial. A hospedagem do site e a analytics usam a infraestrutura da{' '}
        <strong>Vercel</strong>. Ao concluir o envio com sucesso, você é direcionado ao{' '}
        <strong>WhatsApp</strong> — a conversa a partir dali é regida pela política de
        privacidade do WhatsApp/Meta. Não vendemos nem cedemos seus dados a terceiros para
        marketing alheio.
      </>
    ),
  },
  {
    title: '4. Por quanto tempo guardamos',
    body: (
      <>
        Mantemos os dados de contato pelo período necessário à condução da negociação e, no
        máximo, <strong>12 meses</strong> após o último contato sem conversão, salvo obrigação
        legal de retenção maior. Você pode pedir a exclusão a qualquer momento.
      </>
    ),
  },
  {
    title: '5. Seus direitos (art. 18 da LGPD)',
    body: (
      <>
        Você pode solicitar, a qualquer momento: confirmação de tratamento, acesso, correção,
        anonimização, portabilidade, exclusão e informações sobre compartilhamento. Para exercer
        qualquer direito, fale com a gente pelo e-mail{' '}
        <a href="mailto:privacidade@evofit.tech" className="underline" style={{ color: P.blue }}>
          privacidade@evofit.tech
        </a>{' '}
        ou pelo WhatsApp comercial. Responderemos no prazo legal aplicável.
      </>
    ),
  },
  {
    title: '6. Segurança',
    body: (
      <>
        Adotamos medidas técnicas e organizacionais compatíveis com o mercado — criptografia em
        trânsito (HTTPS), autenticação do canal de envio do formulário, controle de acesso e
        registro de operações — para proteger os dados tratados por este site e pela plataforma
        EvoFit.
      </>
    ),
  },
  {
    title: '7. Atualizações desta política',
    body: (
      <>
        Esta política pode ser atualizada para refletir mudanças no site ou na legislação. A versão
        vigente estará sempre nesta página. Última atualização: julho de 2026.
      </>
    ),
  },
];

export default function PoliticaDePrivacidade() {
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
          Política de privacidade
        </h1>
        <p className="mt-3 text-[14px]" style={{ color: P.muted }}>
          Transparência sobre os dados que este site coleta — e os seus direitos sobre eles.
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
          <Link href="/" className="underline">
            evofit.tech
          </Link>
        </div>
      </footer>
    </div>
  );
}
