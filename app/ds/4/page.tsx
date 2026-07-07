import type { Metadata } from 'next';
import { ArrowRight, Check } from 'lucide-react';
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

export const metadata: Metadata = { title: 'DS 4 · Grafite' };

const P = {
  bg: '#0a0a0b',
  panel: '#101012',
  card: '#131316',
  line: '#ffffff14',
  lineSoft: '#ffffff0a',
  text: '#ededf0',
  muted: '#8f8f98',
  faint: '#5c5c66',
  orange: '#f08020',
};

const mono = {
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
} as const;

function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`font-bold tracking-tight ${className}`} style={{ color: P.text }}>
      Evo<span style={{ color: P.orange }}>Fit</span>
    </span>
  );
}

function BtnPrimary({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="inline-flex cursor-pointer items-center gap-2 rounded-lg px-6 py-3 text-[14px] font-medium text-black transition-opacity hover:opacity-85"
      style={{ background: P.orange }}
    >
      {children}
      <ArrowRight size={15} strokeWidth={2.4} />
    </button>
  );
}

function BtnGhost({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="inline-flex cursor-pointer items-center gap-2 rounded-lg border px-6 py-3 text-[14px] font-medium transition-colors hover:border-white/40"
      style={{ borderColor: P.line, color: P.text }}
    >
      {children}
    </button>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-[0.22em]" style={{ ...mono, color: P.faint }}>
      <span style={{ color: P.orange }}>●</span> {children}
    </p>
  );
}

const chatGraphite = {
  bg: '#0d0d0f',
  headerBg: '#141417',
  headerText: P.text,
  inBg: '#1b1b1f',
  inText: P.text,
  outBg: '#26221c',
  outText: '#ffd9b0',
  metaText: '#ffffff44',
};

