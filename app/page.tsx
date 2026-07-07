import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';
import { EVO, EvoFitWordmark, Eyebrow } from '@/components/brand';
import { SolarBackdrop } from '@/components/solar-backdrop';

const grotesk = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-grotesk' });

const SYSTEMS = [
  {
    n: '01',
    href: '/ds/1',
    name: 'Solar',
    tone: 'Dark navy futurista',
    desc: 'A marca EvoFit atual: órbitas animadas, glow azul + laranja, cards com borda em gradiente e glass.',
    chip: '#2277ee',
    chip2: '#f08020',
  },
  {
    n: '02',
    href: '/ds/2',
    name: 'Editorial Claro',
    tone: 'Clean premium (ref. Dentiva)',
    desc: 'Fundo claro, tipografia display gigante em camadas, botão preto, pills e números enormes.',
    chip: '#567bae',
    chip2: '#202224',
  },
  {
    n: '03',
    href: '/ds/3',
    name: 'Contraste',
    tone: 'Híbrido claro × navy',
    desc: 'Hero editorial claro + seções alternadas em navy escuro, com o laranja EvoFit como acento.',
    chip: '#f08020',
    chip2: '#0a1526',
  },
  {
    n: '04',
    href: '/ds/4',
    name: 'Grafite',
    tone: 'Dark minimal high-tech',
    desc: 'Quase-preto, hairlines, tipografia enorme e um único acento laranja. Sóbrio, estilo Linear/Vercel.',
    chip: '#f08020',
    chip2: '#27272a',
  },
  {
    n: '05',
    href: '/ds/5',
    name: 'Kinetic',
    tone: 'Energia esportiva',
    desc: 'Itálicos pesados, diagonais, marquee e blocos laranja dominantes. Velocidade e treino.',
    chip: '#f08020',
    chip2: '#ffffff',
  },
];

export default function Hub() {
  return (
    <main
      className={`${grotesk.variable} relative min-h-screen overflow-hidden`}
      style={{ background: EVO.navy, color: EVO.text }}
    >
      <SolarBackdrop scrim="soft" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-20 md:pt-28">
        <div className="fade-up flex flex-col items-start gap-3">
          <Eyebrow />
          <EvoFitWordmark className="text-5xl md:text-6xl" />
          <h1
            className="mt-4 max-w-2xl text-2xl font-semibold leading-snug md:text-3xl"
            style={{ fontFamily: 'var(--font-grotesk)' }}
          >
            Prévia dos design systems do novo site
          </h1>
          <p className="max-w-xl text-sm leading-relaxed md:text-base" style={{ color: EVO.textMuted }}>
            Cinco direções visuais completas pro site de divulgação do EvoFit — mesmo conteúdo,
            personalidades diferentes. Abra cada uma (funciona no celular também), compare e escolha
            a vencedora. Dá pra misturar elementos entre elas.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {SYSTEMS.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              className="fade-up group relative overflow-hidden rounded-2xl border border-white/10 p-6 transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: `linear-gradient(${EVO.navy2}, ${EVO.navy2}) padding-box, linear-gradient(135deg, ${s.chip}55, ${s.chip2}33) border-box`,
                border: '1px solid transparent',
                animationDelay: `${0.1 + i * 0.08}s`,
              }}
            >
              <div className="flex items-start justify-between">
                <span
                  className="text-4xl font-bold opacity-20"
                  style={{ fontFamily: 'var(--font-grotesk)' }}
                >
                  {s.n}
                </span>
                <span className="flex gap-1.5 pt-2">
                  <span className="h-3.5 w-3.5 rounded-full" style={{ background: s.chip }} />
                  <span
                    className="h-3.5 w-3.5 rounded-full border border-white/20"
                    style={{ background: s.chip2 }}
                  />
                </span>
              </div>
              <h2
                className="mt-3 text-2xl font-semibold"
                style={{ fontFamily: 'var(--font-grotesk)' }}
              >
                {s.name}
              </h2>
              <p className="text-[13px] font-medium" style={{ color: EVO.blueLight }}>
                {s.tone}
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: EVO.textMuted }}>
                {s.desc}
              </p>
              <span
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: EVO.orange }}
              >
                Ver prévia →
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-center text-xs" style={{ color: EVO.textFaint }}>
          Página interna de aprovação — sai do ar antes do lançamento do site.
        </p>
      </div>
    </main>
  );
}
