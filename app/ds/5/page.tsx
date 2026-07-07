import type { Metadata } from 'next';
import { Archivo, Archivo_Black } from 'next/font/google';
import { ArrowRight, Zap } from 'lucide-react';
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
  STATS,
  SUB,
} from '@/content/site';

export const metadata: Metadata = { title: 'DS 5 · Kinetic' };

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-archivo-black',
});
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-archivo',
});

const P = {
  bg: '#0b0b0f',
  panel: '#121218',
  orange: '#f08020',
  orangeDeep: '#c85000',
  text: '#f4f4f6',
  muted: '#9b9ba6',
};

const black = { fontFamily: 'var(--font-archivo-black)' } as const;
const body = { fontFamily: 'var(--font-archivo)' } as const;

function Wordmark({ className = '', light = true }: { className?: string; light?: boolean }) {
  return (
    <span className={`italic uppercase tracking-tight ${className}`} style={black}>
      <span style={{ color: light ? '#fff' : '#0b0b0f' }}>Evo</span>
      <span style={{ color: light ? P.orange : '#fff' }}>Fit</span>
    </span>
  );
}

function BtnKinetic({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <button
      className="inline-flex -skew-x-6 cursor-pointer items-center gap-2.5 px-8 py-4 text-[14px] font-bold uppercase tracking-wide transition-transform duration-200 hover:scale-[1.03]"
      style={{
        background: dark ? '#0b0b0f' : P.orange,
        color: dark ? '#fff' : '#0b0b0f',
        boxShadow: dark ? 'none' : `6px 6px 0 #ffffff22`,
      }}
    >
      <span className="skew-x-6 inline-flex items-center gap-2.5" style={body}>
        {children}
        <ArrowRight size={16} strokeWidth={3} />
      </span>
    </button>
  );
}

function Marquee({ items, dark = false }: { items: string[]; dark?: boolean }) {
  const row = [...items, ...items];
  return (
    <div
      className="overflow-hidden py-3"
      style={{ background: dark ? '#0b0b0f' : P.orange }}
      aria-hidden
    >
      <div className="marquee flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-[15px] italic uppercase"
            style={{ ...black, color: dark ? P.orange : '#0b0b0f' }}
          >
            {t}
            <Zap size={14} fill={dark ? P.orange : '#0b0b0f'} strokeWidth={0} />
          </span>
        ))}
      </div>
    </div>
  );
}

const chatKinetic = {
  bg: '#101014',
  headerBg: P.orange,
  headerText: '#0b0b0f',
  inBg: '#1d1d24',
  inText: P.text,
  outBg: '#33210f',
  outText: '#ffd9ae',
  metaText: '#ffffff44',
};

