# Status final — auditoria segurança & LGPD

**Status: FINALIZADA E ENCERRADA** · 2026-07-24  
**Escopo:** landing `evofit-site` + pipeline lead  
**URL canônica:** https://site.evofit.tech  
**Encerramento confirmado pelo PO:** domínio permanente `site.evofit.tech`; sem pendência de DNS apex.

Não reabrir esta auditoria como backlog ativo. Residuais opcionais (mailbox privacidade@, credential n8n Header Auth, upgrade Next) são melhoria contínua, não gate.

---

## DoD

| ID | Critério | Status |
|----|----------|--------|
| D1 | Webhook n8n sem POST anônimo | ✅ |
| D2 | Secret só em env (site) | ✅ |
| D3 | Rate limit + Origin | ✅ |
| D4 | Fail-closed (WhatsApp só com sucesso) | ✅ |
| D5 | Política + termos + canônicos em site.evofit.tech | ✅ |
| D6 | Security headers | ✅ |
| D7 | CPF off | ✅ |
| D8 | npm audit high | ⚠️ aceito (`risk-accepted-deps.md`) |

---

## Entregue

- Pipeline lead autenticado (`X-Lead-Secret`, path `evofit-lead-v1`)
- `/api/lead` endurecida
- LGPD: política, termos, ROPA
- Headers + CSP
- Deploy: https://site.evofit.tech

## Fora de escopo (não relembrar como “pendência de auditoria”)

- Apontar apex `evofit.tech` para a landing  
- Turnstile, DPO formal, credential n8n no lugar do IF  
- Upgrade npm forçado (quebra Next)

Smoke: `BASE_URL=https://site.evofit.tech npm run smoke:security`
