import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';
import { ArrowRight, Check } from 'lucide-react';
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

export const metadata: Metadata = { title: 'DS 2 · Editorial Claro' };

const instrument = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument',
});

const P = {
  paper: '#f6f8fb',
  ink: '#202224',
  steel: '#567bae',
  steelSoft: '#6c92c5',
  powder: '#b4c8de',
  mist: '#9caec4',
  white: '#ffffff',
};

const display = { fontFamily: 'var(--font-instrument)' };

/* ── componentes locais ── */

function BtnBlack({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="inline-flex cursor-pointer items-center gap-2.5 rounded-lg px-7 py-3.5 text-[14.5px] font-medium text-white transition-all duration-200 hover:opacity-85"
      style={{ background: P.ink }}
    >
      {children}
      <ArrowRight size={16} strokeWidth={2.2} />
    </button>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[12.5px] font-medium shadow-sm"
      style={{ color: P.ink }}
    >
      <span className="h-2 w-2 rounded-full" style={{ background: P.steel }} />
      {children}
    </span>
  );
}

function FloatCard({
  title,
  sub,
  className = '',
}: {
  title: string;
  sub: string;
  className?: string;
}) {
  return (
    <div
      className={`float-y w-[190px] rounded-xl bg-white/95 p-3.5 shadow-lg backdrop-blur-sm ${className}`}
    >
      <p className="text-[12px] font-semibold" style={{ color: P.ink }}>
        {title}
      </p>
      <p className="mt-0.5 text-[11px]" style={{ color: '#6b7684' }}>
        {sub}
      </p>
    </div>
  );
}

const chatLight = {
  bg: '#eef2f7',
  headerBg: P.white,
  headerText: P.ink,
  inBg: P.white,
  inText: P.ink,
  outBg: '#cfe0f4',
  outText: P.ink,
  metaText: '#20222455',
};

/* ── página ── */

