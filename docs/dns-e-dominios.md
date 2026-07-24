# Domínios — EvoFit

## Decisão (final)

| Host | Função |
|------|--------|
| **`site.evofit.tech`** | Landing marketing (`evofit-site`) — **canônico e permanente** |
| **`www.evofit.tech`** | Painel / app operacional |

**Não há pendência de DNS apex.** O acesso à landing é e permanece `https://site.evofit.tech`.

## Canônicos no código

Centralizados em [`lib/site.ts`](../lib/site.ts) (`SITE_URL` / `SITE_HOST`):

- `metadataBase`, Open Graph, JSON-LD  
- `/politica-de-privacidade` e `/termos-de-uso`  
- `sitemap.xml` e `robots.txt`

## Redirects de painel

Rotas `/login`, `/member`, `/r/*`, etc. neste app redirecionam para `https://www.evofit.tech/...` (`next.config.ts`).
