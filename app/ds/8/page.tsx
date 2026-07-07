import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
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

export const metadata: Metadata = { title: 'DS 8 · Aurora' };

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-grotesk',
});

const P = {
  bg: '#fbfbfd',
  ink: '#1a1c22',
  blue: '#2277ee',
  orange: '#f08020',
  orangeDeep: '#d96a08',
  muted: '#636b78',
};

const display = { fontFamily: 'var(--font-grotesk)' } as const;
const gradText = {
  background: `linear-gradient(100deg, ${P.blue}, ${P.orange})`,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
} as const;

function BtnAurora({ children, soft = false }: { children: React.ReactNode; soft?: boolean }) {
  return (
    <button
      className="inline-flex cursor-pointer items-center gap-2 rounded-full px-7 py-3.5 text-[14.5px] font-semibold transition-all duration-200 hover:-translate-y-0.5"
      style={
        soft
          ? { background: '#ffffff', color: P.ink, boxShadow: '0 2px 14px #1a1c2214', border: '1px solid #e6e8ee' }
          : {
              background: `linear-gradient(135deg, ${P.orange}, ${P.orangeDeep})`,
              color: '#fff',
              boxShadow: `0 10px 30px ${P.orange}4d`,
            }
      }
    >
      {children}
      <ArrowRight size={16} strokeWidth={2.4} />
    </button>
  );
}

