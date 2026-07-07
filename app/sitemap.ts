import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://evofit.tech',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://evofit.tech/politica-de-privacidade',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