export default function DsEditorial() {
  return (
    <main
      className={`${instrument.variable} min-h-screen pb-10`}
      style={{ background: '#e8ecf2', color: P.ink, ...display }}
    >
      {/* NAV flutuante */}
      <header className="sticky top-4 z-30 px-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-white/90 px-6 py-3 shadow-sm backdrop-blur-md">
          <EvoFitWordmarkMono className="text-xl" color={P.ink} accent={P.steel} />
          <nav className="hidden items-center gap-8 text-[13.5px] font-medium md:flex" style={{ color: '#5a6472' }}>
            <span className="cursor-pointer transition-colors hover:text-black">Funcionalidades</span>
            <span className="cursor-pointer transition-colors hover:text-black">IA de Vendas</span>
            <span className="cursor-pointer transition-colors hover:text-black">Murph</span>
            <span className="cursor-pointer transition-colors hover:text-black">Integrações</span>
          </nav>
          <button
            className="cursor-pointer rounded-full px-5 py-2.5 text-[13px] font-medium text-white transition-opacity hover:opacity-85"
            style={{ background: P.ink }}
          >
            {CTA_PRIMARY}
          </button>
        </div>
      </header>

      {/* HERO — canvas powder arredondado */}
      <section className="mx-auto mt-6 max-w-[1240px] px-4">
        <div
          className="relative overflow-hidden rounded-[2rem] px-6 pb-16 pt-14 md:px-14 md:pb-24 md:pt-20"
          style={{
            background: `linear-gradient(165deg, #cdddef 0%, ${P.powder} 55%, ${P.mist} 100%)`,
          }}
        >
          {/* watermark */}
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[9rem] font-bold italic tracking-tight md:text-[17rem]"
            style={{ color: '#ffffff', opacity: 0.22 }}
          >
            EvoFit
          </span>

          <div className="fade-up relative flex justify-center md:justify-start">
            <Pill>Sistema de gestão com IA para academias</Pill>
          </div>

          {/* headline em camadas ao redor do telefone */}
          <div className="relative mt-8 md:mt-4">
            <div className="relative z-0 grid gap-10 md:grid-cols-[1fr_auto_1fr] md:items-center">
              {/* coluna esquerda */}
              <div className="fade-up text-center md:text-left" style={{ animationDelay: '0.12s' }}>
                <h1 className="text-[3rem] font-semibold leading-[1.02] tracking-[-0.02em] md:text-[4.4rem]">
                  <span className="block text-white">A evolução</span>
                  <span className="block" style={{ color: P.ink }}>
                    em gestão
                  </span>
                </h1>
                <p className="mt-6 max-w-[300px] text-[13.5px] leading-relaxed max-md:mx-auto" style={{ color: '#3c4756' }}>
                  {SUB}
                </p>
                <div className="mt-7 max-md:flex max-md:justify-center">
                  <BtnBlack>{CTA_PRIMARY}</BtnBlack>
                </div>
              </div>

              {/* telefone central */}
              <div className="fade-up relative z-10 mx-auto" style={{ animationDelay: '0.25s' }}>
                <div className="h-[500px] w-[270px] overflow-hidden rounded-[2rem] bg-white p-2 shadow-2xl">
                  <div className="h-full w-full overflow-hidden rounded-[1.55rem]">
                    <ChatMock
                      messages={CHAT_VENDAS}
                      theme={chatLight}
                      title="Sofia · IA da sua academia"
                    />
                  </div>
                </div>
                <FloatCard
                  title="Aula experimental agendada ✅"
                  sub="quinta · 19h · CrossFit"
                  className="absolute -left-36 top-16 max-lg:hidden"
                />
                <FloatCard
                  title="Pix recebido · R$ 297"
                  sub="mensalidade · plano 3x"
                  className="absolute -right-36 bottom-24 max-lg:hidden [animation-delay:1.2s]"
                />
              </div>

              {/* coluna direita */}
              <div
                className="fade-up text-center md:text-right"
                style={{ animationDelay: '0.35s' }}
              >
                <h2 className="text-[3rem] font-semibold leading-[1.02] tracking-[-0.02em] md:text-[4.4rem]">
                  <span className="block" style={{ color: P.steel }}>
                    &amp; de vendas
                  </span>
                  <span className="block text-white">por IA</span>
                </h2>
                <div className="mt-8 space-y-5 md:flex md:flex-col md:items-end">
                  <div>
                    <p className="text-4xl font-semibold" style={{ color: P.ink }}>
                      24/7
                    </p>
                    <p className="text-[11.5px]" style={{ color: '#3c4756' }}>
                      atendimento por IA
                      <br />
                      no WhatsApp
                    </p>
                  </div>
                  <div>
                    <p className="text-4xl font-semibold" style={{ color: P.ink }}>
                      40+
                    </p>
                    <p className="text-[11.5px]" style={{ color: '#3c4756' }}>
                      ações executadas
                      <br />
                      pelo Murph
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="relative mt-12 text-center text-[12.5px]" style={{ color: '#3c4756' }}>
            {PROVA}
          </p>
        </div>
      </section>

      {/* STRIP DE STATS — numerais gigantes finos */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {[
            ['2.000+', 'alunos geridos em produção'],
            ['24/7', 'IA vendendo no WhatsApp'],
            ['40+', 'ações do secretário Murph'],
            ['100%', 'com a marca da sua academia'],
          ].map(([v, l], i) => (
            <div
              key={l}
              className={`px-6 text-center md:text-left ${i > 0 ? 'md:border-l md:border-[#d3dbe6]' : ''}`}
            >
              <p className="text-5xl font-light tracking-tight" style={{ color: P.ink }}>
                {v}
              </p>
              <p className="mt-2 text-[12.5px] leading-snug" style={{ color: P.steelSoft }}>
                {l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO DARK — destaque de módulos */}
      <section className="mx-auto max-w-[1240px] px-4">
        <div className="rounded-[2rem] px-6 py-14 md:px-14 md:py-20" style={{ background: '#1b1d1f' }}>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-md text-3xl font-semibold leading-tight text-white md:text-4xl">
              Feito para o dia a dia real da academia
            </h2>
            <p className="max-w-sm text-[13.5px] leading-relaxed" style={{ color: '#9aa3ad' }}>
              Cada módulo nasceu de um problema real de operação — do lead que chega de madrugada à
              notinha do mercado que precisava virar lançamento no caixa.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {MODULES.slice(0, 3).map((m, i) => (
              <div
                key={m.title}
                className="fade-up overflow-hidden rounded-2xl"
                style={{ background: '#242628', animationDelay: `${i * 0.08}s` }}
              >
                <div
                  className="flex h-40 items-center justify-center"
                  style={{
                    background: `linear-gradient(150deg, ${P.powder}, ${P.steelSoft})`,
                  }}
                >
                  <m.icon size={52} strokeWidth={1.3} color="#ffffff" />
                </div>
                <div className="p-5">
                  <h3 className="border-b border-white/10 pb-3 text-[15.5px] font-semibold text-white">
                    {m.title}
                  </h3>
                  <p className="pt-3 text-[13px] leading-relaxed" style={{ color: '#9aa3ad' }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRID DE MÓDULOS CLARO */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mx-auto max-w-xl text-center text-3xl font-semibold leading-tight md:text-4xl">
          Tudo que uma academia precisa.{' '}
          <span style={{ color: P.steel }}>Num sistema só.</span>
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.slice(3).map((m, i) => (
            <div
              key={m.title}
              className="fade-up rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full"
                style={{ background: '#e7eef7', color: P.steel }}
              >
                <m.icon size={20} strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-[15.5px] font-semibold leading-snug">{m.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed" style={{ color: '#5a6472' }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MURPH — card powder com % gigante (padrão Dentiva) */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid items-stretch gap-6 md:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="max-w-md text-3xl font-semibold leading-tight md:text-[2.4rem]">
              Murph: o secretário de IA que trabalha para o dono.
            </h2>
            <p className="mt-4 max-w-md text-[14px] leading-relaxed" style={{ color: '#5a6472' }}>
              Mais de 40 ações reais no sistema por mensagem de WhatsApp — cobranças, relatórios,
              risco de cancelamento — com aprovação S/N pra tudo que é sensível.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Permissão por papel: dono, gerente, recepção, coach',
                'Aprovação S/N antes de qualquer ação sensível',
                'Responde com dados reais, na hora',
              ].map((li) => (
                <li key={li} className="flex items-center gap-3 text-[13.5px]">
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-full text-white"
                    style={{ background: P.steel }}
                  >
                    <Check size={11} strokeWidth={3} />
                  </span>
                  {li}
                </li>
              ))}
            </ul>
            <div
              className="mt-8 flex items-center justify-between rounded-2xl p-6"
              style={{ background: `linear-gradient(140deg, #cdddef, ${P.powder})` }}
            >
              <div>
                <p className="text-5xl font-semibold" style={{ color: P.ink }}>
                  1 = 3
                </p>
                <p className="mt-1 max-w-[260px] text-[12px]" style={{ color: '#3c4756' }}>
                  uma secretária com o Murph rende como três sem ele — o operacional repetitivo vira
                  uma mensagem
                </p>
              </div>
              <span className="text-4xl" aria-hidden>
                ⚡
              </span>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-sm">
            <div className="h-full min-h-[400px] w-full overflow-hidden rounded-xl">
              <ChatMock
                messages={CHAT_MURPH}
                theme={chatLight}
                title="Murph · Secretário IA"
                subtitle="modo dono"
                step={0.7}
              />
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">O que só o EvoFit faz</h2>
        <ol className="mt-10 divide-y divide-[#e2e8f0] rounded-2xl bg-white px-6 shadow-sm">
          {DIFERENCIAIS.map((d, i) => (
            <li key={d} className="flex items-center gap-5 py-4">
              <span className="text-xl font-light" style={{ color: P.steelSoft }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[14px]">{d}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* SPECIMEN */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-center text-2xl font-semibold">Design System · 02 Editorial Claro</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold" style={{ color: P.steel }}>Paleta</p>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {[
                ['#f6f8fb', 'paper'],
                ['#b4c8de', 'powder'],
                ['#567bae', 'steel'],
                ['#6c92c5', 'steel-soft'],
                ['#202224', 'ink'],
              ].map(([hex, name]) => (
                <div key={hex} className="text-center">
                  <div className="h-14 w-full rounded-lg border border-black/5" style={{ background: hex }} />
                  <p className="mt-1.5 text-[10px] font-medium" style={{ color: '#5a6472' }}>
                    {name}
                    <br />
                    {hex}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm font-semibold" style={{ color: P.steel }}>Tipografia</p>
            <p className="mt-2 text-2xl font-semibold">Instrument Sans — display e corpo</p>
            <p className="text-[13px]" style={{ color: '#5a6472' }}>
              Pesos 400–700 · títulos gigantes com tracking negativo · numerais light
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold" style={{ color: P.steel }}>Botões e badges</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <BtnBlack>Primário</BtnBlack>
              <button
                className="cursor-pointer rounded-lg border px-6 py-3 text-[14px] font-medium"
                style={{ borderColor: P.steel, color: P.steel }}
              >
                Secundário
              </button>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Pill>Sistema de gestão com IA</Pill>
            </div>
            <p className="mt-6 text-sm font-semibold" style={{ color: P.steel }}>Assinaturas visuais</p>
            <p className="mt-2 text-[13px] leading-relaxed" style={{ color: '#5a6472' }}>
              Canvas arredondado no hero · headline em camadas ao redor do produto · watermark
              gigante · mini-cards flutuantes · numerais finos enormes · seção dark de contraste.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-[1240px] px-4 pb-6">
        <div
          className="rounded-[2rem] px-8 py-16 text-center"
          style={{ background: `linear-gradient(150deg, #cdddef, ${P.powder})` }}
        >
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight md:text-[2.6rem]">
            Pronto para evoluir a gestão da sua academia?
          </h2>
          <p className="mt-3 text-[14px]" style={{ color: '#3c4756' }}>
            {LEMA}.
          </p>
          <div className="mt-8 flex justify-center">
            <BtnBlack>{CTA_PRIMARY}</BtnBlack>
          </div>
        </div>
        <footer className="flex items-center justify-between px-4 py-8 text-[12px]" style={{ color: '#8a94a2' }}>
          <EvoFitWordmarkMono className="text-lg" color={P.ink} accent={P.steel} />
          <span>EvoFit © 2026 — Evotech System</span>
        </footer>
      </section>

      <DsSwitcher current="/ds/2" />
    </main>
  );
}
