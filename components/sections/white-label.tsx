import { P, SectionHeading, black } from '@/components/fusion/theme';
import { WHITELABEL_TEMAS } from '@/content/site';

export function WhiteLabel() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            kicker="White-label"
            title={
              <>
                A sua academia. <span style={{ color: P.orange }}>A sua marca.</span>
              </>
            }
            lead="Cor, logo e até a personalidade da IA são da sua academia — no portal do aluno, nos contratos, no link de indicação e em cada conversa. O aluno vê a SUA marca, não a nossa."
          />
          <ul className="mt-7 space-y-3 text-[14px]" style={{ color: P.ink }}>
            <li>• Portal do aluno com a sua cor e o seu logo</li>
            <li>• IA com nome, tom e histórico da sua academia</li>
            <li>• Contratos, links e páginas públicas com a sua identidade</li>
          </ul>
        </div>

        {/* demo: mesma UI, três marcas */}
        <div className="grid grid-cols-3 gap-3">
          {WHITELABEL_TEMAS.map((t, i) => (
            <div
              key={t.nome}
              className={`fade-up overflow-hidden rounded-xl bg-white shadow-md ${i === 1 ? 'md:-translate-y-4' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="px-3 py-2.5" style={{ background: t.cor }}>
                <p className="truncate text-[11px] font-bold uppercase tracking-wide text-white">{t.nome}</p>
              </div>
              <div className="space-y-2 p-3">
                <div className="h-2 w-3/4 rounded-full" style={{ background: `${t.cor}33` }} />
                <div className="h-2 w-1/2 rounded-full bg-black/8" />
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="h-6 w-6 rounded-full" style={{ background: `${t.cor}22` }} />
                  <div className="h-2 flex-1 rounded-full bg-black/8" />
                </div>
                <div
                  className="mt-3 rounded-md py-1.5 text-center text-[9.5px] font-bold uppercase text-white"
                  style={{ background: t.cor }}
                >
                  Agendar aula
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
