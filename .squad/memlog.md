# Memlog — evofit-site

- 2026-08-31 | decisão | Alicia é e permanece a fonte da verdade do catálogo/changelog/roadmap; o site só renderiza. Copiar MODULE_CATALOG em content/site.ts foi o que deixou a landing desatualizada.
- 2026-08-31 | decisão | Sync = pull ISR no Next + ping HMAC de revalidate no write. n8n não entra no caminho crítico (já serve lead; um hop a mais atrasaria a página).
- 2026-08-31 | premissa | Fetch do catálogo é server-side no Vercel (RSC). site.evofit.tech ainda não está no CORS da Alicia — não precisa se o browser nunca chamar a API direto.
- 2026-08-31 | evento | GET /public/product + CMS /plataforma/site + ISR/HMAC no site. Fallback = content/site.ts se Alicia estiver fora.
