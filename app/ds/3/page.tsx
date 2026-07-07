import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';
import { ArrowRight, Check, TrendingUp, Users } from 'lucide-react';
import { EVO, EvoFitWordmarkMono } from '@/components/brand';
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

export const metadata: Metadata = { title: 'DS 3 · Contraste' };

const instrument = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument',
});

const P = {
  paper: '#f7f8fa',
  ink: '#17191c',
  navy: EVO.navy2,
  orange: EVO.orange,
  orangeDeep: EVO.orangeDeep,
  muted: '#5b6572',
};

const display = { fontFamily: 'var(--font-instrument)' };

function BtnOrange({ children, big = false }: { children: React.ReactNode; big?: boolean }) {
  return (
    <button
      className={`inline-flex cursor-pointer items-center gap-2.5 rounded-xl font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 ${
        big ? 'px-8 py-4 text-[15px]' : 'px-6 py-3 text-[14px]'
      }`}
      style={{
        background: `linear-gradient(135deg, ${P.orange}, ${P.orangeDeep})`,
        boxShadow: `0 6px 24px ${P.orange}44`,
      }}
    >
      {children}
      <ArrowRight size={16} strokeWidth={2.4} />
    </button>
  );
}

const chatDark = {
  bg: EVO.navy,
  headerBg: EVO.navy3,
  headerText: EVO.text,
  inBg: '#152238',
  inText: EVO.text,
  outBg: '#0d3b2e',
  outText: '#dcfce7',
  metaText: '#ffffff55',
};

