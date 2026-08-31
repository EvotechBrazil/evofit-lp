'use client';

import { LeadModalProvider } from '@/components/lead/lead-modal';
import { Nav } from '@/components/sections/nav';
import { Footer } from '@/components/sections/footer';
import { archivoBlack, instrument, P } from '@/components/fusion/theme';

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${instrument.variable} ${archivoBlack.variable} min-h-screen`}
      style={{ background: P.paper, color: P.ink, fontFamily: 'var(--font-instrument)' }}
    >
      <LeadModalProvider>
        <Nav />
        {children}
        <Footer />
      </LeadModalProvider>
    </div>
  );
}
