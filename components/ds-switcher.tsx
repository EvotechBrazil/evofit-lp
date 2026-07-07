import Link from 'next/link';

const OPTIONS = [
  { href: '/', label: '⌂' },
  { href: '/ds/1', label: '1 · Solar' },
  { href: '/ds/2', label: '2 · Editorial' },
  { href: '/ds/3', label: '3 · Contraste' },
  { href: '/ds/4', label: '4 · Grafite' },
  { href: '/ds/5', label: '5 · Kinetic' },
];

/** Barra flutuante pra alternar entre os design systems de prévia (sai antes do go-live). */
export function DsSwitcher({ current }: { current?: string }) {
  return (
    <nav
      aria-label="Alternar design system"
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/15 bg-black/75 px-2 py-1.5 text-[11px] font-medium text-white shadow-2xl backdrop-blur-md"
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
