const multiplicadores = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

function multiplicarSomarDividir(cnpj: string, length: number, shift: number): number {
  let soma = 0;
  for (let i = 0; i < length; i++) {
    const char = cnpj.charAt(i);
    const valor = isNaN(parseInt(char, 10)) ? 0 : parseInt(char, 10);
    soma += valor * multiplicadores[i + shift];
  }
  return soma % 11;
}

export function validaCNPJ(cnpj: string): boolean {
  if (!cnpj) return false;

  const cnpjLimpo = cnpj.replace(/[^\dA-Z]/gi, '');

  if (!/^[0-9A-Z]{12}[0-9]{2}$/.test(cnpjLimpo)) return false;

  let base = cnpjLimpo.slice(0, 12);

  const soma1 = multiplicarSomarDividir(base, 12, 1);
  const dv1 = soma1 < 2 ? 0 : 11 - soma1;
  base += dv1;

  const soma2 = multiplicarSomarDividir(base, 13, 0);
  const dv2 = soma2 < 2 ? 0 : 11 - soma2;

  return (
    dv1 === parseInt(cnpjLimpo.charAt(12), 10) &&
    dv2 === parseInt(cnpjLimpo.charAt(13), 10)
  );
}


export function gerarCNPJ(alfanumerico = false): string {
  const caracteres = alfanumerico ? "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "0123456789";
  let cnpjBase = "";

  for (let i = 0; i < 12; i++) {
    cnpjBase += caracteres[Math.floor(Math.random() * caracteres.length)];
  }

  const cnpjNumerico = cnpjBase.replace(/[^0-9]/g, "0");

  const soma1 = multiplicarSomarDividir(cnpjNumerico, 12, 1);
  const dv1 = soma1 < 2 ? 0 : 11 - soma1;
  cnpjBase += dv1;

  const soma2 = multiplicarSomarDividir(cnpjNumerico + dv1, 13, 0);
  const dv2 = soma2 < 2 ? 0 : 11 - soma2;
  cnpjBase += dv2;

  return `${cnpjBase.substring(0, 2)}.${cnpjBase.substring(2, 5)}.${cnpjBase.substring(5, 8)}/${cnpjBase.substring(8, 12)}-${cnpjBase.substring(12, 14)}`;
}
