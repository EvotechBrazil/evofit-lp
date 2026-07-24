import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'EvoFit — A evolução em sistemas de gerenciamento para academias';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          background: 'linear-gradient(160deg, #0d1e38 0%, #0a1526 55%, #060e1c 100%)',
          padding: '80px 90px',
          position: 'relative',
        }}
      >
        {/* faixa laranja kinetic */}
        <div
          style={{
            position: 'absolute',
            right: -140,
            top: 0,
            width: 420,
            height: 630,
            background: 'linear-gradient(160deg, #f08020, #c85000)',
            transform: 'skewX(-12deg)',
            display: 'flex',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            fontSize: 96,
            fontWeight: 900,
            fontStyle: 'italic',
            letterSpacing: '-0.03em',
          }}
        >
          <span style={{ color: '#4eaaee' }}>Evo</span>
          <span style={{ color: '#f08020' }}>Fit</span>
        </div>
        <div
          style={{
            marginTop: 34,
            maxWidth: 760,
            fontSize: 44,
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#eaf1fb',
            display: 'flex',
          }}
        >
          A evolução em sistemas de gerenciamento para academias
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 24,
            color: '#8aa0be',
            display: 'flex',
          }}
        >
          IA que vende no WhatsApp · gestão completa · com a sua marca
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 46,
            left: 90,
            fontSize: 20,
            color: '#5a6f8c',
            display: 'flex',
          }}
        >
          site.evofit.tech — Evotech System
        </div>
      </div>
    ),
    size
  );
}