export default function DsGrafite() {
  return (
    <main className="min-h-screen" style={{ background: P.bg, color: P.text }}>
      {/* NAV */}
      <header
        className="sticky top-0 z-30 backdrop-blur-md"
        style={{ background: '#0a0a0bd9', borderBottom: `1px solid ${P.lineSoft}` }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <Wordmark className="text-lg" />
          <nav className="hidden items-center gap-7 text-[13px] md:flex" style={{ color: P.muted }}>
            <span className="cursor-pointer transition-colors hover:text-white">Funcionalidades</span>
            <span className="cursor-pointer transition-colors hover:text-white">IA de Vendas</span>
            <span className="cursor-pointer transition-colors hover:text-white">Murph</span>
            <span className="cursor-pointer transition-colors hover:text-white">Integrações</span>
          </nav>
          <button
            className="cursor-pointer rounded-lg px-4 py-2 text-[13px] font-medium text-black transition-opacity hover:opacity-85"
            style={{ background: P.orange }}
          >
            {CTA_PRIMARY}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* grid hairline de fundo */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${P.lineSoft} 1px, transparent 1px), linear-gradient(90deg, ${P.lineSoft} 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 75%)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-220px] h-[440px] w-[820px] -translate-x-1/2 rounded-full opacity-[0.13] blur-[110px]"
          style={{ background: P.orange }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 md:pt-32">
          <div className="fade-up">
            <Kicker>Evotech System — plataforma de gestão com IA</Kicker>
          </div>
          <h1
            className="fade-up mt-6 max-w-4xl text-[2.7rem] font-semibold leading-[1.04] tracking-[-0.035em] md:text-[4.5rem]"
            style={{ animationDelay: '0.1s' }}
          >
            A evolução em sistemas de gerenciamento{' '}
            <span style={{ color: P.faint }}>para academias.</span>
          </h1>
          <p
            className="fade-up mt-6 max-w-xl text-[16px] leading-relaxed"
            style={{ color: P.muted, animationDelay: '0.22s' }}
          >
            {SUB}
          </p>
          <div className="fade-up mt-9 flex flex-wrap gap-3" style={{ animationDelay: '0.32s' }}>
            <BtnPrimary>{CTA_PRIMARY}</BtnPrimary>
            <BtnGhost>{CTA_SECONDARY} ↓</BtnGhost>
          </div>
          <p
            className="fade-up mt-8 text-[12.5px]"
            style={{ ...mono, color: P.faint, animationDelay: '0.44s' }}
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 align-middle" />
            {PROVA}
          </p>

          {/* stats em régua */}
          <div
            className="fade-up mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl md:grid-cols-4"
            style={{ background: P.line, border: `1px solid ${P.line}`, animationDelay: '0.5s' }}
          >
            {STATS.map((s) => (
              <div key={s.label} className="p-5" style={{ background: P.panel }}>
                <p className="text-2xl font-semibold tracking-tight md:text-3xl" style={mono}>
                  {s.value}
                </p>
                <p className="mt-1 text-[12px] leading-snug" style={{ color: P.muted }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHATS lado a lado */}
      <section className="border-t px-6 py-24" style={{ borderColor: P.lineSoft }}>
        <div className="mx-auto max-w-6xl">
          <Kicker>02 — duas IAs em produção</Kicker>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.02em] md:text-[2.5rem]">
            Uma vende pro lead.
            <br />
            <span style={{ color: P.faint }}>A outra trabalha pro dono.</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                label: 'ia-de-vendas · funil EVOLEAD',
                chat: CHAT_VENDAS,
                title: 'Sofia · IA da sua academia',
                sub: 'online',
                step: 0.55,
                bullets: [
                  'Qualifica, cota e agenda a aula experimental',
                  'Follow-up 30min / 1d / 7d / 15d automático',
                  'Handoff pra equipe humana a qualquer momento',
                ],
              },
              {
                label: 'murph · copiloto do dono',
                chat: CHAT_MURPH,
                title: 'Murph · Secretário IA',
                sub: 'modo dono',
                step: 0.75,
                bullets: [
                  '40+ ações reais no sistema por mensagem',
                  'Aprovação S/N pra tudo que é sensível',
                  'Permissão por papel: dono, gerente, recepção, coach',
                ],
              },
            ].map((c) => (
              <div
                key={c.label}
                className="rounded-2xl p-6"
                style={{ background: P.panel, border: `1px solid ${P.line}` }}
              >
                <p className="text-[11px] uppercase tracking-[0.18em]" style={{ ...mono, color: P.orange }}>
                  {c.label}
                </p>
                <div
                  className="mt-5 h-[380px] overflow-hidden rounded-xl"
                  style={{ border: `1px solid ${P.line}` }}
                >
                  <ChatMock messages={c.chat} theme={chatGraphite} title={c.title} subtitle={c.sub} step={c.step} />
                </div>
                <ul className="mt-5 space-y-2.5">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[13px]" style={{ color: P.muted }}>
                      <Check size={14} strokeWidth={2.5} className="mt-0.5 shrink-0" color={P.orange} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className="border-t px-6 py-24" style={{ borderColor: P.lineSoft }}>
        <div className="mx-auto max-w-6xl">
          <Kicker>03 — plataforma completa</Kicker>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.02em] md:text-[2.5rem]">
            Tudo que uma academia precisa.
            <br />
            <span style={{ color: P.faint }}>Num sistema só.</span>
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl sm:grid-cols-2 lg:grid-cols-4" style={{ background: P.line, border: `1px solid ${P.line}` }}>
            {MODULES.map((m) => (
              <div
                key={m.title}
                className="group p-6 transition-colors duration-300"
                style={{ background: P.card }}
              >
                <m.icon size={20} strokeWidth={1.6} color={P.muted} className="transition-colors duration-300 group-hover:stroke-[#f08020]" />
                <h3 className="mt-4 text-[15px] font-medium leading-snug">{m.title}</h3>
                <p className="mt-2 text-[12.5px] leading-relaxed" style={{ color: P.muted }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="border-t px-6 py-24" style={{ borderColor: P.lineSoft }}>
        <div className="mx-auto max-w-6xl">
          <Kicker>04 — por que EvoFit</Kicker>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] md:text-[2.5rem]">
            O que só o EvoFit faz.
          </h2>
          <ol className="mt-10 grid gap-x-10 md:grid-cols-2">
            {DIFERENCIAIS.map((d, i) => (
              <li
                key={d}
                className="flex items-baseline gap-4 border-t py-4 text-[14px] leading-relaxed"
                style={{ borderColor: P.lineSoft, color: P.text }}
              >
                <span className="text-[12px]" style={{ ...mono, color: P.orange }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {d}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SPECIMEN */}
      <section className="border-t px-6 py-24" style={{ borderColor: P.lineSoft }}>
        <div className="mx-auto max-w-6xl">
          <Kicker>05 — design system · 04 grafite</Kicker>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl p-6" style={{ background: P.panel, border: `1px solid ${P.line}` }}>
              <p className="text-[12px] uppercase tracking-[0.18em]" style={{ ...mono, color: P.faint }}>Paleta</p>
              <div className="mt-4 grid grid-cols-5 gap-2">
                {[
                  ['#0a0a0b', 'bg'],
                  ['#131316', 'card'],
                  ['#8f8f98', 'muted'],
                  ['#f08020', 'orange'],
                  ['#ededf0', 'text'],
                ].map(([hex, name]) => (
                  <div key={hex} className="text-center">
                    <div className="h-14 w-full rounded-lg" style={{ background: hex, border: `1px solid ${P.line}` }} />
                    <p className="mt-1.5 text-[10px]" style={{ ...mono, color: P.muted }}>
                      {name}
                      <br />
                      {hex}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[12px] uppercase tracking-[0.18em]" style={{ ...mono, color: P.faint }}>Tipografia</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight">Inter apertada — títulos</p>
              <p className="text-[13px]" style={{ ...mono, color: P.muted }}>monospace — kickers, números e metadados</p>
            </div>
            <div className="rounded-2xl p-6" style={{ background: P.panel, border: `1px solid ${P.line}` }}>
              <p className="text-[12px] uppercase tracking-[0.18em]" style={{ ...mono, color: P.faint }}>Botões e badges</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <BtnPrimary>Primário</BtnPrimary>
                <BtnGhost>Secundário</BtnGhost>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-md px-2.5 py-1 text-[11px] font-medium" style={{ ...mono, background: '#f0802022', color: P.orange }}>
                  EM_PRODUCAO
                </span>
                <span className="rounded-md px-2.5 py-1 text-[11px] font-medium" style={{ ...mono, background: '#ffffff10', color: P.muted }}>
                  EM_ATIVACAO
                </span>
              </div>
              <p className="mt-6 text-[12px] uppercase tracking-[0.18em]" style={{ ...mono, color: P.faint }}>Assinaturas visuais</p>
              <p className="mt-2 text-[13px] leading-relaxed" style={{ color: P.muted }}>
                Grid hairline no hero · réguas de 1px entre cards · um único acento laranja ·
                zero glow, zero gradiente chamativo · numeração monospace nas seções.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t px-6 py-28 text-center" style={{ borderColor: P.lineSoft }}>
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.02em] md:text-[2.8rem]">
          Pronto para evoluir a gestão da sua academia?
        </h2>
        <p className="mt-4 text-[14px]" style={{ color: P.muted }}>
          {LEMA}.
        </p>
        <div className="mt-9 flex justify-center gap-3">
          <BtnPrimary>{CTA_PRIMARY}</BtnPrimary>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-8" style={{ borderColor: P.lineSoft }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-[12px]" style={{ color: P.faint }}>
          <Wordmark className="text-base" />
          <span style={mono}>EvoFit © 2026 — Evotech System</span>
        </div>
      </footer>

      <DsSwitcher current="/ds/4" />
    </main>
  );
}
