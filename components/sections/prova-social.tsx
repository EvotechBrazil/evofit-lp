import { P, black } from '@/components/fusion/theme';
import { PROVA_SOCIAL } from '@/content/site';

export function ProvaSocial() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-4">
      <div
        className="relative overflow-hidden rounded-[2rem] px-6 py-14 text-center md:px-14 md:py-18"
        style={{ background: `linear-gradient(160deg, #ffffff, ${P.powder})` }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[7rem] italic uppercase md:text-[11rem]"
          style={{ ...black, color: P.blue, opacity: 0.05 }}
        >
          EvoFit
        </span>
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-3xl italic uppercase leading-[1.05] md:text-[2.5rem]" style={{ ...black, color: P.blue }}>
            {PROVA_SOCIAL.titulo}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed" style={{ color: '#3c4756' }}>
            {PROVA_SOCIAL.texto}
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            {['CrossFit Arapongas · ~2.000 alunos', 'Flow House'].map((t) => (
              <span
                key={t}
                className="bg-white px-4 py-2 text-[12.5px] font-semibold shadow-sm"
                style={{ color: P.blue, borderLeft: `3px solid ${P.orange}` }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
