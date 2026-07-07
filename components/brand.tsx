/* ════════════════════════════════════════════════════════════
   EvoFit brand (portado 1:1 do painel — frontend/src/components/auth/brand.tsx)
   ════════════════════════════════════════════════════════════ */
export const EVO = {
  navy: '#060e1c',
  navy2: '#0a1526',
  navy3: '#0d1e38',
  blue: '#2277ee',
  blueLight: '#4eaaee',
  blueGlow: '#66aaff',
  orange: '#f08020',
  orangeLight: '#ffaa44',
  orangeDeep: '#c85000',
  text: '#eaf1fb',
  textMuted: '#8aa0be',
  textFaint: '#5a6f8c',
} as const;

/* ─── Wordmark inline (texto, fundo transparente) ────────── */
export function EvoFitWordmark({
  className = '',
  glow = true,
}: {
  className?: string;
  glow?: boolean;
}) {
  return (
    <span
      className={`font-black italic tracking-tight select-none ${className}`}
      style={{ fontFamily: "'Arial Black', Impact, system-ui, sans-serif" }}
    >
      <span
        style={{
          background: `linear-gradient(180deg, #f0f8ff, ${EVO.blueLight} 55%, #0a3068)`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          filter: glow ? `drop-shadow(0 0 14px ${EVO.blue}88)` : undefined,
        }}
      >
        Evo
      </span>
      <span
        style={{
          display: 'inline-block',
          paddingRight: '0.18em',
          background: `linear-gradient(180deg, #fff5cc, ${EVO.orange} 55%, #6a1c00)`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          filter: glow ? `drop-shadow(0 0 14px ${EVO.orange}88)` : undefined,
        }}
      >
        Fit
      </span>
    </span>
  );
}

/* ─── Wordmark monocromático (pra fundos claros) ─────────── */
export function EvoFitWordmarkMono({
  className = '',
  color = '#202224',
  accent = '#f08020',
}: {
  className?: string;
  color?: string;
  accent?: string;
}) {
  return (
    <span
      className={`font-black italic tracking-tight select-none ${className}`}
      style={{ fontFamily: "'Arial Black', Impact, system-ui, sans-serif" }}
    >
      <span style={{ color }}>Evo</span>
      <span style={{ color: accent, display: 'inline-block', paddingRight: '0.14em' }}>Fit</span>
    </span>
  );
}

/* ─── Eyebrow "EVOTECH SYSTEM" ───────────────────────────── */
export function Eyebrow({
  className = '',
  color = EVO.blueLight,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <span
      className={`text-[11px] font-medium ${className}`}
      style={{ letterSpacing: '0.4em', color, opacity: 0.75 }}
    >
      EVOTECH&nbsp;&nbsp;SYSTEM
    </span>
  );
}
