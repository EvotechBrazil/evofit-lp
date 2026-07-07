import { Check } from 'lucide-react';
import { P, SectionHeading, black } from '@/components/fusion/theme';
import { CADENCIAS, EVOLEAD_STEPS } from '@/content/site';

export function IaVendas() {
  return (
    <section id="ia-de-vendas" className="mx-auto max-w-[1240px] scroll-mt-24 px-4 pt-4">
      <div
        className="overflow-hidden rounded-[2rem] px-6 py-16 md:px-14 md:py-20"
        style={{ background: P.navy, color: P.textOnDark }}
      >
        <SectionHeading
          onDark
          kicker="IA de vendas · Funil EVOLEAD"
          title="Sua academia nunca mais perde um lead."
          lead="Conversa de verdade, não robô de botões: a IA acolhe, qualifica, cota o plano certo e agenda a aula experimental — dentro do WhatsApp, a qualquer hora do dia ou da madrugada."
        />

        {/* os 4 passos */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EVOLEAD_STEPS.map((s, i) => (
            <div
              key={s.title}
              className="fade-up p-6"
              style={{ background: P.navy3, borderTop: `4px solid ${P.orange}`, animationDelay: `${i * 0.07}s` }}
            >
              <p className="text-3xl italic" style={{ ...black, color: P.orange }}>
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 text-[17px] font-bold uppercase tracking-wide">{s.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed" style={{ color: P.mutedOnDark }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* follow-up + garantias */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-[15px] font-bold uppercase tracking-wide" style={{ color: P.orange }}>
              Follow-up que não desiste (nem incomoda)
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {CADENCIAS.map((c) => (
                <span
                  key={c}
                  className="border border-white/15 px-3.5 py-2 text-[12.5px] font-medium"
                  style={{ background: '#ffffff0a' }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          <ul className="space-y-3.5 md:pt-1">
            {[
              'Persona com o nome e o jeito da sua academia',
              'Handoff: sua equipe assume a conversa a qualquer momento',
              'Aluno matriculado nunca recebe oferta de venda',
            ].map((li) => (
              <li key={li} className="flex items-start gap-3 text-[14px]">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center"
                  style={{ background: P.orange, color: P.navy }}
                >
                  <Check size={12} strokeWidth={3.5} />
                </span>
                {li}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
