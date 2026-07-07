'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLeadModal } from '@/components/lead/lead-modal';
import { P } from '@/components/fusion/theme';
import { CTA_PRIMARY } from '@/content/site';

/** Barra de CTA fixa no rodapé do celular — aparece depois que o hero sai da tela. */
export function MobileCta() {
  const { openLeadModal } = useLeadModal();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('inicio');
    if (!hero || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.05 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-3 md:hidden">
      <button
        type="button"
        onClick={openLeadModal}
        className="chat-in flex h-13 w-full cursor-pointer items-center justify-center gap-2.5 text-[15px] font-semibold text-white shadow-2xl"
        style={{ background: P.blue, boxShadow: `4px 4px 0 ${P.orange}, 0 -8px 30px #0006`, minHeight: 52 }}
      >
        {CTA_PRIMARY}
        <ArrowRight size={17} strokeWidth={2.4} />
      </button>
    </div>
  );
}
