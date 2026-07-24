# ROPA — Registro de Operações de Tratamento (site.evofit.tech)

Documento enxuto para o tratamento de dados do **formulário de demonstração** da landing.  
Não cobre o produto SaaS (alunos, catraca, etc.).

| Campo | Conteúdo |
|-------|----------|
| **Controladora** | Evotech System |
| **Operação** | Captação de lead comercial via formulário do site |
| **Finalidade** | Contato comercial e agendamento de demonstração do EvoFit |
| **Base legal** | Art. 7º, V, LGPD (procedimentos preliminares a pedido do titular) |
| **Dados** | Nome, telefone/WhatsApp, e-mail; origem da página; timestamp |
| **Dados sensíveis** | Não |
| **Titulares** | Interessados em demonstração (donos/gestores de academias) |
| **Fonte** | Formulário web (site.evofit.tech) |
| **Compartilhamento** | Automação interna n8n → Postgres Evotech; WhatsApp/Meta (conversa); Vercel (hospedagem/analytics agregada) |
| **Transferência internacional** | Infra Vercel / Meta conforme políticas dos fornecedores |
| **Retenção** | Até 12 meses após último contato sem conversão, salvo obrigação legal |
| **Segurança** | HTTPS; secret no webhook; rate limit; honeypot; acesso restrito n8n/DB |
| **Direitos do titular** | `privacidade@evofit.tech` / WhatsApp comercial |
| **Encarregado (DPO)** | A nomear formalmente — contato operacional: privacidade@evofit.tech |
| **Sistemas** | Next.js `/api/lead`, n8n workflow `Lead — Formulário EvoFit → Postgres`, tabela `leads` |
| **Atualização** | 2026-07-24 |

## LIA (legítimo interesse) — Analytics

| Campo | Conteúdo |
|-------|----------|
| **Operação** | Vercel Analytics (métricas agregadas de navegação) |
| **Finalidade** | Melhorar performance e conteúdo do site |
| **Base** | Art. 7º, IX (legítimo interesse) |
| **Minimização** | Sem cookies de ads; sem perfilagem publicitária |
| **Opt-out** | Contato em privacidade@evofit.tech |
