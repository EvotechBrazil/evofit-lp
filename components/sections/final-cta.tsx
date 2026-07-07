'use client';

import { BtnFusion, P, black } from '@/components/fusion/theme';
import { useLeadModal } from '@/components/lead/lead-modal';
import { CTA_PRIMARY, LEMA } from '@/content/site';

export function FinalCta() {
  const { openLeadModal } = useLeadModal();
  return (
    <section className="mx-auto max-w-[1240px] px-4 pb-4 pt-2">
      <div className="relative overflow-hidden rounded-[2rem] px-8 py-16 text-center" style={{ background: P.orange }}>
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
            <BtnFusion shadow="#ffffff" onClick={openLeadModal}>
              {CTA_PRIMARY}
            </BtnFusion>
          </div>
          <p className="mt-5 text-[12.5px] font-medium" style={{ color: '#5c2f08' }}>
            Demonstração guiada, sem compromisso — direto no WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
