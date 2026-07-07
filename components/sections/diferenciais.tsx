import { P, black } from '@/components/fusion/theme';
import { DIFERENCIAIS } from '@/content/site';

export function Diferenciais() {
  return (
    <section className="mx-auto max-w-[1240px] px-4">
      <div className="rounded-[2rem] px-6 py-14 md:px-14" style={{ background: P.navy, color: '#f2f4f7' }}>
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center">
          <h2 className="text-3xl italic uppercase leading-[1.05] md:text-[2.5rem]" style={black}>
            O que só o<br />
            <span style={{ color: P.orange }}>EvoFit</span> faz
          </h2>
          <ul className="space-y-3.5">
            {DIFERENCIAIS.map((d, i) => (
              <li key={d} className="flex items-start gap-4 text-[14px] leading-relaxed">
                <span className="text-[15px] italic" style={{ ...black, color: P.orange, minWidth: '2.2ch' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
