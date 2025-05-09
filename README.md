# 📦 cnpjx-utils

Validação e geração de CNPJ com suporte a caracteres alfanuméricos.  
Ideal para aplicações que lidam com CNPJs customizados em cenários internos, sandbox ou testes.

---

## ✨ Recursos

- ✅ Validação de CNPJ com ou sem letras
- 🔁 Geração de CNPJ aleatório alfanumérico
- 🔒 Compatível com aplicações Node.js ou front-end
- 💡 Desenvolvido em TypeScript

---

## 📦 Instalação

Disponível no NPM: [cnpjx-utils](https://www.npmjs.com/package/cnpjx-utils)

```bash
npm install cnpjx-utils
```

[![npm version](https://img.shields.io/npm/v/cnpjx-utils.svg)](https://www.npmjs.com/package/cnpjx-utils)
[![npm downloads](https://img.shields.io/npm/dm/cnpjx-utils.svg)](https://www.npmjs.com/package/cnpjx-utils)

Validação e geração de CNPJ com suporte a caracteres alfanuméricos.


---

## 🚀 Como Usar

### Validação de CNPJ

```ts
import { validaCNPJ } from 'cnpjx-utils';

const valido = validaCNPJ('12.345.6A8/0001-9Z'); // true ou false
```

### Geração de CNPJ

```ts
import { gerarCNPJ } from 'cnpjx-utils';

const cnpj = gerarCNPJ(); // gera numérico
console.log(cnpj); // Ex:  45.932.381/0001-62

const cnpjx = gerarCNPJ(true); // gera alfanumérico
console.log(cnpj); // Ex:  1F.83B.A9C/0001-73
```

---

## 🧠 Lógica

A validação é feita com base nos dígitos verificadores e formato do CNPJ.
Caracteres alfanuméricos fora da base numérica são tratados como 0 na soma para manter compatibilidade.

---

## 🛠️ Desenvolvendo Localmente

```bash
git clone https://github.com/seu-usuario/cnpjx-utils.git
cd cnpjx-utils
npm install
npm run build
```

---

## ✅ Testado em:

- 🟢 Node.js **16+**
- 🌐 Browsers modernos (via bundlers)
- ⚛️ Angular / React / Vue apps

---

## 🧑‍💻 Autor

Michel Deziderio
Desenvolvedor front-end & back-end com paixão por ferramentas simples e eficientes.
📍 São Paulo, Brasil