export default function DsContraste() {
  return (
    <main
      className={`${instrument.variable} min-h-screen`}
      style={{ background: P.paper, color: P.ink, ...display }}
    >
      {/* NAV */}
      <header className="sticky top-0 z-30 border-b border-black/5 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <EvoFitWordmarkMono className="text-xl" color={P.ink} accent={P.orange} />
          <nav className="hidden items-center gap-8 text-[13.5px] font-medium md:flex" style={{ color: P.muted }}>
            <span className="cursor-pointer transition-colors hover:text-black">Funcionalidades</span>
            <span className="cursor-pointer transition-colors hover:text-black">IA de Vendas</span>
            <span className="cursor-pointer transition-colors hover:text-black">Murph</span>
            <span className="cursor-pointer transition-colors hover:text-black">Integrações</span>
          </nav>
          <BtnOrange>{CTA_PRIMARY}</BtnOrange>
        </div>
      </header>

      {/* HERO claro editorial */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
        <div className="grid items-center gap-14 md:grid-cols-[1.15fr_1fr]">
          <div>
            <span
              className="fade-up inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[12px] font-semibold"
              style={{ borderColor: `${P.orange}55`, color: P.orangeDeep, background: `${P.orange}0d` }}
            >
              ⚡ Gestão + vendas por IA, num sistema só
            </span>
            <h1
              className="fade-up mt-6 text-[2.9rem] font-semibold leading-[1.03] tracking-[-0.025em] md:text-[4.2rem]"
              style={{ animationDelay: '0.1s' }}
            >
              A{' '}
              <span className="relative inline-block">
                <span className="relative z-10" style={{ color: P.orangeDeep }}>
                  evolução
                </span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 z-0 h-4 -rotate-1 rounded-sm md:h-6"
                  style={{ background: `${P.orange}2e` }}
                />
              </span>{' '}
              em sistemas de gerenciamento para academias
            </h1>
            <p
              className="fade-up mt-6 max-w-lg text-[16.5px] leading-relaxed"
              style={{ color: P.muted, animationDelay: '0.22s' }}
            >
              {SUB}
            </p>
            <div className="fade-up mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: '0.34s' }}>
              <BtnOrange big>{CTA_PRIMARY}</BtnOrange>
              <button
                className="cursor-pointer rounded-xl border border-black/15 px-7 py-4 text-[15px] font-semibold transition-colors hover:border-black/40"
              >
                {CTA_SECONDARY} ↓
              </button>
            </div>
            <p className="fade-up mt-7 flex items-center gap-2 text-[13px]" style={{ color: P.muted, animationDelay: '0.46s' }}>
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {PROVA}
            </p>
          </div>

          {/* composição de cards do painel */}
          <div className="fade-up relative mx-auto w-full max-w-[400px]" style={{ animationDelay: '0.3s' }}>
            <div className="rounded-3xl p-6 shadow-xl" style={{ background: P.navy }}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: EVO.blueLight }}>
                Painel · hoje
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/5 p-4">
                  <Users size={18} color={EVO.blueLight} />
                  <p className="mt-2 text-2xl font-semibold text-white">87%</p>
                  <p className="text-[11px]" style={{ color: EVO.textMuted }}>ocupação das aulas</p>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <TrendingUp size={18} color={P.orange} />
                  <p className="mt-2 text-2xl font-semibold text-white">+12</p>
                  <p className="text-[11px]" style={{ color: EVO.textMuted }}>matrículas na semana</p>
                </div>
              </div>
              <div className="mt-3 rounded-xl bg-white/5 p-4">
                <p className="text-[12px] font-medium text-white">🤖 IA de vendas</p>
                <p className="mt-1 text-[11.5px] leading-relaxed" style={{ color: EVO.textMuted }}>
                  3 aulas experimentais agendadas hoje · 2 follow-ups de no-show enviados · 1 lead
                  transferido pra equipe
                </p>
              </div>
            </div>
            <div className="float-y absolute -left-8 -top-6 rounded-xl bg-white p-3.5 shadow-lg">
              <p className="text-[12px] font-semibold">Pix recebido 💸</p>
              <p className="text-[11px]" style={{ color: P.muted }}>R$ 297 · mensalidade</p>
            </div>
            <div className="float-y absolute -bottom-6 -right-4 rounded-xl bg-white p-3.5 shadow-lg [animation-delay:1.4s]">
              <p className="text-[12px] font-semibold">Aula experimental ✅</p>
              <p className="text-[11px]" style={{ color: P.muted }}>Ana · quinta 19h</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DARK — chat vendas + murph */}
      <section className="mx-auto max-w-[1240px] px-4">
        <div
          className="overflow-hidden rounded-[2rem] px-6 py-16 md:px-14 md:py-20"
          style={{ background: P.navy, color: EVO.text }}
        >
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase" style={{ letterSpacing: '0.3em', color: P.orange }}>
              Dupla de IA
            </span>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-[2.6rem]">
              Uma IA vende pro lead.
              <br />A outra trabalha pro dono.
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed" style={{ color: EVO.textMuted }}>
              A IA de vendas qualifica e agenda no WhatsApp do lead; o Murph executa mais de 40
              ações reais por mensagem do dono — com aprovação S/N no que é sensível.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              { chat: CHAT_VENDAS, title: 'Sofia · IA da sua academia', sub: 'online', label: 'IA de vendas · funil EVOLEAD', step: 0.55 },
              { chat: CHAT_MURPH, title: 'Murph · Secretário IA', sub: 'modo dono', label: 'Murph · copiloto do dono', step: 0.75 },
            ].map((c) => (
              <div key={c.title} className="flex flex-col items-center gap-4">
                <span
                  className="rounded-full px-4 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.14em]"
                  style={{ background: `${P.orange}22`, color: EVO.orangeLight }}
                >
                  {c.label}
                </span>
                <div className="h-[440px] w-[280px] overflow-hidden rounded-[1.8rem] border border-white/12 bg-black/30 p-2">
                  <div className="h-full w-full overflow-hidden rounded-[1.35rem]">
                    <ChatMock messages={c.chat} theme={chatDark} title={c.title} subtitle={c.sub} step={c.step} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS claro */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-semibold tracking-tight md:text-5xl" style={{ color: P.orangeDeep }}>
                {s.value}
              </p>
              <p className="mt-1.5 text-[12.5px]" style={{ color: P.muted }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MÓDULOS claro */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="mx-auto max-w-xl text-center text-3xl font-semibold leading-tight md:text-4xl">
          Tudo que uma academia precisa. <span style={{ color: P.orangeDeep }}>Num sistema só.</span>
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m, i) => (
            <div
              key={m.title}
              className="fade-up group rounded-2xl border border-black/6 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-300"
                style={{ background: `${P.orange}18`, color: P.orangeDeep }}
              >
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

      {/* DIFERENCIAIS — faixa dark */}
      <section className="mx-auto max-w-[1240px] px-4 pb-20">
        <div
          className="rounded-[2rem] px-6 py-14 md:px-14"
          style={{ background: P.ink, color: '#f2f4f7' }}
        >
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center">
            <h2 className="text-3xl font-semibold leading-tight md:text-[2.4rem]">
              O que só o<br />
              <span style={{ color: P.orange }}>EvoFit</span> faz.
            </h2>
            <ul className="space-y-3.5">
              {DIFERENCIAIS.map((d) => (
                <li key={d} className="flex items-start gap-3 text-[14px] leading-relaxed">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{ background: `${P.orange}30`, color: P.orange }}
                  >
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SPECIMEN */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-center text-2xl font-semibold">Design System · 03 Contraste</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-black/6 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold" style={{ color: P.orangeDeep }}>Paleta</p>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {[
                ['#f7f8fa', 'paper'],
                ['#ffffff', 'card'],
                ['#0a1526', 'navy'],
                ['#f08020', 'orange'],
                ['#17191c', 'ink'],
              ].map(([hex, name]) => (
                <div key={hex} className="text-center">
                  <div className="h-14 w-full rounded-lg border border-black/8" style={{ background: hex }} />
                  <p className="mt-1.5 text-[10px] font-medium" style={{ color: P.muted }}>
                    {name}
                    <br />
                    {hex}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm font-semibold" style={{ color: P.orangeDeep }}>Tipografia</p>
            <p className="mt-2 text-2xl font-semibold">Instrument Sans — display</p>
            <p className="text-[13px]" style={{ color: P.muted }}>Inter — corpo · marcação com grifo laranja</p>
          </div>
          <div className="rounded-2xl border border-black/6 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold" style={{ color: P.orangeDeep }}>Botões e badges</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <BtnOrange>Primário</BtnOrange>
              <button className="cursor-pointer rounded-xl border border-black/15 px-6 py-3 text-[14px] font-semibold">
                Secundário
              </button>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <span
                className="rounded-full px-3 py-1 text-[11px] font-semibold"
                style={{ background: `${P.orange}18`, color: P.orangeDeep }}
              >
                EM PRODUÇÃO
              </span>
              <span
                className="rounded-full px-3 py-1 text-[11px] font-semibold"
                style={{ background: '#0a152615', color: '#0a1526' }}
              >
                EM ATIVAÇÃO
              </span>
            </div>
            <p className="mt-6 text-sm font-semibold" style={{ color: P.orangeDeep }}>Assinaturas visuais</p>
            <p className="mt-2 text-[13px] leading-relaxed" style={{ color: P.muted }}>
              Ritmo claro ↔ navy em blocos arredondados · grifo laranja na palavra-chave ·
              composição de cards do painel no hero · dupla de chats na seção dark.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <h2 className="text-3xl font-semibold leading-tight md:text-[2.6rem]">
          Pronto para evoluir a gestão da sua academia?
        </h2>
        <p className="mt-3 text-[14.5px]" style={{ color: P.muted }}>
          {LEMA}.
        </p>
        <div className="mt-8 flex justify-center">
          <BtnOrange big>{CTA_PRIMARY}</BtnOrange>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/6 bg-white py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-[12px]" style={{ color: P.muted }}>
          <EvoFitWordmarkMono className="text-lg" color={P.ink} accent={P.orange} />
          <span>EvoFit © 2026 — Evotech System</span>
        </div>
      </footer>

      <DsSwitcher current="/ds/3" />
    </main>
  );
}
