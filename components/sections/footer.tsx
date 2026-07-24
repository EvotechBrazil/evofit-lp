import { EvoFitWordmarkMono } from '@/components/brand';
import { P } from '@/components/fusion/theme';
import { CTA_LINKS } from '@/components/sections/shared';

export function Footer() {
  return (
    <footer className="mt-6" style={{ background: P.navy, color: P.mutedOnDark }}>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <EvoFitWordmarkMono className="text-2xl" color="#ffffff" accent={P.orange} />
          <p className="mt-3 max-w-xs text-[13px] leading-relaxed">
            A evolução em sistemas de gerenciamento para academias — gestão completa + vendas e
            atendimento com IA, num só lugar.
          </p>
        </div>
        <nav aria-label="Seções do site">
          <p className="text-[11.5px] font-bold uppercase tracking-[0.2em]" style={{ color: P.orange }}>
            Navegue
          </p>
          <ul className="mt-4 space-y-2.5 text-[13.5px]">
            {CTA_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-[11.5px] font-bold uppercase tracking-[0.2em]" style={{ color: P.orange }}>
            Legal
          </p>
          <ul className="mt-4 space-y-2.5 text-[13.5px]">
            <li>
              <a href="/politica-de-privacidade" className="transition-colors hover:text-white">
                Política de privacidade
              </a>
            </li>
            <li>
              <a href="/termos-de-uso" className="transition-colors hover:text-white">
                Termos de uso
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-6 text-[12px]" style={{ color: '#5a6f8c' }}>
          <span>EvoFit © 2026 — Evotech System</span>
          <span>evofit.tech</span>
        </div>
      </div>
    </footer>
  );
}
