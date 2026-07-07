import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';
import { ArrowRight, Check } from 'lucide-react';
import { EVO, EvoFitWordmark } from '@/components/brand';
import { ChatMock } from '@/components/chat-mock';
import { DsSwitcher } from '@/components/ds-switcher';
import {
  CHAT_MURPH,
  CHAT_VENDAS,
  CTA_PRIMARY,
  DIFERENCIAIS,
  LEMA,
  MODULES,
  PROVA,
  SUB,
} from '@/content/site';

export const metadata: Metadata = { title: 'DS 9 · Navy Editorial' };

const instrument = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument',
});

const P = {
  outer: '#070d18',
  canvas: '#0c1830',
  canvas2: '#0f1f3d',
  card: '#12213f',
  text: '#eaf1fb',
  muted: '#8aa0be',
  faint: '#5a6f8c',
  blue: '#4eaaee',
  orange: '#f08020',
  orangeLight: '#ffaa44',
};

const display = { fontFamily: 'var(--font-instrument)' } as const;

function BtnWhite({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="inline-flex cursor-pointer items-center gap-2.5 rounded-lg bg-white px-7 py-3.5 text-[14.5px] font-semibold transition-all duration-200 hover:-translate-y-0.5"
      style={{ color: '#0c1830' }}
    >
      {children}
      <ArrowRight size={16} strokeWidth={2.4} color={P.orange} />
    </button>
  );
}

function FloatCard({ title, sub, className = '' }: { title: string; sub: string; className?: string }) {
  return (
    <div
      className={`float-y w-[190px] rounded-xl border border-white/12 p-3.5 shadow-2xl backdrop-blur-md ${className}`}
      style={{ background: '#0c1830cc' }}
    >
      <p className="text-[12px] font-semibold" style={{ color: P.text }}>{title}</p>
      <p className="mt-0.5 text-[11px]" style={{ color: P.muted }}>{sub}</p>
    </div>
  );
}

const chatNavy = {
  bg: '#091223',
  headerBg: '#101f3c',
  headerText: P.text,
  inBg: '#16294d',
  inText: P.text,
  outBg: '#0d3b2e',
  outText: '#dcfce7',
  metaText: '#ffffff55',
};

