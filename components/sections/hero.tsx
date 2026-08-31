'use client';

import { useCallback, useState } from 'react';
import { ChatMock } from '@/components/chat-mock';
import { useLeadModal } from '@/components/lead/lead-modal';
import { BtnFusion, FloatCard, P, black, chatLight } from '@/components/fusion/theme';
import { CHAT_VENDAS, CTA_PRIMARY, PROVA, SUB } from '@/content/site';

export function Hero() {
  const { openLeadModal } = useLeadModal();
  const [shown, setShown] = useState(0);
  const onProgress = useCallback((n: number) => setShown(n), []);

  return (
    <section id="inicio" className="mx-auto mt-6 max-w-[1240px] px-4">
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
              <span className="block uppercase" style={{ color: P.blue }}>
                em gestão
              </span>
              <span className="block uppercase">
                <mark className="px-2" style={{ background: P.orange, color: '#ffffff' }}>
                  de academias
                </mark>
              </span>
              <span className="sr-only"> — sistema de gestão para academias com inteligência artificial</span>
            </h1>
            <p className="mx-auto mt-6 max-w-md text-[15.5px] leading-relaxed md:mx-0" style={{ color: '#3c4756' }}>
              {SUB}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5 md:justify-start">
              <BtnFusion onClick={openLeadModal}>{CTA_PRIMARY}</BtnFusion>
              <a
                href="#ia-de-vendas"
                className="text-[13px] font-semibold uppercase tracking-wider transition-opacity hover:opacity-70"
                style={{ color: P.muted }}
              >
                ↓ veja a IA vendendo
              </a>
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
                <ChatMock
                  messages={CHAT_VENDAS}
                  theme={chatLight}
                  title="Sofia · IA da sua academia"
                  onProgress={onProgress}
                />
              </div>
            </div>
            {shown >= 8 && (
              <FloatCard
                title="Aula experimental ✅"
                sub="Ana · quinta 19h"
                className="chat-in absolute -left-32 top-14 max-lg:hidden"
              />
            )}
            {shown >= 6 && (
              <FloatCard
                title="Pix recebido 💸"
                sub="R$ 297 · mensalidade"
                className="chat-in absolute -right-28 bottom-20 max-lg:hidden"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
