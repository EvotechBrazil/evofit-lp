# Risk accepted — dependências (npm audit)

**Data:** 2026-07-24  
**Projeto:** evofit-site  
**Decisão:** aceitar temporariamente 3 findings *high* reportados via `next` → `postcss` / `sharp`.

## Por quê

`npm audit fix --force` propõe **downgrade** para `next@9.3.3`, o que **quebra** o App Router e a stack atual (Next 16).

## Riscos reais neste app

| Pacote | Exposição neste site |
|--------|----------------------|
| postcss (via next) | Pipeline de build/CSS; não processa CSS de usuários |
| sharp (via next/image/OG) | Uso controlado (OG estático); sem upload arbitrário de usuários no site de marketing |

## Mitigações

- Sem upload de CSS/imagem de terceiros não confiáveis  
- Headers CSP + HSTS  
- Superfície pública limitada (landing + 1 API de lead)

## Revisão

Reavaliar a cada upgrade de `next` (`npm outdated next`). Meta: `npm audit` sem high/critical sem `--force`.
