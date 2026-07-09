/**
 * Validação e máscara de CPF/CNPJ — compartilhado pelo formulário (client)
 * e pelo /api/lead (server). O `documento` trafega e é gravado só com dígitos;
 * a máscara é apenas de exibição.
 */

export const onlyDigits = (v: string) => v.replace(/\D/g, '');

export type TipoDocumento = 'cpf' | 'cnpj';

export function isValidCPF(value: string): boolean {
  const d = onlyDigits(value);
  if (d.length !== 11 || /^(\d)\1{10}$/.test(d)) return false;
  const dv = (len: number) => {
    let sum = 0;
    for (let i = 0; i < len; i++) sum += Number(d[i]) * (len + 1 - i);
    const r = (sum * 10) % 11;
    return r === 10 ? 0 : r;
  };
  return dv(9) === Number(d[9]) && dv(10) === Number(d[10]);
}

export function isValidCNPJ(value: string): boolean {
  const d = onlyDigits(value);
  if (d.length !== 14 || /^(\d)\1{13}$/.test(d)) return false;
  const dv = (len: number) => {
    const weights =
      len === 12
        ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let sum = 0;
    for (let i = 0; i < len; i++) sum += Number(d[i]) * weights[i];
    const r = sum % 11;
    return r < 2 ? 0 : 11 - r;
  };
  return dv(12) === Number(d[12]) && dv(13) === Number(d[13]);
}

/** Valida CPF (11 díg.) ou CNPJ (14 díg.); retorna o tipo quando válido. */
export function validateDocumento(value: string): { valid: boolean; tipo: TipoDocumento | null } {
  const d = onlyDigits(value);
  if (d.length === 11) return { valid: isValidCPF(d), tipo: 'cpf' };
  if (d.length === 14) return { valid: isValidCNPJ(d), tipo: 'cnpj' };
  return { valid: false, tipo: null };
}

/** Máscara progressiva: CPF 000.000.000-00 (até 11 díg.) ou CNPJ 00.000.000/0000-00. */
export function formatDocumento(value: string): string {
  const d = onlyDigits(value).slice(0, 14);
  if (d.length <= 11) {
    let out = d.slice(0, 3);
    if (d.length > 3) out += '.' + d.slice(3, 6);
    if (d.length > 6) out += '.' + d.slice(6, 9);
    if (d.length > 9) out += '-' + d.slice(9, 11);
    return out;
  }
  let out = d.slice(0, 2) + '.' + d.slice(2, 5) + '.' + d.slice(5, 8) + '/' + d.slice(8, 12);
  if (d.length > 12) out += '-' + d.slice(12, 14);
  return out;
}
