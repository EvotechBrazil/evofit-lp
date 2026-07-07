import Link from 'next/link';

const OPTIONS = [
  { href: '/', label: 'LP ✓' },
  { href: '/ds', label: '⌂' },
  { href: '/ds/1', label: '1' },
  { href: '/ds/2', label: '2★' },
  { href: '/ds/3', label: '3★' },
  { href: '/ds/4', label: '4' },
  { href: '/ds/5', label: '5★' },
  { href: '/ds/6', label: '6 🏆' },
  { href: '/ds/7', label: '7' },
  { href: '/ds/8', label: '8' },
  { href: '/ds/9', label: '9' },
];

/** Barra flutuante das PRÉVIAS de design system (páginas /ds/*, saem antes do go-live).
 *  LP = landing oficial (Fusão) na raiz · ★ = favoritos da 1ª rodada · 🏆 = escolhido. */
export function DsSwitcher({ current }: { current?: string }) {
  return (
    <nav
      aria-label="Alternar design system"
      className="fixed bottom-4 left-1/2 z-50 flex max-w-[96vw] -translate-x-1/2 flex-wrap items-center justify-center gap-1 rounded-2xl border border-white/15 bg-black/80 px-2 py-1.5 text-[11px] font-medium text-white shadow-2xl backdrop-blur-md"
    >
      {OPTIONS.map((opt) => {
        const active = current === opt.href;
        return (
          <Link
            key={opt.href}
            href={opt.href}
            className={`rounded-full px-2.5 py-1 whitespace-nowrap transition-colors ${
              active ? 'bg-white text-black' : 'text-white/75 hover:bg-white/15 hover:text-white'
            }`}
          >
            {opt.label}
          </Link>
        );
      })}
    </nav>
  );
}
