'use client';

import Link from 'next/link';
import { LeadModalProvider, useLeadModal } from '@/components/lead/lead-modal';
import { EvoFitWordmarkMono } from '@/components/brand';
import { Footer } from '@/components/sections/footer';
import { archivoBlack, instrument, P } from '@/components/fusion/theme';
import { CTA_LINKS } from '@/components/sections/shared';
import { CTA_PRIMARY } from '@/content/site';

function TopNav() {
  const { openLeadModal } = useLeadModal();
  return (
    <header className="sticky top-0 z-40 border-b border-black/6 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="EvoFit — início">
          <EvoFitWordmarkMono className="text-xl" color={P.blue} accent={P.orange} />
        </Link>
        <nav className="hidden items-center gap-7 text-[13.5px] font-medium lg:flex" style={{ color: P.muted }}>
          {CTA_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-black">
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={openLeadModal}
          className="cursor-pointer px-5 py-2.5 text-[13px] font-semibold text-white transition-transform hover:-translate-y-0.5"
          style={{ background: P.blue, boxShadow: `4px 4px 0 ${P.orange}` }}
        >
          {CTA_PRIMARY}
        </button>
      </div>
    </header>
  );
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${instrument.variable} ${archivoBlack.variable} min-h-screen`}
      style={{ background: P.paper, color: P.ink, fontFamily: 'var(--font-instrument)' }}
    >
      <LeadModalProvider>
        <TopNav />
        {children}
        <Footer />
      </LeadModalProvider>
    </div>
  );
}
