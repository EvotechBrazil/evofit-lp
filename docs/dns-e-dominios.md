# DNS e domínios — EvoFit

## Estado desejado (arquitetura do repo)

| Host | App | Projeto |
|------|-----|---------|
| `evofit.tech` (apex) | Landing marketing (`evofit-site`) | Vercel `evofit-site` |
| `www.evofit.tech` | Painel / app operacional | projeto do painel |

Redirects no Next da landing (`next.config.ts`) mandam `/login`, `/member`, `/r/*`, etc. para `https://www.evofit.tech/...`.

## Estado observado na auditoria (2026-07-24)

Apex e www respondiam com redirect para `/login` do **painel**, não da landing.  
Antes de considerar go-live de marketing no apex:

1. No Vercel, o domínio **apex** deve apontar para o projeto `evofit-site`.
2. `www` permanece no painel.
3. Após apontar, validar:
   - `https://evofit.tech/` → landing (não login)
   - `https://evofit.tech/api/lead` → 405/400 em GET, POST funcional
   - `https://evofit.tech/politica-de-privacidade` → 200
   - `https://www.evofit.tech/login` → painel

## Checklist pós-DNS

- [ ] Apex no projeto correto
- [ ] Preview/Production com `LEAD_WEBHOOK_*`
- [ ] `./scripts/security-smoke.sh` com `BASE_URL=https://evofit.tech`
- [ ] Certificado TLS ok (HSTS já configurado no app)
