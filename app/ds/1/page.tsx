import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { ArrowRight, Check } from 'lucide-react';
import { EVO, EvoFitWordmark, Eyebrow } from '@/components/brand';
import { SolarBackdrop } from '@/components/solar-backdrop';
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

export const metadata: Metadata = { title: 'DS 1 · Solar' };

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-grotesk',
});

const display = { fontFamily: 'var(--font-grotesk)' };

/* ── componentes locais do DS Solar ── */

function BtnPrimary({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="inline-flex cursor-pointer items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
      style={{
        background: `linear-gradient(135deg, ${EVO.orange}, ${EVO.orangeDeep})`,
        boxShadow: `0 8px 32px ${EVO.orange}55, inset 0 1px 0 #ffffff33`,
      }}
    >
      {children}
      <ArrowRight size={17} strokeWidth={2.5} />
    </button>
  );
}

function BtnSecondary({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="inline-flex cursor-pointer items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition-colors duration-200 hover:bg-white/5"
      style={{ border: `1px solid ${EVO.blue}66`, color: EVO.blueLight }}
    >
      {children}
    </button>
  );
}

function GlowCard({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`fade-up rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 ${className}`}
      style={{
        background: `linear-gradient(${EVO.navy2}, ${EVO.navy2}) padding-box, linear-gradient(135deg, ${EVO.blue}44, ${EVO.orange}30) border-box`,
        border: '1px solid transparent',
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span
        className="text-[11px] font-semibold uppercase"
        style={{ letterSpacing: '0.35em', color: EVO.blueLight }}
      >
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl" style={display}>
        {title}
      </h2>
      {lead && (
        <p className="mt-4 text-[15px] leading-relaxed" style={{ color: EVO.textMuted }}>
          {lead}
        </p>
      )}
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mx-auto h-[540px] w-[290px] overflow-hidden rounded-[2.2rem] border border-white/15 p-2 shadow-2xl"
      style={{ background: `linear-gradient(180deg, ${EVO.navy3}, ${EVO.navy2})` }}
    >
      <div className="h-full w-full overflow-hidden rounded-[1.7rem]">{children}</div>
    </div>
  );
}

const chatThemeSolar = {
  bg: EVO.navy,
  headerBg: EVO.navy3,
  headerText: EVO.text,
  inBg: '#152238',
  inText: EVO.text,
  outBg: '#0d3b2e',
  outText: '#dcfce7',
  metaText: '#ffffff55',
};

/* ── página ── */

export default function DsSolar() {
  return (
    <main
      className={`${grotesk.variable} min-h-screen`}
      style={{ background: EVO.navy, color: EVO.text }}
    >
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <EvoFitWordmark className="text-2xl" />
          <nav className="hidden items-center gap-7 text-[13.5px] font-medium md:flex" style={{ color: EVO.textMuted }}>
            <span className="cursor-pointer transition-colors hover:text-white">Funcionalidades</span>
            <span className="cursor-pointer transition-colors hover:text-white">IA de Vendas</span>
            <span className="cursor-pointer transition-colors hover:text-white">Murph</span>
            <span className="cursor-pointer transition-colors hover:text-white">Integrações</span>
          </nav>
          <button
            className="cursor-pointer rounded-full px-5 py-2.5 text-[13.5px] font-semibold text-white"
            style={{
              background: `linear-gradient(135deg, ${EVO.orange}, ${EVO.orangeDeep})`,
              boxShadow: `0 4px 20px ${EVO.orange}44`,
            }}
          >
            {CTA_PRIMARY}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-[94vh] items-center overflow-hidden">
        <SolarBackdrop />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-24 pb-16">
          <div className="max-w-2xl">
            <div className="fade-up" style={{ animationDelay: '0.05s' }}>
              <Eyebrow />
            </div>
            <h1
              className="fade-up mt-4 text-[2.6rem] font-bold leading-[1.06] md:text-6xl"
              style={{ ...display, animationDelay: '0.15s' }}
            >
              A{' '}
              <span
                style={{
                  background: `linear-gradient(90deg, ${EVO.blueLight}, ${EVO.orange})`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                evolução
              </span>{' '}
              em sistemas de gerenciamento para academias
            </h1>
            <p
              className="fade-up mt-6 max-w-xl text-[17px] leading-relaxed"
              style={{ color: EVO.textMuted, animationDelay: '0.28s' }}
            >
              {SUB}
            </p>
            <div className="fade-up mt-9 flex flex-wrap gap-3" style={{ animationDelay: '0.4s' }}>
              <BtnPrimary>{CTA_PRIMARY}</BtnPrimary>
              <BtnSecondary>{CTA_SECONDARY} ↓</BtnSecondary>
            </div>
            <p
              className="fade-up mt-8 flex items-center gap-2.5 text-[13px]"
              style={{ color: EVO.textMuted, animationDelay: '0.55s' }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              {PROVA}
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative mx-auto -mt-8 max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((s, i) => (
            <GlowCard key={s.label} delay={i * 0.08} className="text-center">
              <p
                className="text-3xl font-bold md:text-4xl"
                style={{
                  ...display,
                  background: `linear-gradient(180deg, #fff, ${EVO.blueLight})`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {s.value}
              </p>
              <p className="mt-1.5 text-[12.5px] leading-snug" style={{ color: EVO.textMuted }}>
                {s.label}
              </p>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* CHAT — IA DE VENDAS */}
      <section className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
          style={{ background: `radial-gradient(circle, ${EVO.blue}, transparent 70%)` }}
        />
        <div className="relative grid items-center gap-14 md:grid-cols-2">
          <div>
            <span
              className="text-[11px] font-semibold uppercase"
              style={{ letterSpacing: '0.35em', color: EVO.blueLight }}
            >
              IA de vendas · Funil EVOLEAD
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-[2.6rem]" style={display}>
              Sua academia nunca mais perde um lead.
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed" style={{ color: EVO.textMuted }}>
              Conversa de verdade, não robô de botões: a IA acolhe, qualifica, cota o plano ideal e
              agenda a aula experimental — dentro do WhatsApp, a qualquer hora.
            </p>
            <ul className="mt-7 space-y-3.5">
              {[
                'Follow-up automático: 30min, 1, 7 e 15 dias sem resposta',
                'Resgate de no-show e cadência pós-aula',
                'Persona com o nome e o jeito da sua academia',
                'Handoff pra equipe humana a qualquer momento',
              ].map((li) => (
                <li key={li} className="flex items-start gap-3 text-[14.5px]" style={{ color: EVO.text }}>
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{ background: `${EVO.blue}33`, color: EVO.blueLight }}
                  >
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {li}
                </li>
              ))}
            </ul>
          </div>
          <PhoneFrame>
            <ChatMock messages={CHAT_VENDAS} theme={chatThemeSolar} title="Sofia · IA da sua academia" />
          </PhoneFrame>
        </div>
      </section>

      {/* MURPH */}
      <section className="relative py-24 md:py-28" style={{ background: EVO.navy2 }}>
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <PhoneFrame>
              <ChatMock
                messages={CHAT_MURPH}
                theme={{ ...chatThemeSolar, outBg: `${EVO.orangeDeep}55`, outText: '#ffe8d1' }}
                title="Murph · Secretário IA"
                subtitle="modo dono"
                step={0.7}
              />
            </PhoneFrame>
          </div>
          <div className="order-1 md:order-2">
            <span
              className="text-[11px] font-semibold uppercase"
              style={{ letterSpacing: '0.35em', color: EVO.orangeLight }}
            >
              Murph · Copiloto do dono
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-[2.6rem]" style={display}>
              O secretário de IA que trabalha para o dono.
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed" style={{ color: EVO.textMuted }}>
              Mande no WhatsApp: &ldquo;cobra os inadimplentes acima de 7 dias&rdquo; ou &ldquo;quem
              tá em risco de cancelar?&rdquo; — o Murph executa. São mais de 40 ações reais no
              sistema, com aprovação S/N pra tudo que é sensível e permissão por papel: dono,
              gerente, recepção e coach.
            </p>
          </div>
        </div>
      </section>

      {/* MÓDULOS — BENTO */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Plataforma completa"
          title="Tudo que uma academia precisa. Num sistema só."
          lead="Da primeira mensagem do lead até a catraca girar — cada módulo conversa com os outros."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m, i) => (
            <GlowCard key={m.title} delay={i * 0.06}>
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: `${EVO.blue}22`, color: EVO.blueLight }}
              >
                <m.icon size={21} strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-[16px] font-semibold leading-snug" style={display}>
                {m.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed" style={{ color: EVO.textMuted }}>
                {m.desc}
              </p>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="relative overflow-hidden py-24" style={{ background: EVO.navy2 }}>
        <div
          className="pointer-events-none absolute right-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full opacity-15 blur-[100px]"
          style={{ background: EVO.orange }}
        />
        <div className="relative mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="Por que EvoFit" title="O que só o EvoFit faz." />
          <ul className="mt-12 space-y-3">
            {DIFERENCIAIS.map((d, i) => (
              <li
                key={d}
                className="fade-up flex items-center gap-4 rounded-xl border border-white/8 px-5 py-4 text-[14.5px]"
                style={{ background: `${EVO.navy}88`, animationDelay: `${i * 0.05}s` }}
              >
                <span
                  className="text-lg font-bold"
                  style={{ ...display, color: EVO.orange, minWidth: '2ch' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SPECIMEN DO DESIGN SYSTEM */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Design System · 01 Solar"
          title="Tokens e componentes desta direção"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <GlowCard>
            <p className="text-sm font-semibold" style={{ color: EVO.blueLight }}>Paleta</p>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {[
                ['#060e1c', 'navy'],
                ['#0a1526', 'navy2'],
                ['#2277ee', 'blue'],
                ['#f08020', 'orange'],
                ['#eaf1fb', 'text'],
              ].map(([hex, name]) => (
                <div key={hex} className="text-center">
                  <div
                    className="h-14 w-full rounded-lg border border-white/10"
                    style={{ background: hex }}
                  />
                  <p className="mt-1.5 text-[10px] font-medium" style={{ color: EVO.textMuted }}>
                    {name}
                    <br />
                    {hex}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm font-semibold" style={{ color: EVO.blueLight }}>Tipografia</p>
            <p className="mt-2 text-2xl font-bold" style={display}>Space Grotesk — títulos</p>
            <p className="text-[14px]" style={{ color: EVO.textMuted }}>Inter — corpo de texto e interface</p>
          </GlowCard>
          <GlowCard>
            <p className="text-sm font-semibold" style={{ color: EVO.blueLight }}>Botões e badges</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <BtnPrimary>Primário</BtnPrimary>
              <BtnSecondary>Secundário</BtnSecondary>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <span
                className="rounded-full px-3 py-1 text-[11px] font-semibold"
                style={{ background: `${EVO.blue}26`, color: EVO.blueLight }}
              >
                EM PRODUÇÃO
              </span>
              <span
                className="rounded-full border px-3 py-1 text-[11px] font-semibold"
                style={{ borderColor: `${EVO.orange}66`, color: EVO.orangeLight }}
              >
                EM ATIVAÇÃO
              </span>
            </div>
            <p className="mt-6 text-sm font-semibold" style={{ color: EVO.blueLight }}>Assinaturas visuais</p>
            <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: EVO.textMuted }}>
              Fundo solar animado com órbitas · glow azul/laranja · cards com borda em gradiente ·
              glass sutil · gradientes de texto nos números.
            </p>
          </GlowCard>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden py-28 text-center" style={{ background: EVO.navy2 }}>
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[110px]"
          style={{ background: `radial-gradient(ellipse, ${EVO.orange}, transparent 70%)` }}
        />
        <div className="relative mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-bold leading-tight md:text-5xl" style={display}>
            Pronto para evoluir a gestão da sua academia?
          </h2>
          <p className="mt-5 text-[15.5px]" style={{ color: EVO.textMuted }}>
            {LEMA}.
          </p>
          <div className="mt-9 flex justify-center">
            <BtnPrimary>{CTA_PRIMARY}</BtnPrimary>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/8 py-10 text-center">
        <EvoFitWordmark className="text-xl" glow={false} />
        <p className="mt-2 text-xs" style={{ color: EVO.textFaint }}>
          EvoFit © 2026 — Evotech System
        </p>
      </footer>

      <DsSwitcher current="/ds/1" />
    </main>
  );
}
