import { Badge, P, SectionHeading, black } from '@/components/fusion/theme';
import { MODULES } from '@/content/site';

export function Modules() {
  return (
    <section id="funcionalidades" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-24">
      <SectionHeading
        title={
          <>
            Tudo que uma academia precisa. <span style={{ color: P.orange }}>Num sistema só.</span>
          </>
        }
        lead="Da primeira mensagem do lead até a catraca girar — cada módulo conversa com os outros, no mesmo lugar."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MODULES.map((m, i) => (
          <div
            key={m.title}
            className="fade-up group relative overflow-hidden bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ animationDelay: `${i * 0.05}s`, borderTop: `4px solid ${P.orange}` }}
          >
            <span className="absolute right-4 top-3 text-3xl italic" style={{ ...black, color: '#15223820' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-3">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                style={{ background: `${P.orange}1a`, color: P.orangeDeep }}
              >
                <m.icon size={20} strokeWidth={1.9} />
              </span>
              {m.badge && <Badge tone="orange">{m.badge}</Badge>}
            </div>
            <h3 className="mt-4 text-[15.5px] font-semibold leading-snug" style={{ color: P.ink }}>
              {m.title}
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed" style={{ color: P.muted }}>
              {m.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
