# Status final — auditoria segurança & LGPD

**Data de fechamento:** 2026-07-24  
**Escopo:** landing `evofit-site` + pipeline lead (`/api/lead` → n8n → Postgres)

---

## DoD (Definition of Done)

| ID | Critério | Status | Prova |
|----|----------|--------|-------|
| D1 | Webhook n8n não aceita POST anônimo | ✅ | `curl` sem secret → 401 |
| D2 | Secret só em env (Next/Vercel); sem secret no git do site | ✅ | `.env*` gitignored; env Vercel encrypted |
| D3 | Rate limit + Origin em `/api/lead` | ✅ | 429 / 403 em smoke |
| D4 | WhatsApp só após sucesso real | ✅ | `lead-modal` exige `res.ok && data.ok` |
| D5 | Política honesta (Analytics, retenção, canal) | ✅ | `/politica-de-privacidade` |
| D6 | Security headers | ✅ | HSTS, CSP, nosniff, frame DENY |
| D7 | CPF off na landing | ✅ | modal sem documento |
| D8 | npm audit high | ⚠️ aceito | ver `risk-accepted-deps.md` |

---

## Achados originais → resolução

| Achado | Severidade | Resolução |
|--------|------------|-----------|
| Webhook n8n aberto | Crítica | Secret `X-Lead-Secret` + 401 |
| Sem rate limit | Crítica | 10 req/min/IP em memória |
| Fail-open `ok: true` | Alta | 502 se n8n falha; client não abre WA |
| CPF sem minimização | Alta | Removido do formulário |
| Política vs Analytics / noreply | Alta | Texto atualizado + `privacidade@` |
| Sem security headers | Alta | `next.config.ts` |
| Tabela `leads` inexistente | Alta | DDL no n8n + upsert |
| Origin só apex (site.evofit.tech 403) | Alta | Allowlist + `*.evofit.tech` |
| Payload apagado pelo nó DDL | Alta | `$('Normalizar Lead')` no upsert |
| npm CVEs next/postcss/sharp | Alta | Risk accepted (force downgrade quebra) |
| Secret no canvas n8n (IF) | Média | Residual — ver abaixo |
| DNS apex no painel | Média | Landing em `site.evofit.tech`; doc DNS |
| Cookie banner formal | Baixa | Analytics declarado; sem ads third-party |
| Turnstile | Baixa | Honeypot + rate limit (80/20) |
| DPO formal nomeado | Org | Residual legal |

---

## Residuais (não bloqueiam operação)

1. **Secret visível no nó IF do n8n** — mover para credential `httpHeaderAuth` no webhook (UI n8n) quando possível.  
2. **Mailbox `privacidade@evofit.tech`** — criar alias real no provedor de e-mail.  
3. **DNS apex `evofit.tech` → landing** — quando quiser unificar domínio (hoje: `site.evofit.tech`).  
4. **Rate limit multi-instância** — Map em memória por isolate; em abuso real usar Upstash/Vercel Firewall.  
5. **npm audit** — aguardar Next/postcss patch sem `--force`.

---

## Smoke de regressão

```bash
source .env.local
BASE_URL=https://site.evofit.tech npm run smoke:security
```

---

## Deploy de referência

- App: https://site.evofit.tech  
- Workflow n8n: `0PgT50KMaja9o5RP` (Published)  
- Envs Vercel: `LEAD_WEBHOOK_URL`, `LEAD_WEBHOOK_SECRET` (prod/preview/dev)
