import Link from 'next/link';
import { Badge, P, black } from '@/components/fusion/theme';
import {
  CATEGORY_LABEL,
  STATUS_LABEL,
  type PublicProductModule,
  type ProductStatusJson,
} from '@/lib/product';

function statusTone(status: ProductStatusJson): 'blue' | 'orange' {
  return status === 'production' ? 'orange' : 'blue';
}

export function ProductGrid({
  modules,
  hrefPrefix = '/funcionalidades',
}: {
  modules: PublicProductModule[];
  hrefPrefix?: string;
}) {
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {modules.map((m, i) => (
        <Link
          key={m.key}
          href={`${hrefPrefix}/${m.key}`}
          className="fade-up group relative overflow-hidden bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          style={{ animationDelay: `${i * 0.03}s`, borderTop: `4px solid ${P.orange}` }}
        >
          <span className="absolute right-4 top-3 text-3xl italic" style={{ ...black, color: '#15223820' }}>
            {String(i + 1).padStart(2, '0')}
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {m.status !== 'production' && (
              <Badge tone={statusTone(m.status)}>{STATUS_LABEL[m.status]}</Badge>
            )}
            <span className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: P.muted }}>
              {CATEGORY_LABEL[m.category] ?? m.category}
            </span>
          </div>
          <h3 className="mt-4 text-[15.5px] font-semibold leading-snug" style={{ color: P.ink }}>
            {m.title}
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed" style={{ color: P.muted }}>
            {m.summary}
          </p>
        </Link>
      ))}
    </div>
  );
}