export default function DsNavyEditorial() {
  return (
    <main
      className={`${instrument.variable} min-h-screen pb-10`}
      style={{ background: P.outer, color: P.text, ...display }}
    >
      {/* NAV flutuante */}
      <header className="sticky top-4 z-30 px-4">
        <div
          className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 px-6 py-3 shadow-2xl backdrop-blur-md"
          style={{ background: '#0c1830d9' }}
        >
          <EvoFitWordmark className="text-xl" glow={false} />
          <nav className="hidden items-center gap-8 text-[13.5px] font-medium md:flex" style={{ color: P.muted }}>
            <span className="cursor-pointer transition-colors hover:text-white">Funcionalidades</span>
            <span className="cursor-pointer transition-colors hover:text-white">IA de Vendas</span>
            <span className="cursor-pointer transition-colors hover:text-white">Murph</span>
            <span className="cursor-pointer transition-colors hover:text-white">Integrações</span>
          </nav>
          <button className="cursor-pointer rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold" style={{ color: P.canvas }}>
            {CTA_PRIMARY}
          </button>
        </div>
      </header>

      {/* HERO — canvas navy arredondado, headline em camadas */}
      <section className="mx-auto mt-6 max-w-[1240px] px-4">
        <div
          className="relative overflow-hidden rounded-[2rem] px-6 pb-16 pt-14 md:px-14 md:pb-24 md:pt-20"
          style={{ background: `linear-gradient(165deg, ${P.canvas2} 0%, ${P.canvas} 55%, #081124 100%)` }}
        >
          {/* watermark */}
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-12 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[9rem] font-bold italic tracking-tight md:text-[17rem]"
            style={{ color: '#ffffff', opacity: 0.045 }}
          >
            EvoFit
          </span>
          {/* brilho laranja sutil */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-[-160px] top-[-160px] h-[420px] w-[420px] rounded-full opacity-[0.14] blur-[100px]"
            style={{ background: P.orange }}
          />

          <div className="fade-up relative flex justify-center md:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[12.5px] font-medium" style={{ background: '#ffffff0d', color: P.text }}>
              <span className="h-2 w-2 rounded-full" style={{ background: P.orange }} />
              Sistema de gestão com IA para academias
            </span>
          </div>

          <div className="relative mt-8 grid items-center gap-10 md:mt-4 md:grid-cols-[1fr_auto_1fr]">
            {/* coluna esquerda */}
            <div className="fade-up text-center md:text-left" style={{ animationDelay: '0.12s' }}>
              <h1 className="text-[3rem] font-semibold leading-[1.02] tracking-[-0.02em] md:text-[4.2rem]">
                <span className="block text-white">A evolução</span>
                <span className="block" style={{ color: P.blue }}>
                  em gestão
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-[300px] text-[13.5px] leading-relaxed md:mx-0" style={{ color: P.muted }}>
                {SUB}
              </p>
              <div className="mt-7 max-md:flex max-md:justify-center">
                <BtnWhite>{CTA_PRIMARY}</BtnWhite>
              </div>
            </div>

            {/* telefone central */}
            <div className="fade-up relative z-10 mx-auto" style={{ animationDelay: '0.25s' }}>
              <div className="h-[500px] w-[270px] overflow-hidden rounded-[2rem] border border-white/15 p-2 shadow-2xl" style={{ background: '#0a1526' }}>
                <div className="h-full w-full overflow-hidden rounded-[1.55rem]">
                  <ChatMock messages={CHAT_VENDAS} theme={chatNavy} title="Sofia · IA da sua academia" />
                </div>
              </div>
              <FloatCard title="Aula experimental ✅" sub="Ana · quinta 19h" className="absolute -left-36 top-16 max-lg:hidden" />
              <FloatCard title="Pix recebido 💸" sub="R$ 297 · mensalidade" className="absolute -right-36 bottom-24 max-lg:hidden [animation-delay:1.2s]" />
            </div>

            {/* coluna direita */}
            <div className="fade-up text-center md:text-right" style={{ animationDelay: '0.35s' }}>
              <h2 className="text-[3rem] font-semibold leading-[1.02] tracking-[-0.02em] md:text-[4.2rem]">
                <span className="block" style={{ color: P.orange }}>
                  &amp; de vendas
                </span>
                <span className="block text-white">por IA</span>
              </h2>
              <div className="mt-8 space-y-5 md:flex md:flex-col md:items-end">
                <div>
                  <p className="text-4xl font-semibold text-white">24/7</p>
                  <p className="text-[11.5px]" style={{ color: P.muted }}>
                    atendimento por IA
                    <br />
                    no WhatsApp
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-semibold text-white">40+</p>
                  <p className="text-[11.5px]" style={{ color: P.muted }}>
                    ações executadas
                    <br />
                    pelo Murph
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="relative mt-12 text-center text-[12.5px]" style={{ color: P.muted }}>
            {PROVA}
          </p>
        </div>
      </section>

      {/* STRIP DE STATS */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {[
            ['2.000+', 'alunos geridos em produção'],
            ['24/7', 'IA vendendo no WhatsApp'],
            ['40+', 'ações do secretário Murph'],
            ['100%', 'com a marca da sua academia'],
          ].map(([v, l], i) => (
            <div key={l} className={`px-6 text-center md:text-left ${i > 0 ? 'md:border-l md:border-white/10' : ''}`}>
              <p className="text-5xl font-light tracking-tight text-white">{v}</p>
              <p className="mt-2 text-[12.5px] leading-snug" style={{ color: P.faint }}>
                {l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CANVAS LARANJA — Murph (contraste quente) */}
      <section className="mx-auto max-w-[1240px] px-4">
        <div
          className="overflow-hidden rounded-[2rem] px-6 py-14 md:px-14 md:py-18"
          style={{ background: `linear-gradient(150deg, ${P.orangeLight}, ${P.orange})` }}
        >
          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
            <div>
              <h2 className="max-w-md text-3xl font-semibold leading-tight md:text-[2.5rem]" style={{ color: '#211100' }}>
                Murph: o secretário de IA que trabalha para o dono.
              </h2>
              <p className="mt-4 max-w-md text-[14px] leading-relaxed" style={{ color: '#4a2a08' }}>
                &ldquo;Cobra os inadimplentes acima de 7 dias&rdquo; — e o Murph cobra. Mais de 40
                ações reais no sistema por mensagem de WhatsApp, com aprovação S/N no que é
                sensível e permissão por papel.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Permissão por papel: dono, gerente, recepção, coach',
                  'Aprovação S/N antes de qualquer ação sensível',
                  'Responde com dados reais do sistema, na hora',
                ].map((li) => (
                  <li key={li} className="flex items-center gap-3 text-[13.5px] font-medium" style={{ color: '#211100' }}>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ background: '#211100', color: P.orangeLight }}>
                      <Check size={11} strokeWidth={3.5} />
                    </span>
                    {li}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-6xl font-semibold" style={{ color: '#211100' }}>
                1 = 3
              </p>
              <p className="mt-1 max-w-[280px] text-[12px] font-medium" style={{ color: '#4a2a08' }}>
                uma secretária com o Murph rende como três sem ele
              </p>
            </div>
            <div className="mx-auto h-[430px] w-[280px] overflow-hidden rounded-[1.8rem] border-2 border-black/20 p-2 shadow-2xl" style={{ background: '#0a1526' }}>
              <div className="h-full w-full overflow-hidden rounded-[1.35rem]">
                <ChatMock messages={CHAT_MURPH} theme={chatNavy} title="Murph · Secretário IA" subtitle="modo dono" step={0.7} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mx-auto max-w-xl text-center text-3xl font-semibold leading-tight md:text-4xl">
          Tudo que uma academia precisa. <span style={{ color: P.orange }}>Num sistema só.</span>
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m, i) => (
            <div
              key={m.title}
              className="fade-up rounded-2xl border border-white/8 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
              style={{ background: P.card, animationDelay: `${i * 0.05}s` }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full" style={{ background: '#ffffff10', color: i % 2 === 0 ? P.blue : P.orangeLight }}>
                <m.icon size={20} strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-[15.5px] font-semibold leading-snug">{m.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed" style={{ color: P.muted }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS — canvas claro (inversão editorial) */}
      <section className="mx-auto max-w-[1240px] px-4 pb-20">
        <div className="rounded-[2rem] bg-white px-6 py-14 md:px-14" style={{ color: '#17191c' }}>
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center">
            <h2 className="text-3xl font-semibold leading-tight md:text-[2.4rem]">
              O que só o<br />
              <span style={{ color: P.orange }}>EvoFit</span> faz.
            </h2>
            <ol className="divide-y divide-black/8">
              {DIFERENCIAIS.map((d, i) => (
                <li key={d} className="flex items-center gap-5 py-3.5">
                  <span className="text-xl font-light" style={{ color: P.orange }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[14px]">{d}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* SPECIMEN */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-center text-2xl font-semibold">Design System · 09 Navy Editorial</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/8 p-6" style={{ background: P.card }}>
            <p className="text-sm font-semibold" style={{ color: P.orangeLight }}>Paleta</p>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {[
                ['#070d18', 'outer'],
                ['#0c1830', 'canvas'],
                ['#4eaaee', 'blue'],
                ['#f08020', 'orange'],
                ['#eaf1fb', 'text'],
              ].map(([hex, name]) => (
                <div key={hex} className="text-center">
                  <div className="h-14 w-full rounded-lg border border-white/10" style={{ background: hex }} />
                  <p className="mt-1.5 text-[10px] font-medium" style={{ color: P.muted }}>
                    {name}
                    <br />
                    {hex}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm font-semibold" style={{ color: P.orangeLight }}>Tipografia</p>
            <p className="mt-2 text-2xl font-semibold">Instrument Sans — display e corpo</p>
            <p className="text-[13px]" style={{ color: P.muted }}>Headline em camadas azul/laranja · numerais light</p>
          </div>
          <div className="rounded-2xl border border-white/8 p-6" style={{ background: P.card }}>
            <p className="text-sm font-semibold" style={{ color: P.orangeLight }}>Botões e badges</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <BtnWhite>Primário</BtnWhite>
              <button className="cursor-pointer rounded-lg border border-white/25 px-6 py-3 text-[14px] font-semibold" style={{ color: P.text }}>
                Secundário
              </button>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full px-3 py-1 text-[11px] font-semibold" style={{ background: '#4eaaee26', color: P.blue }}>
                EM PRODUÇÃO
              </span>
              <span className="rounded-full px-3 py-1 text-[11px] font-semibold" style={{ background: '#f0802026', color: P.orangeLight }}>
                EM ATIVAÇÃO
              </span>
            </div>
            <p className="mt-6 text-sm font-semibold" style={{ color: P.orangeLight }}>Assinaturas visuais</p>
            <p className="mt-2 text-[13px] leading-relaxed" style={{ color: P.muted }}>
              Estrutura editorial (canvas arredondados, headline em camadas, watermark, float cards)
              vestida com o navy da marca · canvas laranja quente pro Murph · canvas branco de
              inversão nos diferenciais · sem órbitas/glow (isso é do Solar).
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-[1240px] px-4 pb-6">
        <div
          className="relative overflow-hidden rounded-[2rem] px-8 py-16 text-center"
          style={{ background: `linear-gradient(165deg, ${P.canvas2}, ${P.canvas})` }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.16] blur-[100px]"
            style={{ background: P.orange }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight md:text-[2.6rem]">
              Pronto para evoluir a gestão da sua academia?
            </h2>
            <p className="mt-3 text-[14px]" style={{ color: P.muted }}>
              {LEMA}.
            </p>
            <div className="mt-8 flex justify-center">
              <BtnWhite>{CTA_PRIMARY}</BtnWhite>
            </div>
          </div>
        </div>
        <footer className="flex items-center justify-between px-4 py-8 text-[12px]" style={{ color: P.faint }}>
          <EvoFitWordmark className="text-lg" glow={false} />
          <span>EvoFit © 2026 — Evotech System</span>
        </footer>
      </section>

      <DsSwitcher current="/ds/9" />
    </main>
  );
}
