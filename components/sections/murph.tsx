import { Check } from 'lucide-react';
import { ChatMock } from '@/components/chat-mock';
import { P, SectionHeading, black, chatDark } from '@/components/fusion/theme';
import { CHAT_MURPH, MURPH_BULLETS } from '@/content/site';

export function Murph() {
  return (
    <section id="murph" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-24">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            kicker="Murph · Copiloto do dono"
            title={
              <>
                O secretário de IA que trabalha <span style={{ color: P.orange }}>pro dono</span>
              </>
            }
            lead='"Cobra os inadimplentes acima de 7 dias", "quem tá em risco de cancelar?", "como foi a semana?" — o Murph executa mais de 40 ações reais no sistema por mensagem de WhatsApp.'
          />
          <ul className="mt-7 space-y-3">
            {MURPH_BULLETS.map((li) => (
              <li key={li} className="flex items-center gap-3 text-[14px]" style={{ color: P.ink }}>
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center text-white"
                  style={{ background: P.blue }}
                >
                  <Check size={12} strokeWidth={3.5} />
                </span>
                {li}
              </li>
            ))}
          </ul>
          <div
            className="mt-8 flex items-center justify-between gap-6 p-6"
            style={{ background: `linear-gradient(140deg, #ffffff, ${P.powder})`, borderLeft: `4px solid ${P.orange}` }}
          >
            <div>
              <p className="text-5xl italic" style={{ ...black, color: P.blue }}>
                1 = 3
              </p>
              <p className="mt-1.5 max-w-[300px] text-[12.5px]" style={{ color: P.muted }}>
                uma secretária com o Murph rende como três sem ele — o operacional repetitivo vira
                uma mensagem
              </p>
            </div>
            <span className="text-4xl" aria-hidden>
              ⚡
            </span>
          </div>
        </div>

        <div className="mx-auto h-[470px] w-[280px] rotate-2 overflow-hidden rounded-[2rem] p-2 shadow-2xl" style={{ background: P.navy }}>
          <div className="h-full w-full overflow-hidden rounded-[1.55rem]">
            <ChatMock
              messages={CHAT_MURPH}
              theme={chatDark}
              title="Murph · Secretário IA"
              subtitle="modo dono"
              step={0.7}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
