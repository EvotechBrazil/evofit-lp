#!/usr/bin/env bash
# Smoke de segurança do pipeline de lead (n8n + opcionalmente /api/lead local/prod).
# Uso:
#   ./scripts/security-smoke.sh
#   BASE_URL=https://evofit.tech LEAD_WEBHOOK_SECRET=... ./scripts/security-smoke.sh
set -euo pipefail

WEBHOOK_URL="${LEAD_WEBHOOK_URL:-https://n8n.evotechsystem.cloud/webhook/formulario}"
SECRET="${LEAD_WEBHOOK_SECRET:-}"
BASE_URL="${BASE_URL:-}"

red() { printf '\033[31m%s\033[0m\n' "$*"; }
green() { printf '\033[32m%s\033[0m\n' "$*"; }
info() { printf '• %s\n' "$*"; }

fail=0

echo "=== n8n webhook ==="
code_no=$(curl -s -o /tmp/smoke_no.json -w '%{http_code}' -X POST "$WEBHOOK_URL" \
  -H 'Content-Type: application/json' \
  -d '{"nome":"smoke","telefone":"11999999999","email":"smoke-noauth@example.com"}' || true)
if [[ "$code_no" == "401" ]]; then
  green "sem secret → $code_no (ok)"
else
  red "sem secret → $code_no (esperado 401)"; fail=1
fi

if [[ -n "$SECRET" ]]; then
  code_ok=$(curl -s -o /tmp/smoke_ok.json -w '%{http_code}' -X POST "$WEBHOOK_URL" \
    -H 'Content-Type: application/json' \
    -H "X-Lead-Secret: $SECRET" \
    -d '{"nome":"Smoke Script","telefone":"43999744359","email":"smoke-script@example.com","origem":"security-smoke"}' || true)
  if [[ "$code_ok" == "200" ]]; then
    green "com secret → $code_ok (ok)"
  else
    red "com secret → $code_ok (esperado 200)"; fail=1
    cat /tmp/smoke_ok.json 2>/dev/null || true
  fi
else
  info "LEAD_WEBHOOK_SECRET não setado — pulando teste positivo do n8n"
fi

if [[ -n "$BASE_URL" ]]; then
  echo "=== API $BASE_URL/api/lead ==="
  code_origin=$(curl -s -o /tmp/smoke_origin.json -w '%{http_code}' -X POST "$BASE_URL/api/lead" \
    -H 'Content-Type: application/json' \
    -H 'Origin: https://evil.example' \
    -d '{"nome":"X","telefone":"11999999999","email":"a@b.com"}' || true)
  if [[ "$code_origin" == "403" ]]; then
    green "origin bloqueada → $code_origin (ok)"
  else
    red "origin bloqueada → $code_origin (esperado 403)"; fail=1
  fi

  code_bad=$(curl -s -o /tmp/smoke_bad.json -w '%{http_code}' -X POST "$BASE_URL/api/lead" \
    -H 'Content-Type: application/json' \
    -d '{"nome":"X","telefone":"12","email":"a@b.com"}' || true)
  if [[ "$code_bad" == "400" ]]; then
    green "campos inválidos → $code_bad (ok)"
  else
    red "campos inválidos → $code_bad (esperado 400)"; fail=1
  fi
fi

echo "=== headers (opcional) ==="
if [[ -n "$BASE_URL" ]]; then
  hdrs=$(curl -sI "$BASE_URL/" || true)
  for h in 'strict-transport-security' 'x-content-type-options' 'content-security-policy'; do
    if echo "$hdrs" | grep -qi "^$h:"; then
      green "header $h presente"
    else
      red "header $h ausente"; fail=1
    fi
  done
fi

if [[ "$fail" -ne 0 ]]; then
  red "SMOKE FALHOU"
  exit 1
fi
green "SMOKE OK"
