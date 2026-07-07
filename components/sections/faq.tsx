import { ChevronDown } from 'lucide-react';
import { P, SectionHeading } from '@/components/fusion/theme';
import { FAQ } from '@/content/site';

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-20 md:py-24">
      <SectionHeading kicker="FAQ" title="Perguntas frequentes" />
      <div className="mt-10 space-y-3">
        {FAQ.map((f) => (
          <details
            key={f.q}
            className="group bg-white shadow-sm open:shadow-md"
            style={{ borderLeft: `4px solid ${P.orange}` }}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[14.5px] font-semibold [&::-webkit-details-marker]:hidden" style={{ color: P.ink }}>
              {f.q}
              <ChevronDown
                size={17}
                className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                color={P.muted}
              />
            </summary>
            <p className="px-5 pb-5 text-[13.5px] leading-relaxed" style={{ color: P.muted }}>
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
