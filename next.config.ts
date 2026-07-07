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

const nextConfig: NextConfig = {
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
