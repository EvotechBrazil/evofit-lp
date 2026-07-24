import type { NextConfig } from 'next';

/**
 * O apex evofit.tech serve ESTE site; o painel admin vive em www.evofit.tech.
 * Rotas do painel historicamente distribuídas no apex (links de indicação /r/:code,
 * /login, superfícies públicas) redirecionam pro www pra nunca quebrar.
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
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com",
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
