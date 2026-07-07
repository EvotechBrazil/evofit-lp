import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import { ArrowRight, Check } from 'lucide-react';
import { EvoFitWordmarkMono } from '@/components/brand';
import { ChatMock } from '@/components/chat-mock';
import { DsSwitcher } from '@/components/ds-switcher';
import {
  CHAT_MURPH,
  CHAT_VENDAS,
  CTA_PRIMARY,
  CTA_SECONDARY,
  DIFERENCIAIS,
  LEMA,
  MODULES,
  PROVA,
  STATS,
  SUB,
} from '@/content/site';

export const metadata: Metadata = { title: 'DS 7 · Placar' };

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
});

const P = {
  paper: '#fafafa',
  ink: '#101113',
  orange: '#f08020',
  orangeDeep: '#c85000',
  line: '#10111318',
  muted: '#5f646c',
};

const cond = { fontFamily: 'var(--font-oswald)' } as const;
const tabular = { fontVariantNumeric: 'tabular-nums' } as const;

function BtnPlacar({ children, outline = false }: { children: React.ReactNode; outline?: boolean }) {
  return (
    <button
      className="inline-flex cursor-pointer items-center gap-2.5 rounded-none px-7 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] transition-colors duration-200"
      style={
        outline
          ? { border: `2px solid ${P.ink}`, color: P.ink, ...cond }
          : { background: P.orange, color: '#ffffff', ...cond }
      }
    >
      {children}
      <ArrowRight size={16} strokeWidth={2.6} />
    </button>
  );
}

function Bar({ w = 64 }: { w?: number }) {
  return <span className="mt-4 block h-1.5" style={{ width: w, background: P.orange }} />;
}

