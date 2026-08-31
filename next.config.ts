import type { NextConfig } from 'next';

/**
 * Landing canônica: site.evofit.tech. Painel admin: www.evofit.tech.
 * Rotas do painel que caírem neste app (/login, /r/:code, etc.) redirecionam pro www.
 */
const PANEL = 'https://www.evofit.tech';
const PANEL_ROUTES = [
  'login',
  'agendar',
  'member',
  'webchat',
  'display',
  'equipe',
  'vitrine',
  'mobile',
];

/** CSP compatível com Next + Vercel Analytics (sem third-party ads). */
const IS_DEV = process.env.NODE_ENV !== 'production';
const CSP = [
  "default-src 'self'",
  // React/Turbopack usam eval() só no `next dev`. Produção continua sem unsafe-eval.
  IS_DEV
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://va.vercel-scripts.com"
    : "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  IS_DEV
    ? "connect-src 'self' ws: wss: http://localhost:* http://127.0.0.1:* ws://localhost:* ws://127.0.0.1:* https://vitals.vercel-insights.com https://va.vercel-scripts.com"
    : "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join('; ');

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'Content-Security-Policy', value: CSP },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      { source: '/r/:path*', destination: `${PANEL}/r/:path*`, permanent: false },
      ...PANEL_ROUTES.flatMap((route) => [
        { source: `/${route}`, destination: `${PANEL}/${route}`, permanent: false },
        {
          source: `/${route}/:path*`,
          destination: `${PANEL}/${route}/:path*`,
          permanent: false,
        },
      ]),
    ];
  },
};

export default nextConfig;
