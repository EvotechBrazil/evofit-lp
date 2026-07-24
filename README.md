# EvoFit — site de divulgação

Landing page e captação de leads do **EvoFit**, a plataforma de gestão para academias com IA
(_"A evolução em sistemas de gerenciamento para academias"_).

Serve o apex **evofit.tech**. O painel administrativo vive em **www.evofit.tech** — rotas do
painel que caem no apex (`/login`, `/member`, links de indicação `/r/:code`, etc.) são
redirecionadas automaticamente em [`next.config.ts`](next.config.ts).

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS 4** (via `@tailwindcss/postcss`)
- **TypeScript**
- **lucide-react** (ícones)
- Deploy na **Vercel**

## Rodando local

Requer **Node.js 20+**.

```sh
npm install
npm run dev      # servidor de desenvolvimento em http://localhost:3000
npm run build    # build de produção
npm run start    # sobe o build de produção
```

## Estrutura

```
app/
  page.tsx                    landing oficial (design "Fusão")
  layout.tsx                  <html>, fontes, metadata base
  api/lead/route.ts           proxy do formulário de lead → webhook n8n
  politica-de-privacidade/    página LGPD
  opengraph-image.tsx         imagem OG gerada
  sitemap.ts · robots.ts      SEO
components/
  fusion/theme.tsx            design system "Fusão": tokens (cores, fontes) + componentes-base
  sections/                   seções da landing (hero, ia-vendas, murph, modules, faq, ...)
  lead/lead-modal.tsx         modal de captação de lead (client)
  brand.tsx · chat-mock.tsx   wordmark e mock de conversa de WhatsApp
content/
  site.ts                     toda a copy do site (textos, chats, módulos, FAQ, stats)
```

## Editando o conteúdo

Praticamente todo o texto do site vive em [`content/site.ts`](content/site.ts) — copy,
conversas da IA, módulos, integrações, FAQ e números. Dá pra iterar o conteúdo sem tocar no
layout. Ajustes de cor/tipografia da marca ficam nos tokens em
[`components/fusion/theme.tsx`](components/fusion/theme.tsx).

## Fluxo de lead

O modal de demonstração envia o lead para [`/api/lead`](app/api/lead/route.ts), que valida os
campos (nome, telefone, e-mail — **sem CPF**), aplica rate limit e repassa ao webhook n8n
com o header `X-Lead-Secret`. Só se o n8n responder 2xx o visitante é levado ao WhatsApp.

### Env (Vercel / `.env.local`)

| Variável | Descrição |
|----------|-----------|
| `LEAD_WEBHOOK_URL` | URL do webhook n8n (produção) |
| `LEAD_WEBHOOK_SECRET` | Secret do header `X-Lead-Secret` (mesmo valor no workflow n8n) |

Sem essas vars a rota responde `503 misconfigured` (fail-closed). Veja [`.env.example`](.env.example).

## Design

O site usa o design system **"Fusão"** (base editorial clara, azul-aço `#152238` como cor de
marca, laranja como acento e seções navy com energia _kinetic_), escolhido entre as prévias
exploradas durante o desenvolvimento.