export default function DsKinetic() {
  return (
    <main
      className={`${archivoBlack.variable} ${archivo.variable} min-h-screen`}
      style={{ background: P.bg, color: P.text, ...body }}
    >
      {/* NAV */}
      <header className="sticky top-0 z-30 border-b border-white/10 backdrop-blur-md" style={{ background: '#0b0b0fe6' }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Wordmark className="text-2xl" />
          <nav className="hidden items-center gap-7 text-[12.5px] font-semibold uppercase tracking-wider md:flex" style={{ color: P.muted }}>
            <span className="cursor-pointer transition-colors hover:text-white">Funcionalidades</span>
            <span className="cursor-pointer transition-colors hover:text-white">IA de Vendas</span>
            <span className="cursor-pointer transition-colors hover:text-white">Murph</span>
          </nav>
          <button
            className="-skew-x-6 cursor-pointer px-5 py-2.5 text-[12px] font-bold uppercase tracking-wide transition-transform hover:scale-105"
            style={{ background: P.orange, color: '#0b0b0f' }}
          >
            <span className="inline-block skew-x-6">{CTA_PRIMARY}</span>
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* slab diagonal laranja */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-0 hidden h-full w-[46%] md:block"
          style={{
            background: `linear-gradient(160deg, ${P.orange}, ${P.orangeDeep})`,
            clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)',
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.25fr_1fr] md:pb-28 md:pt-24">
          <div>
            <p className="fade-up text-[12px] font-bold uppercase tracking-[0.3em]" style={{ color: P.orange }}>
              Evotech System
            </p>
            <h1 className="fade-up mt-5 text-[2.6rem] italic leading-[0.98] md:text-[4.6rem]" style={{ ...black, animationDelay: '0.08s' }}>
              <span className="block uppercase text-white">A evolução</span>
              <span
                className="block uppercase"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: `2px ${P.orange}`,
                }}
              >
                em gestão
              </span>
              <span className="block uppercase">
                <mark
                  className="px-2"
                  style={{ background: P.orange, color: '#0b0b0f' }}
                >
                  de academias
                </mark>
              </span>
            </h1>
            <p className="fade-up mt-7 max-w-md text-[15.5px] font-medium leading-relaxed" style={{ color: P.muted, animationDelay: '0.2s' }}>
              {SUB}
            </p>
            <div className="fade-up mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: '0.3s' }}>
              <BtnKinetic>{CTA_PRIMARY}</BtnKinetic>
              <span className="text-[12.5px] font-semibold uppercase tracking-wider" style={{ color: P.muted }}>
                ↓ veja a IA vendendo
              </span>
            </div>
            <p className="fade-up mt-8 text-[12.5px] font-medium" style={{ color: P.muted, animationDelay: '0.4s' }}>
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400 align-middle" />
              {PROVA}
            </p>
          </div>

          {/* telefone sobre o slab */}
          <div className="fade-up relative mx-auto" style={{ animationDelay: '0.25s' }}>
            <div className="h-[500px] w-[275px] -rotate-2 overflow-hidden rounded-[2rem] border-4 border-black bg-black shadow-[16px_16px_0_#00000066]">
              <ChatMock messages={CHAT_VENDAS} theme={chatKinetic} title="Sofia · IA da academia" />
            </div>
            <div
              className="absolute -left-10 bottom-10 -skew-x-6 px-4 py-2 text-[13px] font-bold uppercase"
              style={{ background: '#fff', color: '#0b0b0f' }}
            >
              <span className="inline-block skew-x-6">Lead → Aluno ✓</span>
            </div>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          'Venda no automático',
          'Retenha mais alunos',
          'Treine sem planilha',
          'IA 24/7 no WhatsApp',
        ]}
      />

      {/* STATS gigantes */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={s.label} className="fade-up" style={{ animationDelay: `${i * 0.07}s` }}>
              <p
                className="text-[2.6rem] italic leading-none md:text-[3.4rem]"
                style={{
                  ...black,
                  color: i % 2 === 0 ? P.orange : 'transparent',
                  WebkitTextStroke: i % 2 === 0 ? undefined : '1.5px #ffffff88',
                }}
              >
                {s.value}
              </p>
              <p className="mt-2 text-[12px] font-semibold uppercase tracking-wider" style={{ color: P.muted }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MURPH — bloco laranja */}
      <section className="relative overflow-hidden" style={{ background: P.orange }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.3em]" style={{ color: '#0b0b0f99' }}>
              Murph · copiloto do dono
            </p>
            <h2 className="mt-4 text-4xl italic uppercase leading-[1.02] md:text-5xl" style={{ ...black, color: '#0b0b0f' }}>
              O secretário de IA que trabalha pro dono
            </h2>
            <p className="mt-5 max-w-md text-[15px] font-medium leading-relaxed" style={{ color: '#3a2410' }}>
              &ldquo;Cobra os inadimplentes acima de 7 dias&rdquo; — e o Murph cobra. Mais de 40
              ações reais no sistema, com aprovação S/N no WhatsApp pra tudo que é sensível.
            </p>
            <div className="mt-8">
              <BtnKinetic dark>Conhecer o Murph</BtnKinetic>
            </div>
          </div>
          <div className="mx-auto h-[430px] w-[280px] rotate-2 overflow-hidden rounded-[1.8rem] border-4 border-black bg-black shadow-[14px_14px_0_#00000033]">
            <ChatMock
              messages={CHAT_MURPH}
              theme={{ ...chatKinetic, headerBg: '#0b0b0f', headerText: '#fff' }}
              title="Murph · Secretário IA"
              subtitle="modo dono"
              step={0.7}
            />
          </div>
        </div>
      </section>

      <Marquee
        dark
        items={['Zero lead perdido', 'Cobrança que negocia', 'Anti-churn preditivo', 'Catraca facial']}
      />

      {/* MÓDULOS numerados */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <h2 className="max-w-3xl text-4xl italic uppercase leading-[1.02] md:text-5xl" style={black}>
          Tudo que uma academia precisa.{' '}
          <span style={{ color: P.orange }}>Num sistema só.</span>
        </h2>
        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {MODULES.map((m, i) => (
            <div
              key={m.title}
              className="group flex items-start gap-5 border-l-4 p-5 transition-all duration-200 hover:translate-x-1"
              style={{ background: P.panel, borderColor: P.orange }}
            >
              <span className="text-2xl italic" style={{ ...black, color: '#ffffff2e' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="flex items-center gap-2.5 text-[16px] font-bold uppercase tracking-wide">
                  <m.icon size={17} strokeWidth={2.2} color={P.orange} />
                  {m.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed" style={{ color: P.muted }}>
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="border-t border-white/10 py-20" style={{ background: P.panel }}>
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl italic uppercase md:text-5xl" style={black}>
            Só o <span style={{ color: P.orange }}>EvoFit</span> faz
          </h2>
          <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
            {DIFERENCIAIS.map((d, i) => (
              <li
                key={d}
                className="flex items-baseline gap-4 border-b border-white/8 py-4 text-[14.5px] font-medium"
              >
                <span className="text-lg italic" style={{ ...black, color: P.orange }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SPECIMEN */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl italic uppercase" style={black}>
          Design System · <span style={{ color: P.orange }}>05 Kinetic</span>
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="border border-white/10 p-6" style={{ background: P.panel }}>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em]" style={{ color: P.orange }}>Paleta</p>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {[
                ['#0b0b0f', 'bg'],
                ['#121218', 'panel'],
                ['#f08020', 'orange'],
                ['#c85000', 'deep'],
                ['#f4f4f6', 'text'],
              ].map(([hex, name]) => (
                <div key={hex} className="text-center">
                  <div className="h-14 w-full border border-white/10" style={{ background: hex }} />
                  <p className="mt-1.5 text-[10px] font-semibold uppercase" style={{ color: P.muted }}>
                    {name}
                    <br />
                    {hex}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.2em]" style={{ color: P.orange }}>Tipografia</p>
            <p className="mt-2 text-2xl italic uppercase" style={black}>Archivo Black itálica</p>
            <p className="text-[13px]" style={{ color: P.muted }}>Archivo — corpo · uppercase + outline + marca-texto</p>
          </div>
          <div className="border border-white/10 p-6" style={{ background: P.panel }}>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em]" style={{ color: P.orange }}>Botões e badges</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <BtnKinetic>Primário</BtnKinetic>
              <BtnKinetic dark>Secundário</BtnKinetic>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="-skew-x-6 px-3 py-1 text-[11px] font-bold uppercase" style={{ background: P.orange, color: '#0b0b0f' }}>
                <span className="inline-block skew-x-6">Em produção</span>
              </span>
              <span className="-skew-x-6 border border-white/25 px-3 py-1 text-[11px] font-bold uppercase text-white">
                <span className="inline-block skew-x-6">Em ativação</span>
              </span>
            </div>
            <p className="mt-6 text-[12px] font-bold uppercase tracking-[0.2em]" style={{ color: P.orange }}>Assinaturas visuais</p>
            <p className="mt-2 text-[13px] leading-relaxed" style={{ color: P.muted }}>
              Diagonais e skew em botões/slabs · marquees · texto outline · marca-texto laranja ·
              sombras duras deslocadas · telefones rotacionados com borda preta.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden py-24 text-center" style={{ background: P.orange }}>
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[11rem] italic uppercase opacity-10 md:text-[16rem]"
          style={{ ...black, color: '#0b0b0f' }}
        >
          EvoFit
        </span>
        <div className="relative mx-auto max-w-3xl px-6">
          <h2 className="text-4xl italic uppercase leading-[1.02] md:text-[3.4rem]" style={{ ...black, color: '#0b0b0f' }}>
            Pronto pra evoluir sua academia?
          </h2>
          <p className="mt-4 text-[14px] font-semibold uppercase tracking-wide" style={{ color: '#3a2410' }}>
            {LEMA}
          </p>
          <div className="mt-9 flex justify-center">
            <BtnKinetic dark>{CTA_PRIMARY}</BtnKinetic>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-[12px] font-medium uppercase tracking-wider" style={{ color: P.muted }}>
          <Wordmark className="text-lg" />
          <span>EvoFit © 2026 — Evotech System</span>
        </div>
      </footer>

      <DsSwitcher current="/ds/5" />
    </main>
  );
}
