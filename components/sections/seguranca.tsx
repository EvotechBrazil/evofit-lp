import { P, SectionHeading } from '@/components/fusion/theme';
import { SEGURANCA } from '@/content/site';

export function Seguranca() {
  return (
    <section id="seguranca" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-24">
      <SectionHeading
        kicker="Segurança & LGPD"
        title={
          <>
            Segurança de banco. <span style={{ color: P.orange }}>Privacidade de verdade.</span>
          </>
        }
        lead="Dados de alunos são dados pessoais — e o EvoFit trata isso como prioridade de engenharia, não como banner de cookies."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SEGURANCA.map((s, i) => (
          <div
            key={s.title}
            className="fade-up bg-white p-6 shadow-sm"
            style={{ animationDelay: `${i * 0.05}s`, borderLeft: `4px solid ${P.blue}` }}
          >
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{ background: '#15223812', color: P.blue }}
            >
              <s.icon size={19} strokeWidth={1.9} />
            </span>
            <h3 className="mt-4 text-[15px] font-semibold" style={{ color: P.ink }}>
              {s.title}
            </h3>
            <p className="mt-1.5 text-[13px] leading-relaxed" style={{ color: P.muted }}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
