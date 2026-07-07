import { Badge, P, SectionHeading } from '@/components/fusion/theme';
import { INTEGRACOES } from '@/content/site';

export function Integracoes() {
  return (
    <section id="integracoes" className="mx-auto max-w-[1240px] scroll-mt-24 px-4">
      <div
        className="overflow-hidden rounded-[2rem] px-6 py-16 md:px-14 md:py-20"
        style={{ background: P.navy, color: P.textOnDark }}
      >
        <SectionHeading
          onDark
          kicker="Integrações"
          title={
            <>
              Não troque seu sistema. <span style={{ color: P.orange }}>Evolua ele.</span>
            </>
          }
          lead="O EvoFit nasceu pra funcionar como camada de IA por cima do que a sua academia já usa — e vai substituindo o que você quiser, no seu ritmo."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INTEGRACOES.map((it, i) => (
            <div
              key={it.name}
              className="fade-up p-6"
              style={{ background: P.navy3, animationDelay: `${i * 0.06}s` }}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ background: '#ffffff10', color: P.orange }}
                >
                  <it.icon size={19} strokeWidth={1.9} />
                </span>
                {it.badge === 'EM PRODUÇÃO' ? (
                  <Badge tone="orange">{it.badge}</Badge>
                ) : (
                  <span className="-skew-x-6 inline-block border border-white/30 px-3 py-1 text-[10.5px] font-bold uppercase tracking-wide text-white/85">
                    <span className="inline-block skew-x-6">{it.badge}</span>
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-[15.5px] font-bold">{it.name}</h3>
              <p className="mt-2 text-[13px] leading-relaxed" style={{ color: P.mutedOnDark }}>
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