/* Placar: bloco preto com numerais tabulares "de painel" */
function Scoreboard() {
  return (
    <div className="grid grid-cols-2 gap-px md:grid-cols-4" style={{ background: P.ink }}>
      {STATS.map((s) => (
        <div key={s.label} className="p-6 text-center" style={{ background: P.ink }}>
          <p className="text-4xl font-semibold text-white md:text-5xl" style={{ ...cond, ...tabular }}>
            {s.value}
          </p>
          <p className="mt-2 text-[10.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: P.orange }}>
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}

const chatPlacar = {
  bg: '#f1f2f4',
  headerBg: P.ink,
  headerText: '#ffffff',
  inBg: '#ffffff',
  inText: P.ink,
  outBg: '#ffe3c7',
  outText: '#3a2410',
  metaText: '#10111355',
};

export default function DsPlacar() {
  return (
    <main className="min-h-screen" style={{ background: P.paper, color: P.ink }}>
      {/* NAV */}
      <header className="sticky top-0 z-30 border-b bg-white/92 backdrop-blur-md" style={{ borderColor: P.line }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <EvoFitWordmarkMono className="text-xl" color={P.ink} accent={P.orange} />
          <nav
            className="hidden items-center gap-8 text-[12.5px] font-semibold uppercase tracking-[0.1em] md:flex"
            style={{ ...cond, color: P.muted }}
          >
            <span className="cursor-pointer transition-colors hover:text-black">Funcionalidades</span>
            <span className="cursor-pointer transition-colors hover:text-black">IA de Vendas</span>
            <span className="cursor-pointer transition-colors hover:text-black">Murph</span>
            <span className="cursor-pointer transition-colors hover:text-black">Integrações</span>
          </nav>
          <button
            className="cursor-pointer px-5 py-2.5 text-[12.5px] font-semibold uppercase tracking-[0.08em] text-white"
            style={{ background: P.orange, ...cond }}
          >
            {CTA_PRIMARY}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-14 md:pt-20">
        <div className="grid items-center gap-14 md:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="fade-up text-[11.5px] font-semibold uppercase tracking-[0.3em]" style={{ color: P.orangeDeep }}>
              Evotech System · Gestão + IA
            </p>
            <h1
              className="fade-up mt-5 text-[3.2rem] font-semibold uppercase leading-[0.98] md:text-[5rem]"
              style={{ ...cond, animationDelay: '0.08s' }}
            >
              A evolução em{' '}
              <span style={{ color: P.orange }}>gestão de academias</span>
            </h1>
            <Bar w={110} />
            <p className="fade-up mt-6 max-w-lg text-[16px] leading-relaxed" style={{ color: P.muted, animationDelay: '0.2s' }}>
              {SUB}
            </p>
            <div className="fade-up mt-8 flex flex-wrap gap-4" style={{ animationDelay: '0.3s' }}>
              <BtnPlacar>{CTA_PRIMARY}</BtnPlacar>
              <BtnPlacar outline>{CTA_SECONDARY}</BtnPlacar>
            </div>
            <p className="fade-up mt-7 flex items-center gap-2 text-[13px]" style={{ color: P.muted, animationDelay: '0.4s' }}>
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {PROVA}
            </p>
          </div>

          {/* telefone com moldura editorial quadrada */}
          <div className="fade-up relative mx-auto" style={{ animationDelay: '0.25s' }}>
            <div
              aria-hidden
              className="absolute -left-5 -top-5 h-full w-full"
              style={{ border: `2px solid ${P.ink}` }}
            />
            <div className="relative h-[500px] w-[280px] overflow-hidden bg-white shadow-xl" style={{ border: `2px solid ${P.ink}` }}>
              <ChatMock messages={CHAT_VENDAS} theme={chatPlacar} title="Sofia · IA da sua academia" />
            </div>
            <span
              className="absolute -bottom-4 -right-4 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white"
              style={{ background: P.orange, ...cond }}
            >
              Lead → Aluno
            </span>
          </div>
        </div>
      </section>

      {/* PLACAR */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Scoreboard />
      </section>

      {/* MURPH */}
      <section className="border-y" style={{ borderColor: P.line, background: '#ffffff' }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.3em]" style={{ color: P.orangeDeep }}>
              Murph · Copiloto do dono
            </p>
            <h2 className="mt-4 text-4xl font-semibold uppercase leading-[1.0] md:text-5xl" style={cond}>
              O secretário de IA que trabalha pro dono
            </h2>
            <Bar w={90} />
            <p className="mt-6 max-w-md text-[15px] leading-relaxed" style={{ color: P.muted }}>
              &ldquo;Cobra os inadimplentes acima de 7 dias&rdquo; — e o Murph cobra. Mais de 40
              ações reais no sistema por mensagem, com aprovação S/N no que é sensível.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                'Permissão por papel: dono, gerente, recepção, coach',
                'Aprovação S/N antes de qualquer ação sensível',
                'Responde com dados reais do sistema, na hora',
              ].map((li) => (
                <li key={li} className="flex items-center gap-3 text-[14px]">
                  <span className="flex h-5 w-5 items-center justify-center text-white" style={{ background: P.orange }}>
                    <Check size={12} strokeWidth={3.5} />
                  </span>
                  {li}
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto h-[430px] w-[280px] overflow-hidden bg-white shadow-xl" style={{ border: `2px solid ${P.ink}` }}>
            <ChatMock messages={CHAT_MURPH} theme={chatPlacar} title="Murph · Secretário IA" subtitle="modo dono" step={0.7} />
          </div>
        </div>
      </section>

      {/* MÓDULOS — tabela editorial */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <h2 className="max-w-2xl text-4xl font-semibold uppercase leading-[1.0] md:text-5xl" style={cond}>
          Tudo que uma academia precisa. <span style={{ color: P.orange }}>Num sistema só.</span>
        </h2>
        <Bar w={110} />
        <div className="mt-10 border-t" style={{ borderColor: P.line }}>
          {MODULES.map((m, i) => (
            <div
              key={m.title}
              className="group grid grid-cols-[3rem_1fr] items-start gap-4 border-b py-5 transition-colors duration-200 hover:bg-white md:grid-cols-[4rem_2rem_1fr_1.4fr]"
              style={{ borderColor: P.line }}
            >
              <span className="text-3xl font-semibold md:text-4xl" style={{ ...cond, ...tabular, color: '#10111322' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <m.icon size={20} strokeWidth={2} color={P.orange} className="mt-2 max-md:hidden" />
              <h3 className="text-[17px] font-semibold uppercase tracking-[0.02em]" style={cond}>
                {m.title}
              </h3>
              <p className="col-span-2 text-[13.5px] leading-relaxed md:col-span-1" style={{ color: P.muted }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS — bloco ink */}
      <section style={{ background: P.ink, color: '#f4f4f5' }}>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-4xl font-semibold uppercase md:text-5xl" style={cond}>
            Só o <span style={{ color: P.orange }}>EvoFit</span> faz
          </h2>
          <div className="mt-10 grid gap-x-12 md:grid-cols-2">
            {DIFERENCIAIS.map((d, i) => (
              <div key={d} className="flex items-baseline gap-4 border-b border-white/12 py-4 text-[14px] leading-relaxed">
                <span className="text-2xl font-semibold" style={{ ...cond, ...tabular, color: P.orange }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIMEN */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-semibold uppercase" style={cond}>
          Design System · <span style={{ color: P.orange }}>07 Placar</span>
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6" style={{ border: `2px solid ${P.ink}` }}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em]" style={{ color: P.orangeDeep }}>Paleta</p>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {[
                ['#fafafa', 'paper'],
                ['#101113', 'ink'],
                ['#f08020', 'orange'],
                ['#c85000', 'deep'],
              ].map(([hex, name]) => (
                <div key={hex} className="text-center">
                  <div className="h-14 w-full border border-black/10" style={{ background: hex }} />
                  <p className="mt-1.5 text-[10px] font-medium" style={{ color: P.muted }}>
                    {name}
                    <br />
                    {hex}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.2em]" style={{ color: P.orangeDeep }}>Tipografia</p>
            <p className="mt-2 text-3xl font-semibold uppercase" style={cond}>Oswald condensada</p>
            <p className="text-[13px]" style={{ color: P.muted }}>Inter — corpo · numerais tabulares de placar</p>
          </div>
          <div className="bg-white p-6" style={{ border: `2px solid ${P.ink}` }}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em]" style={{ color: P.orangeDeep }}>Botões e badges</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <BtnPlacar>Primário</BtnPlacar>
              <BtnPlacar outline>Secundário</BtnPlacar>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white" style={{ background: P.ink, ...cond }}>
                Em produção
              </span>
              <span className="px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ border: `1.5px solid ${P.orange}`, color: P.orangeDeep, ...cond }}>
                Em ativação
              </span>
            </div>
            <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.2em]" style={{ color: P.orangeDeep }}>Assinaturas visuais</p>
            <p className="mt-2 text-[13px] leading-relaxed" style={{ color: P.muted }}>
              Cantos retos e molduras 2px · barras laranja sob os títulos · placar preto com
              numerais tabulares · lista-tabela de módulos · zero arredondado, zero gradiente.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-6xl px-6 pb-24 text-center">
        <div className="mx-auto max-w-3xl border-4 px-8 py-14" style={{ borderColor: P.ink }}>
          <h2 className="text-4xl font-semibold uppercase leading-[1.02] md:text-[3.2rem]" style={cond}>
            Pronto pra evoluir sua academia?
          </h2>
          <p className="mt-3 text-[13px] uppercase tracking-[0.14em]" style={{ color: P.muted }}>
            {LEMA}
          </p>
          <div className="mt-8 flex justify-center">
            <BtnPlacar>{CTA_PRIMARY}</BtnPlacar>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-8" style={{ borderColor: P.line, background: '#ffffff' }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-[12px]" style={{ color: P.muted }}>
          <EvoFitWordmarkMono className="text-lg" color={P.ink} accent={P.orange} />
          <span>EvoFit © 2026 — Evotech System</span>
        </div>
      </footer>

      <DsSwitcher current="/ds/7" />
    </main>
  );
}
