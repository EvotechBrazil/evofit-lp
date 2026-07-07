import type { Metadata } from 'next';
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';
import { EVO, EvoFitWordmark, Eyebrow } from '@/components/brand';
import { SolarBackdrop } from '@/components/solar-backdrop';

export const metadata: Metadata = { title: 'Design systems (interno)', robots: { index: false } };

const grotesk = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-grotesk' });

type System = {
  n: string;
  href: string;
  name: string;
  tone: string;
  desc: string;
  chip: string;
  chip2: string;
  badge?: string;
};

const ROUND2: System[] = [
  {
    n: '06',
    href: '/ds/6',
    name: 'Fusão',
    tone: 'A mistura oficial: 02 + 03 + 05',
    desc: 'Base editorial clara com o azul-aço EvoFit (#152238) como cor de marca (display e botões), laranja como acento, seções navy e energia kinetic (itálicos, marquee, sombras duras).',
    chip: '#152238',
    chip2: '#f08020',
    badge: '🏆 ESCOLHIDO',
  },
  {
    n: '07',
    href: '/ds/7',
    name: 'Placar',
    tone: 'Esportivo editorial claro',
    desc: 'Tipografia condensada uppercase, cantos retos, molduras 2px, placar preto com numerais tabulares. Revista de esporte.',
    chip: '#f08020',
    chip2: '#101113',
  },
  {
    n: '08',
    href: '/ds/8',
    name: 'Aurora',
    tone: 'Claro premium com gradientes',
    desc: 'Auroras suaves azul/laranja, vidro fosco, cantos bem arredondados, gradiente de marca nas palavras-chave.',
    chip: '#2277ee',
    chip2: '#f08020',
  },
  {
    n: '09',
    href: '/ds/9',
    name: 'Navy Editorial',
    tone: 'Estrutura Dentiva em navy da marca',
    desc: 'O layout editorial do 02 (headline em camadas, watermark, float cards) vestido de navy escuro + canvas laranja quente.',
    chip: '#4eaaee',
    chip2: '#f08020',
  },
];

const ROUND1: System[] = [
  {
    n: '02',
    href: '/ds/2',
    name: 'Editorial Claro',
    tone: 'Clean premium (ref. Dentiva)',
    desc: 'Fundo claro, tipografia display gigante em camadas, botão preto, pills e números enormes.',
    chip: '#567bae',
    chip2: '#202224',
    badge: '★ favorito',
  },
  {
    n: '03',
    href: '/ds/3',
    name: 'Contraste',
    tone: 'Híbrido claro × navy',
    desc: 'Hero editorial claro + seções alternadas em navy escuro, com o laranja EvoFit como acento.',
    chip: '#f08020',
    chip2: '#0a1526',
    badge: '★ favorito',
  },
  {
    n: '05',
    href: '/ds/5',
    name: 'Kinetic',
    tone: 'Energia esportiva',
    desc: 'Itálicos pesados, diagonais, marquee e blocos laranja dominantes. Velocidade e treino.',
    chip: '#f08020',
    chip2: '#ffffff',
    badge: '★ favorito',
  },
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
    n: '04',
    href: '/ds/4',
    name: 'Grafite',
    tone: 'Dark minimal high-tech',
    desc: 'Quase-preto, hairlines, tipografia enorme e um único acento laranja. Sóbrio, estilo Linear/Vercel.',
    chip: '#f08020',
    chip2: '#27272a',
  },
];

function Card({ s, i }: { s: System; i: number }) {
  return (
    <Link
      href={s.href}
      className="fade-up group relative overflow-hidden rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
      style={{
        background: `linear-gradient(${EVO.navy2}, ${EVO.navy2}) padding-box, linear-gradient(135deg, ${s.chip}55, ${s.chip2}33) border-box`,
        border: '1px solid transparent',
        animationDelay: `${0.1 + i * 0.07}s`,
      }}
    >
      <div className="flex items-start justify-between">
        <span className="text-4xl font-bold opacity-20" style={{ fontFamily: 'var(--font-grotesk)' }}>
          {s.n}
        </span>
        <span className="flex items-center gap-2 pt-1">
          {s.badge && (
            <span
              className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide"
              style={{ background: `${EVO.orange}26`, color: EVO.orangeLight }}
            >
              {s.badge}
            </span>
          )}
          <span className="flex gap-1.5">
            <span className="h-3.5 w-3.5 rounded-full" style={{ background: s.chip }} />
            <span className="h-3.5 w-3.5 rounded-full border border-white/20" style={{ background: s.chip2 }} />
          </span>
        </span>
      </div>
      <h2 className="mt-3 text-2xl font-semibold" style={{ fontFamily: 'var(--font-grotesk)' }}>
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
  );
}

export default function Hub() {
  return (
    <main
      className={`${grotesk.variable} relative min-h-screen overflow-hidden`}
      style={{ background: EVO.navy, color: EVO.text }}
    >
      <SolarBackdrop scrim="soft" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-28 pt-20 md:pt-28">
        <div className="fade-up flex flex-col items-start gap-3">
          <Eyebrow />
          <EvoFitWordmark className="text-5xl md:text-6xl" />
          <h1
            className="mt-4 max-w-2xl text-2xl font-semibold leading-snug md:text-3xl"
            style={{ fontFamily: 'var(--font-grotesk)' }}
          >
            Prévia dos design systems (arquivo interno)
          </h1>
          <p className="max-w-xl text-sm leading-relaxed md:text-base" style={{ color: EVO.textMuted }}>
            A <strong>Fusão (06)</strong> foi a escolhida e virou a landing oficial na raiz do site.
            Este arquivo fica no ar só durante a aprovação — sai antes do go-live.
          </p>
          <Link
            href="/"
            className="mt-2 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
            style={{ background: `linear-gradient(135deg, ${EVO.orange}, ${EVO.orangeDeep})` }}
          >
            Ver a landing oficial →
          </Link>
        </div>

        <h2 className="mt-12 text-sm font-bold uppercase tracking-[0.25em]" style={{ color: EVO.orangeLight }}>
          Rodada 2
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {ROUND2.map((s, i) => (
            <Card key={s.href} s={s} i={i} />
          ))}
        </div>

        <h2 className="mt-14 text-sm font-bold uppercase tracking-[0.25em]" style={{ color: EVO.blueLight }}>
          Rodada 1 · ★ = favoritos
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {ROUND1.map((s, i) => (
            <Card key={s.href} s={s} i={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