function GlassCard({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <div
      className={`fade-up rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_8px_30px_#1a1c220f] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

/* Auroras suaves de fundo */
function Auroras() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -left-40 top-[-160px] h-[520px] w-[520px] rounded-full opacity-[0.16] blur-[110px]"
        style={{ background: P.blue }}
      />
      <div
        className="absolute -right-40 top-[60px] h-[560px] w-[560px] rounded-full opacity-[0.18] blur-[110px]"
        style={{ background: P.orange }}
      />
    </div>
  );
}

const chatAurora = {
  bg: '#f2f4f8',
  headerBg: '#ffffff',
  headerText: P.ink,
  inBg: '#ffffff',
  inText: P.ink,
  outBg: '#e3ecfd',
  outText: '#1c2f52',
  metaText: '#1a1c2255',
};

export default function DsAurora() {
  return (
    <main
      className={`${grotesk.variable} min-h-screen`}
      style={{ background: P.bg, color: P.ink }}
    >
      {/* NAV */}
      <header className="sticky top-4 z-30 px-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/75 px-6 py-3 shadow-[0_4px_20px_#1a1c2210] backdrop-blur-md">
          <EvoFitWordmarkMono className="text-xl" color={P.ink} accent={P.orange} />
          <nav className="hidden items-center gap-8 text-[13.5px] font-medium md:flex" style={{ color: P.muted }}>
            <span className="cursor-pointer transition-colors hover:text-black">Funcionalidades</span>
            <span className="cursor-pointer transition-colors hover:text-black">IA de Vendas</span>
            <span className="cursor-pointer transition-colors hover:text-black">Murph</span>
            <span className="cursor-pointer transition-colors hover:text-black">Integrações</span>
          </nav>
          <button
            className="cursor-pointer rounded-full px-5 py-2.5 text-[13px] font-semibold text-white"
            style={{ background: `linear-gradient(135deg, ${P.orange}, ${P.orangeDeep})`, boxShadow: `0 6px 18px ${P.orange}40` }}
          >
            {CTA_PRIMARY}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-16 md:pt-24">
        <Auroras />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="fade-up inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-1.5 text-[12.5px] font-medium shadow-sm backdrop-blur">
            <Sparkles size={13} color={P.orange} />
            Gestão + vendas com IA para academias
          </span>
          <h1
            className="fade-up mx-auto mt-7 max-w-3xl text-[2.8rem] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[4.2rem]"
            style={{ ...display, animationDelay: '0.1s' }}
          >
            A <span style={gradText}>evolução</span> em sistemas de gerenciamento para academias
          </h1>
          <p className="fade-up mx-auto mt-6 max-w-xl text-[16.5px] leading-relaxed" style={{ color: P.muted, animationDelay: '0.22s' }}>
            {SUB}
          </p>
          <div className="fade-up mt-9 flex flex-wrap justify-center gap-3" style={{ animationDelay: '0.32s' }}>
            <BtnAurora>{CTA_PRIMARY}</BtnAurora>
            <BtnAurora soft>{CTA_SECONDARY} ↓</BtnAurora>
          </div>
          <p className="fade-up mt-7 flex items-center justify-center gap-2 text-[13px]" style={{ color: P.muted, animationDelay: '0.42s' }}>
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {PROVA}
          </p>
        </div>

        {/* trio: chat central + glass stats */}
        <div className="relative mx-auto mt-14 flex max-w-5xl items-end justify-center gap-6 px-6 pb-10">
          <GlassCard className="hidden w-[220px] md:block" delay={0.15}>
            <p className="text-3xl font-semibold" style={{ ...display, ...gradText }}>
              {STATS[0].value}
            </p>
            <p className="mt-1 text-[12.5px]" style={{ color: P.muted }}>{STATS[0].label}</p>
            <div className="mt-4 h-px w-full bg-black/5" />
            <p className="mt-4 text-3xl font-semibold" style={{ ...display, ...gradText }}>
              {STATS[1].value}
            </p>
            <p className="mt-1 text-[12.5px]" style={{ color: P.muted }}>{STATS[1].label}</p>
          </GlassCard>

          <div className="fade-up h-[480px] w-[270px] shrink-0 overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/80 p-2 shadow-[0_24px_60px_#1a1c2226] backdrop-blur" style={{ animationDelay: '0.2s' }}>
            <div className="h-full w-full overflow-hidden rounded-[1.7rem]">
              <ChatMock messages={CHAT_VENDAS} theme={chatAurora} title="Sofia · IA da sua academia" />
            </div>
          </div>

          <GlassCard className="hidden w-[220px] md:block" delay={0.3}>
            <p className="text-3xl font-semibold" style={{ ...display, ...gradText }}>
              {STATS[2].value}
            </p>
            <p className="mt-1 text-[12.5px]" style={{ color: P.muted }}>{STATS[2].label}</p>
            <div className="mt-4 h-px w-full bg-black/5" />
            <p className="mt-4 text-3xl font-semibold" style={{ ...display, ...gradText }}>
              {STATS[3].value}
            </p>
            <p className="mt-1 text-[12.5px]" style={{ color: P.muted }}>{STATS[3].label}</p>
          </GlassCard>
        </div>
      </section>

      {/* MURPH */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.25em]" style={{ color: P.orangeDeep }}>
              Murph · copiloto do dono
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.01em] md:text-[2.6rem]" style={display}>
              O secretário de IA que <span style={gradText}>trabalha para o dono</span>.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed" style={{ color: P.muted }}>
              &ldquo;Cobra os inadimplentes acima de 7 dias&rdquo; — e o Murph cobra. Mais de 40
              ações reais no sistema por mensagem de WhatsApp, com aprovação S/N no que é sensível.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                'Permissão por papel: dono, gerente, recepção, coach',
                'Aprovação S/N antes de qualquer ação sensível',
                'Responde com dados reais do sistema, na hora',
              ].map((li) => (
                <li key={li} className="flex items-center gap-3 text-[14px]">
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-full text-white"
                    style={{ background: `linear-gradient(135deg, ${P.blue}, ${P.orange})` }}
                  >
                    <Check size={11} strokeWidth={3.2} />
                  </span>
                  {li}
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto h-[430px] w-full max-w-[420px] overflow-hidden rounded-3xl border border-white/70 bg-white/75 p-2 shadow-[0_16px_44px_#1a1c221c] backdrop-blur">
            <div className="h-full w-full overflow-hidden rounded-[1.35rem]">
              <ChatMock messages={CHAT_MURPH} theme={chatAurora} title="Murph · Secretário IA" subtitle="modo dono" step={0.7} />
            </div>
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.1] blur-[130px]"
          style={{ background: `linear-gradient(90deg, ${P.blue}, ${P.orange})` }}
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold leading-tight tracking-[-0.01em] md:text-4xl" style={display}>
            Tudo que uma academia precisa. <span style={gradText}>Num sistema só.</span>
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MODULES.map((m, i) => (
              <GlassCard key={m.title} delay={i * 0.05}>
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-2xl text-white"
                  style={{ background: `linear-gradient(135deg, ${i % 2 === 0 ? P.blue : P.orange}, ${i % 2 === 0 ? '#4eaaee' : P.orangeDeep})` }}
                >
                  <m.icon size={20} strokeWidth={1.9} />
                </span>
                <h3 className="mt-4 text-[15.5px] font-semibold leading-snug" style={display}>
                  {m.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed" style={{ color: P.muted }}>
                  {m.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-3xl font-semibold tracking-[-0.01em] md:text-4xl" style={display}>
          O que só o EvoFit faz
        </h2>
        <div className="mt-10 space-y-3">
          {DIFERENCIAIS.map((d, i) => (
            <div
              key={d}
              className="fade-up flex items-center gap-4 rounded-2xl border border-white/70 bg-white/70 px-5 py-4 text-[14px] shadow-sm backdrop-blur"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="text-lg font-semibold" style={{ ...display, ...gradText, minWidth: '2ch' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {d}
            </div>
          ))}
        </div>
      </section>

      {/* SPECIMEN */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl font-semibold" style={display}>
          Design System · <span style={gradText}>08 Aurora</span>
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <GlassCard>
            <p className="text-sm font-semibold" style={{ color: P.orangeDeep }}>Paleta</p>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {[
                ['#fbfbfd', 'bg'],
                ['#ffffff', 'glass'],
                ['#2277ee', 'blue'],
                ['#f08020', 'orange'],
                ['#1a1c22', 'ink'],
              ].map(([hex, name]) => (
                <div key={hex} className="text-center">
                  <div className="h-14 w-full rounded-xl border border-black/8" style={{ background: hex }} />
                  <p className="mt-1.5 text-[10px] font-medium" style={{ color: P.muted }}>
                    {name}
                    <br />
                    {hex}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm font-semibold" style={{ color: P.orangeDeep }}>Tipografia</p>
            <p className="mt-2 text-2xl font-semibold" style={display}>Space Grotesk — títulos</p>
            <p className="text-[13px]" style={{ color: P.muted }}>Inter — corpo · gradiente azul→laranja nas palavras-chave</p>
          </GlassCard>
          <GlassCard>
            <p className="text-sm font-semibold" style={{ color: P.orangeDeep }}>Botões e badges</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <BtnAurora>Primário</BtnAurora>
              <BtnAurora soft>Secundário</BtnAurora>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full px-3 py-1 text-[11px] font-semibold text-white" style={{ background: `linear-gradient(135deg, ${P.blue}, ${P.orange})` }}>
                EM PRODUÇÃO
              </span>
              <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[11px] font-semibold" style={{ color: P.muted }}>
                EM ATIVAÇÃO
              </span>
            </div>
            <p className="mt-6 text-sm font-semibold" style={{ color: P.orangeDeep }}>Assinaturas visuais</p>
            <p className="mt-2 text-[13px] leading-relaxed" style={{ color: P.muted }}>
              Auroras desfocadas azul/laranja · vidro fosco (glassmorphism claro) · cantos bem
              arredondados · gradiente de marca em texto e ícones · sombras suaves e difusas.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden py-24 text-center">
        <Auroras />
        <div className="relative mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.01em] md:text-[2.8rem]" style={display}>
            Pronto para <span style={gradText}>evoluir</span> a gestão da sua academia?
          </h2>
          <p className="mt-4 text-[14.5px]" style={{ color: P.muted }}>
            {LEMA}.
          </p>
          <div className="mt-9 flex justify-center">
            <BtnAurora>{CTA_PRIMARY}</BtnAurora>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/5 bg-white/60 py-8 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-[12px]" style={{ color: P.muted }}>
          <EvoFitWordmarkMono className="text-lg" color={P.ink} accent={P.orange} />
          <span>EvoFit © 2026 — Evotech System</span>
        </div>
      </footer>

      <DsSwitcher current="/ds/8" />
    </main>
  );
}
