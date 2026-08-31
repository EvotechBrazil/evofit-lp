import { MODULES } from '@/content/site';

export type ProductStatusJson = 'production' | 'activating' | 'radar';

export interface PublicProductModule {
  key: string;
  title: string;
  summary: string;
  category: string;
  status: ProductStatusJson;
  group: 'BASE' | 'ADDON';
}

export interface PublicProductRelease {
  id: string;
  title: string;
  body: string;
  label: string | null;
  publishedAt: string;
  moduleKey: string | null;
}

export interface PublicProductPayload {
  updatedAt: string;
  modules: PublicProductModule[];
  releases: PublicProductRelease[];
  roadmap: {
    production: string[];
    building: string[];
    radar: string[];
  };
}

export const PRODUCT_TAG = 'evofit-product';

const FALLBACK: PublicProductPayload = {
  updatedAt: new Date(0).toISOString(),
  modules: MODULES.map((m, i) => ({
    key: `legacy-${i}`,
    title: m.title,
    summary: m.desc,
    category: 'operacao',
    status: m.badge === 'EM ATIVAÇÃO' ? 'activating' : 'production',
    group: 'ADDON',
  })),
  releases: [],
  roadmap: {
    production: MODULES.flatMap((m, i) => (m.badge === 'EM ATIVAÇÃO' ? [] : [`legacy-${i}`])),
    building: MODULES.flatMap((m, i) => (m.badge === 'EM ATIVAÇÃO' ? [`legacy-${i}`] : [])),
    radar: [],
  },
};

function apiBase(): string {
  return (process.env.ALICIA_PUBLIC_API_URL ?? '').replace(/\/$/, '');
}

export async function fetchPublicProduct(): Promise<PublicProductPayload> {
  const base = apiBase();
  if (!base) return FALLBACK;

  try {
    const res = await fetch(`${base}/public/product`, {
      next: { tags: [PRODUCT_TAG], revalidate: 300 },
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return FALLBACK;
    const data = (await res.json()) as PublicProductPayload;
    if (!Array.isArray(data.modules) || data.modules.length === 0) return FALLBACK;
    return data;
  } catch {
    return FALLBACK;
  }
}

export const STATUS_LABEL: Record<ProductStatusJson, string> = {
  production: 'Disponível',
  activating: 'Chegando agora',
  radar: 'Em breve',
};

export const CATEGORY_LABEL: Record<string, string> = {
  ia: 'IA',
  vendas: 'Vendas',
  operacao: 'Operação',
  financeiro: 'Financeiro',
  aluno: 'Aluno',
  treino: 'Treino',
  marketing: 'Marketing',
  canais: 'Canais',
  integracoes: 'Integrações',
  b2b: 'Corporate',
};
