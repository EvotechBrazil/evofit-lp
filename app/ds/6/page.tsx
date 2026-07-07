import type { Metadata } from 'next';
import { Archivo_Black, Instrument_Sans } from 'next/font/google';
import { ArrowRight, Check, Zap } from 'lucide-react';
import { EvoFitWordmarkMono } from '@/components/brand';
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

export const metadata: Metadata = { title: 'DS 6 · Fusão' };

const instrument = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument',
});
const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-archivo-black',
});

const P = {
  paper: '#f6f8fb',
  ink: '#17191c',
  navy: '#0a1526',
  navy3: '#0d1e38',
  /* "nosso azul" (Tiago 07/07): o navy ESCURO da marca — mesmo tom do fundo do login
     (imagem de referência amostrada em #0b1424 ≈ navy2 #0a1526) */
  blue: '#0a1526',
  orange: '#f08020',
  orangeDeep: '#c85000',
  powder: '#dbe6f2',
  muted: '#5b6572',
};

const body = { fontFamily: 'var(--font-instrument)' } as const;
const black = { fontFamily: 'var(--font-archivo-black)' } as const;

/* Botão assinatura da Fusão: retângulo AZUL EvoFit + sombra dura laranja (kinetic) */
function BtnFusion({
  children,
  invert = false,
  shadow,
}: {
  children: React.ReactNode;
  invert?: boolean;
  shadow?: string;
}) {
  return (
    <button
      className="inline-flex cursor-pointer items-center gap-2.5 px-7 py-3.5 text-[14px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
      style={{
        background: invert ? '#ffffff' : P.blue,
        color: invert ? P.blue : '#ffffff',
        boxShadow: `5px 5px 0 ${shadow ?? P.orange}`,
        ...body,
      }}
    >
      {children}
      <ArrowRight size={16} strokeWidth={2.4} />
    </button>
  );
}

function Marquee() {
  const items = ['Venda no automático', 'Retenha mais alunos', 'Zero lead perdido', 'IA 24/7 no WhatsApp'];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden py-3" style={{ background: P.orange }} aria-hidden>
      <div className="marquee flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-[14px] italic uppercase"
            style={{ ...black, color: P.ink }}
          >
            {t}
            <Zap size={13} fill={P.ink} strokeWidth={0} />
          </span>
        ))}
      </div>
    </div>
  );
}

function FloatCard({ title, sub, className = '' }: { title: string; sub: string; className?: string }) {
  return (
    <div className={`float-y w-[190px] bg-white p-3.5 shadow-lg ${className}`} style={{ borderLeft: `4px solid ${P.orange}` }}>
      <p className="text-[12px] font-semibold" style={{ color: P.ink }}>{title}</p>
      <p className="mt-0.5 text-[11px]" style={{ color: P.muted }}>{sub}</p>
    </div>
  );
}

const chatLight = {
  bg: '#eef2f7',
  headerBg: '#ffffff',
  headerText: P.ink,
  inBg: '#ffffff',
  inText: P.ink,
  outBg: '#ffe3c7',
  outText: '#3a2410',
  metaText: '#17191c55',
};

const chatDark = {
  bg: '#060e1c',
  headerBg: P.navy3,
  headerText: '#eaf1fb',
  inBg: '#152238',
  inText: '#eaf1fb',
  outBg: '#0d3b2e',
  outText: '#dcfce7',
  metaText: '#ffffff55',
};

