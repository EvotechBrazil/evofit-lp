import { P, black } from '@/components/fusion/theme';
import { STATS } from '@/content/site';

export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-18">
      <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`px-6 text-center md:text-left ${i > 0 ? 'md:border-l md:border-[#d3dbe6]' : ''}`}
          >
            <p
              className="text-[2.6rem] italic leading-none md:text-[3.2rem]"
              style={{ ...black, color: i % 2 === 0 ? P.blue : P.orange }}
            >
              {s.value}
            </p>
            <p className="mt-2 text-[12.5px] leading-snug" style={{ color: P.muted }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
