import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/ds', '/ds/', '/api/'],
      },
    ],
    sitemap: 'https://evofit.tech/sitemap.xml',
  };
}