export default function DsFusao() {
  return (
    <main
      className={`${instrument.variable} ${archivoBlack.variable} min-h-screen`}
      style={{ background: P.paper, color: P.ink, ...body }}
    >
      {/* NAV */}
      <header className="sticky top-0 z-30 border-b border-black/6 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <EvoFitWordmarkMono className="text-xl" color={P.blue} accent={P.orange} />
          <nav className="hidden items-center gap-8 text-[13.5px] font-medium md:flex" style={{ color: P.muted }}>
            <span className="cursor-pointer transition-colors hover:text-black">Funcionalidades</span>
            <span className="cursor-pointer transition-colors hover:text-black">IA de Vendas</span>
            <span className="cursor-pointer transition-colors hover:text-black">Murph</span>
            <span className="cursor-pointer transition-colors hover:text-black">Integrações</span>
          </nav>
          <button
            className="cursor-pointer px-5 py-2.5 text-[13px] font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ background: P.blue, boxShadow: `4px 4px 0 ${P.orange}` }}
          >
            {CTA_PRIMARY}
          </button>
        </div>
      </header>

      {/* HERO — canvas claro editorial + tipografia kinetic */}
      <section className="mx-auto mt-6 max-w-[1240px] px-4">
        <div
          className="relative overflow-hidden rounded-[2rem] px-6 pb-16 pt-12 md:px-14 md:pb-20 md:pt-16"
          style={{ background: `linear-gradient(165deg, #ffffff 0%, ${P.powder} 70%, #cfdded 100%)` }}
        >
          {/* watermark itálico */}
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[8.5rem] italic uppercase md:text-[15rem]"
            style={{ ...black, color: P.ink, opacity: 0.05 }}
          >
            EvoFit
          </span>

          <div className="fade-up relative flex justify-center md:justify-start">
            <span
              className="inline-flex -skew-x-6 items-center px-4 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.16em] text-white"
              style={{ background: P.blue }}
            >
              <span className="inline-block skew-x-6">Sistema de gestão com IA ⚡ Evotech System</span>
            </span>
          </div>

          <div className="relative mt-10 grid items-center gap-12 md:mt-8 md:grid-cols-[1.2fr_auto] md:gap-8">
            <div className="text-center md:text-left">
              <h1 className="text-[2.7rem] italic leading-[0.98] md:text-[4.3rem]" style={black}>
                <span className="block uppercase" style={{ color: P.blue }}>
                  A evolução
                </span>
                <span
                  className="block uppercase"
                  style={{ color: 'transparent', WebkitTextStroke: `2px ${P.blue}` }}
                >
                  em gestão
                </span>
                <span className="block uppercase">
                  <mark className="px-2" style={{ background: P.orange, color: '#ffffff' }}>
                    de academias
                  </mark>
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-md text-[15.5px] leading-relaxed md:mx-0" style={{ color: '#3c4756' }}>
                {SUB}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-5 md:justify-start">
                <BtnFusion>{CTA_PRIMARY}</BtnFusion>
                <span className="text-[13px] font-semibold uppercase tracking-wider" style={{ color: P.muted }}>
                  ↓ veja a IA vendendo
                </span>
              </div>
              <p className="mt-7 flex items-center justify-center gap-2 text-[12.5px] md:justify-start" style={{ color: '#3c4756' }}>
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {PROVA}
              </p>
            </div>

            {/* telefone + float cards */}
            <div className="relative mx-auto">
              <div className="h-[480px] w-[265px] -rotate-2 overflow-hidden rounded-[2rem] bg-white p-2 shadow-2xl">
                <div className="h-full w-full overflow-hidden rounded-[1.55rem]">
                  <ChatMock messages={CHAT_VENDAS} theme={chatLight} title="Sofia · IA da sua academia" />
                </div>
              </div>
              <FloatCard
                title="Aula experimental ✅"
                sub="Ana · quinta 19h"
                className="absolute -left-32 top-14 max-lg:hidden"
              />
              <FloatCard
                title="Pix recebido 💸"
                sub="R$ 297 · mensalidade"
                className="absolute -right-28 bottom-20 max-lg:hidden [animation-delay:1.3s]"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mt-6">
        <Marquee />
      </div>

      {/* STATS — numerais editoriais + itálico laranja */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {[
            ['2.000+', 'alunos geridos em produção'],
            ['24/7', 'IA vendendo no WhatsApp'],
            ['40+', 'ações do secretário Murph'],
            ['100%', 'com a marca da sua academia'],
          ].map(([v, l], i) => (
            <div key={l} className={`px-6 text-center md:text-left ${i > 0 ? 'md:border-l md:border-[#d3dbe6]' : ''}`}>
              <p
                className="text-[2.6rem] italic leading-none md:text-[3.2rem]"
                style={{ ...black, color: i % 2 === 0 ? P.blue : P.orange }}
              >
                {v}
              </p>
              <p className="mt-2 text-[12.5px] leading-snug" style={{ color: P.muted }}>
                {l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO NAVY — dupla de IAs */}
      <section className="mx-auto max-w-[1240px] px-4">
        <div
          className="overflow-hidden rounded-[2rem] px-6 py-16 md:px-14 md:py-20"
          style={{ background: P.navy, color: '#eaf1fb' }}
        >
          <div className="mx-auto max-w-2xl text-center">
            <span
              className="inline-block -skew-x-6 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ background: P.orange, color: P.ink }}
            >
              <span className="inline-block skew-x-6">Dupla de IA</span>
            </span>
            <h2 className="mt-5 text-3xl italic uppercase leading-[1.04] md:text-[2.6rem]" style={black}>
              Uma vende pro lead.
              <br />
              <span style={{ color: P.orange }}>A outra trabalha pro dono.</span>
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed" style={{ color: '#8aa0be' }}>
              A IA de vendas qualifica e agenda no WhatsApp do lead; o Murph executa mais de 40
              ações reais por mensagem do dono — com aprovação S/N no que é sensível.
            </p>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {[
              { chat: CHAT_VENDAS, title: 'Sofia · IA da sua academia', sub: 'online', label: 'IA de vendas · funil EVOLEAD', step: 0.55, rot: '-rotate-1' },
              { chat: CHAT_MURPH, title: 'Murph · Secretário IA', sub: 'modo dono', label: 'Murph · copiloto do dono', step: 0.75, rot: 'rotate-1' },
            ].map((c) => (
              <div key={c.title} className="flex flex-col items-center gap-4">
                <span className="text-[11.5px] font-bold uppercase tracking-[0.18em]" style={{ color: P.orange }}>
                  {c.label}
                </span>
                <div className={`h-[430px] w-[275px] ${c.rot} overflow-hidden rounded-[1.8rem] border border-white/12 bg-black/30 p-2`}>
                  <div className="h-full w-full overflow-hidden rounded-[1.35rem]">
                    <ChatMock messages={c.chat} theme={chatDark} title={c.title} subtitle={c.sub} step={c.step} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÓDULOS — cards brancos numerados */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <h2 className="mx-auto max-w-3xl text-center text-3xl italic uppercase leading-[1.04] md:text-[2.8rem]" style={black}>
          Tudo que uma academia precisa.{' '}
          <span style={{ color: P.orange }}>Num sistema só.</span>
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m, i) => (
            <div
              key={m.title}
              className="fade-up group relative overflow-hidden bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${i * 0.05}s`, borderTop: `4px solid ${P.orange}` }}
            >
              <span className="absolute right-4 top-3 text-3xl italic" style={{ ...black, color: '#0a152618' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full" style={{ background: `${P.orange}1a`, color: P.orangeDeep }}>
                <m.icon size={20} strokeWidth={1.9} />
              </span>
              <h3 className="mt-4 text-[15.5px] font-semibold leading-snug">{m.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed" style={{ color: P.muted }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS — faixa navy (família do nosso azul) */}
      <section className="mx-auto max-w-[1240px] px-4 pb-20">
        <div className="rounded-[2rem] px-6 py-14 md:px-14" style={{ background: P.navy, color: '#f2f4f7' }}>
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center">
            <h2 className="text-3xl italic uppercase leading-[1.05] md:text-[2.5rem]" style={black}>
              O que só o<br />
              <span style={{ color: P.orange }}>EvoFit</span> faz
            </h2>
            <ul className="space-y-3.5">
              {DIFERENCIAIS.map((d, i) => (
                <li key={d} className="flex items-start gap-4 text-[14px] leading-relaxed">
                  <span className="text-[15px] italic" style={{ ...black, color: P.orange, minWidth: '2.2ch' }}>
                    {String(i + 1).padStart(2, '0')}
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
        <h2 className="text-center text-2xl italic uppercase" style={black}>
          Design System · <span style={{ color: P.orange }}>06 Fusão</span>
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-[13px]" style={{ color: P.muted }}>
          A mistura oficial: estrutura editorial clara (02) + ritmo claro↔navy e laranja (03) +
          tipografia e energia kinetic (05) — com o azul navy EvoFit (o tom escuro do login) no
          lugar do preto como cor de marca.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 shadow-sm" style={{ borderTop: `4px solid ${P.orange}` }}>
            <p className="text-sm font-semibold" style={{ color: P.orangeDeep }}>Paleta</p>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {[
                ['#f6f8fb', 'paper'],
                ['#dbe6f2', 'powder'],
                ['#0a1526', 'azul navy'],
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
            <p className="mt-2 text-2xl italic uppercase" style={{ ...black, color: P.blue }}>
              Archivo Black — display
            </p>
            <p className="text-[13px]" style={{ color: P.muted }}>
              Instrument Sans — corpo · display em azul EvoFit · outline + marca-texto nas
              palavras-chave
            </p>
          </div>
          <div className="bg-white p-6 shadow-sm" style={{ borderTop: `4px solid ${P.orange}` }}>
            <p className="text-sm font-semibold" style={{ color: P.orangeDeep }}>Botões e badges</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <BtnFusion>Primário</BtnFusion>
              <button
                className="cursor-pointer border-2 px-6 py-3 text-[14px] font-semibold"
                style={{ borderColor: P.blue, color: P.blue }}
              >
                Secundário
              </button>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="-skew-x-6 px-3 py-1 text-[11px] font-bold uppercase text-white" style={{ background: P.blue }}>
                <span className="inline-block skew-x-6">Em produção</span>
              </span>
              <span className="-skew-x-6 px-3 py-1 text-[11px] font-bold uppercase" style={{ background: P.orange, color: '#fff' }}>
                <span className="inline-block skew-x-6">Em ativação</span>
              </span>
            </div>
            <p className="mt-6 text-sm font-semibold" style={{ color: P.orangeDeep }}>Assinaturas visuais</p>
            <p className="mt-2 text-[13px] leading-relaxed" style={{ color: P.muted }}>
              Canvas arredondados claros e navy alternados · sombra dura laranja nos botões azul
              navy · display em azul navy (sólido + outline) · marquee laranja · watermark itálico
              · float cards com filete laranja · numerais itálicos gigantes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-[1240px] px-4 pb-6">
        <div
          className="relative overflow-hidden rounded-[2rem] px-8 py-16 text-center"
          style={{ background: P.orange }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[10rem] italic uppercase opacity-10 md:text-[15rem]"
            style={{ ...black, color: P.ink }}
          >
            EvoFit
          </span>
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl italic uppercase leading-[1.03] text-white md:text-[2.8rem]" style={black}>
              Pronto pra evoluir sua academia?
            </h2>
            <p className="mt-4 text-[13.5px] font-semibold uppercase tracking-wide" style={{ color: '#5c2f08' }}>
              {LEMA}
            </p>
            <div className="mt-8 flex justify-center">
              <BtnFusion shadow="#ffffff">{CTA_PRIMARY}</BtnFusion>
            </div>
          </div>
        </div>
        <footer className="flex items-center justify-between px-4 py-8 text-[12px]" style={{ color: P.muted }}>
          <EvoFitWordmarkMono className="text-lg" color={P.blue} accent={P.orange} />
          <span>EvoFit © 2026 — Evotech System</span>
        </footer>
      </section>

      <DsSwitcher current="/ds/6" />
    </main>
  );
}
