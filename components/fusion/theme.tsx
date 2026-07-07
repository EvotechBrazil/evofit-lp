import { Archivo_Black, Instrument_Sans } from 'next/font/google';
import { ArrowRight, Zap } from 'lucide-react';

/* ════════════════════════════════════════════════════════════
   Design System "Fusão" — tokens e componentes-base do site
   (escolhido pelo Tiago 07/07; azul de marca = azul-aço #152238)
   ════════════════════════════════════════════════════════════ */

export const instrument = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument',
});

export const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-archivo-black',
});

export const P = {
  paper: '#f6f8fb',
  ink: '#17191c',
  navy: '#0a1526',
  navy3: '#0d1e38',
  /* "nosso azul": tom da bolha do chat dark (calibrado com o Tiago em 4 rodadas) */
  blue: '#152238',
  orange: '#f08020',
  orangeDeep: '#c85000',
  powder: '#dbe6f2',
  muted: '#5b6572',
  textOnDark: '#eaf1fb',
  mutedOnDark: '#8aa0be',
} as const;

export const body = { fontFamily: 'var(--font-instrument)' } as const;
export const black = { fontFamily: 'var(--font-archivo-black)' } as const;

/* ── Botão assinatura: retângulo azul-aço + sombra dura laranja ── */
export function BtnFusion({
  children,
  shadow,
  className = '',
  arrow = true,
  onClick,
  href,
}: {
  children: React.ReactNode;
  shadow?: string;
  className?: string;
  arrow?: boolean;
  onClick?: () => void;
  href?: string;
}) {
  const style = {
    background: P.blue,
    color: '#ffffff',
    boxShadow: `5px 5px 0 ${shadow ?? P.orange}`,
    ...body,
  };
  const cls = `inline-flex cursor-pointer items-center gap-2.5 px-7 py-3.5 text-[14px] font-semibold transition-transform duration-200 hover:-translate-y-0.5 ${className}`;
  const content = (
    <>
      {children}
      {arrow && <ArrowRight size={16} strokeWidth={2.4} />}
    </>
  );
  if (href) {
    return (
      <a href={href} className={cls} style={style}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls} style={style}>
      {content}
    </button>
  );
}

export function BtnOutline({
  children,
  href,
  className = '',
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex cursor-pointer items-center gap-2 border-2 px-6 py-3.5 text-[14px] font-semibold transition-colors hover:bg-black/5 ${className}`}
      style={{ borderColor: P.blue, color: P.blue, ...body }}
    >
      {children}
    </a>
  );
}

/* ── Badges de status (honestidade de roadmap) ── */
export function Badge({ children, tone = 'blue' }: { children: React.ReactNode; tone?: 'blue' | 'orange' }) {
  return (
    <span
      className="-skew-x-6 inline-block px-3 py-1 text-[10.5px] font-bold uppercase tracking-wide text-white"
      style={{ background: tone === 'blue' ? P.blue : P.orange }}
    >
      <span className="inline-block skew-x-6">{children}</span>
    </span>
  );
}

/* ── Cabeçalho de seção ── */
export function SectionHeading({
  kicker,
  title,
  lead,
  onDark = false,
  align = 'center',
}: {
  kicker?: string;
  title: React.ReactNode;
  lead?: string;
  onDark?: boolean;
  align?: 'center' | 'left';
}) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {kicker && (
        <span
          className="text-[11.5px] font-bold uppercase tracking-[0.28em]"
          style={{ color: onDark ? P.orange : P.orangeDeep }}
        >
          {kicker}
        </span>
      )}
      <h2
        className="mt-4 text-3xl italic uppercase leading-[1.05] md:text-[2.6rem]"
        style={{ ...black, color: onDark ? P.textOnDark : undefined }}
      >
        {title}
      </h2>
      {lead && (
        <p
          className="mt-4 text-[14.5px] leading-relaxed"
          style={{ color: onDark ? P.mutedOnDark : P.muted }}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

/* ── Marquee kinetic ── */
export function Marquee({ items, dark = false }: { items: string[]; dark?: boolean }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden py-3" style={{ background: dark ? P.navy : P.orange }} aria-hidden>
      <div className="marquee flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-[14px] italic uppercase"
            style={{ ...black, color: dark ? P.orange : P.ink }}
          >
            {t}
            <Zap size={13} fill={dark ? P.orange : P.ink} strokeWidth={0} />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Card flutuante com filete laranja ── */
export function FloatCard({
  title,
  sub,
  className = '',
}: {
  title: string;
  sub: string;
  className?: string;
}) {
  return (
    <div
      className={`float-y w-[190px] bg-white p-3.5 shadow-lg ${className}`}
      style={{ borderLeft: `4px solid ${P.orange}` }}
    >
      <p className="text-[12px] font-semibold" style={{ color: P.ink }}>{title}</p>
      <p className="mt-0.5 text-[11px]" style={{ color: P.muted }}>{sub}</p>
    </div>
  );
}

/* ── Temas do ChatMock ── */
export const chatLight = {
  bg: '#eef2f7',
  headerBg: '#ffffff',
  headerText: P.ink,
  inBg: '#ffffff',
  inText: P.ink,
  outBg: '#ffe3c7',
  outText: '#3a2410',
  metaText: '#17191c55',
};

export const chatDark = {
  bg: '#060e1c',
  headerBg: P.navy3,
  headerText: P.textOnDark,
  inBg: '#152238',
  inText: P.textOnDark,
  outBg: '#0d3b2e',
  outText: '#dcfce7',
  metaText: '#ffffff55',
};
