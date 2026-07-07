import { EVO } from '@/components/brand';

/* Um "planeta" orbitando: wrapper gira, o ponto fica no topo da órbita. */
function Orbit({
  r,
  size,
  color,
  dur,
  reverse = false,
  delay = '0s',
  ring = true,
}: {
  r: number;
  size: number;
  color: string;
  dur: string;
  reverse?: boolean;
  delay?: string;
  ring?: boolean;
}) {
  return (
    <div
      className="lp-rotate absolute left-1/2 top-1/2"
      style={{
        width: r * 2,
        height: r * 2,
        marginLeft: -r,
        marginTop: -r,
        animationDuration: dur,
        animationDirection: reverse ? 'reverse' : 'normal',
        animationDelay: delay,
      }}
    >
      {ring && (
        <div
          className="absolute inset-0 rounded-full"
          style={{ border: `1px solid ${color}22` }}
        />
      )}
      <div
        className="absolute rounded-full"
        style={{
          top: -size / 2,
          left: `calc(50% - ${size / 2}px)`,
          width: size,
          height: size,
          background: color,
          transform: 'scaleY(1.85)',
          boxShadow: `0 0 ${size * 1.4}px ${color}, 0 0 ${size * 3}px ${color}aa`,
        }}
      />
    </div>
  );
}

/**
 * Fundo "sistema solar" — portado do login do EvoFit.
 * Núcleo (imagem da esfera) + órbitas de luz + partículas + scrim.
 */
export function SolarBackdrop({
  className = '',
  scrim = 'hero',
}: {
  className?: string;
  scrim?: 'hero' | 'soft';
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ background: EVO.navy }}
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logos/evofit-hero.jpg"
        alt=""
        className="lp-ken absolute inset-0 h-full w-full object-cover object-top"
        draggable={false}
      />

      <div
        className="lp-pulse absolute left-1/2 top-[42%] h-[34vmin] w-[34vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: `radial-gradient(circle, ${EVO.orangeLight}66 0%, ${EVO.orange}33 30%, transparent 65%)`,
          filter: 'blur(6px)',
          mixBlendMode: 'screen',
        }}
      />

      <div
        className="absolute left-1/2 top-[42%]"
        style={{ transform: 'translate(-50%, -50%) scaleY(0.54)' }}
      >
        <Orbit r={150} size={7} color={EVO.blueLight} dur="26s" />
        <Orbit r={210} size={10} color={EVO.orangeLight} dur="38s" reverse delay="-6s" />
        <Orbit r={270} size={6} color="#9b7bff" dur="50s" delay="-12s" />
        <Orbit r={330} size={9} color={EVO.blue} dur="68s" reverse delay="-20s" />
      </div>

      <div
        className="lp-twinkle absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(${EVO.blueLight}88 1px, transparent 1px), radial-gradient(${EVO.orangeLight}66 1px, transparent 1px)`,
          backgroundSize: '52px 52px, 84px 84px',
          backgroundPosition: '0 0, 30px 40px',
          opacity: 0.25,
        }}
      />

      {scrim === 'hero' ? (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${EVO.navy}55 0%, transparent 26%, transparent 50%, ${EVO.navy}d9 76%, ${EVO.navy} 92%)`,
          }}
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${EVO.navy}aa 0%, ${EVO.navy}55 40%, ${EVO.navy}ee 85%, ${EVO.navy} 100%)`,
          }}
        />
      )}
    </div>
  );
}
