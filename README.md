# 📘 POO com TypeScript

Repositório com as atividades desenvolvidas durante a disciplina de **Programação Orientada a Objetos**, utilizando **TypeScript** como linguagem principal.

---

## 🗂️ Estrutura do Repositório

```
POO-TypeScript/
├── Atividade01/    # Fundamentos de TypeScript
├── Atividade02/    # Introdução a Classes e Objetos
├── Atividade03/    # Sistema Bancário — Classes e Associações
├── Atividade04/    # Encapsulamento com Getters e Setters
└── Atividade05/    # Herança, Polimorfismo e Aplicação Interativa
```

---

## 📂 Atividades

### Atividade 01 — Fundamentos de TypeScript

Introdução à linguagem TypeScript com foco em funções, tipos, arrays, objetos e classes básicas. Cada questão é um arquivo `.ts` independente compilado para `.js`.

| Arquivo | Conteúdo |
|--------|----------|
| `q1.ts` | Função que verifica se um número é par ou ímpar |
| `q2.ts` | Manipulação de strings e tipos primitivos |
| `q3.ts` | Trabalho com arrays tipados |
| `q4.ts` | Uso de objetos literais com tipos |
| `q5.ts` | Função com *rest parameters* (`...args`) |
| `q6.ts` | Tipagem de retorno explícita |
| `q7.ts` | Funções com parâmetros opcionais |
| `q8.ts` | Estruturas condicionais com tipagem |
| `q9.ts` | Iteração sobre coleções |
| `q10.ts` | Funções com múltiplos tipos de retorno |
| `q11.ts` | Arrays e métodos de iteração |
| `q12.ts` | Classe `TradutorEmojis` com dicionário e método `traduzir()` usando `split`, `map` e `join` |

---

### Atividade 02 — Introdução a Classes e Objetos

Modelagem de classes com atributos, construtores e métodos. Inclui um arquivo `README.md` com respostas a questões teóricas sobre orientação a objetos.

| Arquivo | Conteúdo |
|--------|----------|
| `q3.ts` | Criação e uso de classe simples com construtor |
| `q4.ts` | Instâncias múltiplas e atributos de instância |
| `q5.ts` | Classe `Conta` com `depositar`, `sacar`, `transferir` e análise de referências em memória |
| `q6.ts` | Classe `Triangulo` com métodos `ehTriangulo`, `ehEquilatero`, `ehIsoceles` e `ehEscaleno` |
| `q7.ts` | Modelagem orientada a objetos com lógica de negócio |
| `q10.ts` | Exercício avançado de modelagem de classes |
| `README.md` | Respostas discursivas sobre fundamentos de POO |

---

### Atividade 03 — Sistema Bancário com Associações

Implementação de um sistema bancário completo usando três classes associadas: `Banco`, `Cliente` e `Conta`.

**Classes implementadas:**

- `Conta` — saldo, número, operações de saque, depósito e transferência
- `Cliente` — CPF, nome, lista de contas vinculadas
- `Banco` — gerenciamento de clientes e contas, com métodos:
  - `adicionarCliente()` / `adicionarConta()`
  - `consultarCliente()` / `consultarConta()`
  - `associarClienteConta()` — vincula conta a cliente

---

### Atividade 04 — Encapsulamento: Getters e Setters

Refatoração do sistema bancário da Atividade 03 aplicando os princípios de **encapsulamento**, com todos os atributos privados acessados por `get` e `set`.

**Conceitos abordados:**
- Modificadores de acesso (`private`)
- Propriedades com `get` / `set`
- Validações de dados nos *setters*
- Atributo `_dataDeAbertura: Date` automático na criação da conta

Além do `banco.ts`, inclui:

| Arquivo | Conteúdo |
|--------|----------|
| `q1.ts` | Prática de encapsulamento com classe simples |
| `q2.ts` | Validações em setters e imutabilidade |

---

### Atividade 05 — Herança, Polimorfismo e Aplicação Interativa

Atividade mais completa do projeto, abordando **herança**, **polimorfismo** e uma **aplicação de terminal interativa** com menu.

**Hierarquias de classes:**

- `Veiculo` → `Carro` → `CarroEletrico` *(q1.ts)*
- `Calculadora` → `CalculadoraCientifica` *(q2_e_q3.ts)*
- `Empregado` → `Diarista` → `Horista` com override de `calcularSalario()` *(q5.ts)*
- `Pessoa` → `Funcionario` com cálculo de parcelas de salário *(q6.ts, q7.ts, q8.ts, q9.ts)*
- `Conta` → `Poupanca` (com `renderJuros()`) e `ContaImposto` (com imposto no saque) *(banco.ts)*

**Aplicação interativa (`app.ts`):**

Menu de terminal completo com as seguintes operações:

| Código | Operação |
|--------|----------|
| 01–06 | Inserir, consultar, sacar, depositar, excluir e transferir entre contas |
| 07 | Totalizações do banco |
| 08 | Realizar ordem bancária |
| 09 | Transferir titularidade de conta |
| 10 | Listar contas sem clientes |
| 11 | Render de juros (poupança) |
| 20–24 | Operações de clientes: inserir, consultar, associar, totalizar saldo e listar contas |

---

## 🛠️ Tecnologias Utilizadas

- [TypeScript](https://www.typescriptlang.org/) — linguagem principal
- [Node.js](https://nodejs.org/) — execução dos arquivos compilados
- [prompt-sync](https://www.npmjs.com/package/prompt-sync) — entrada de dados no terminal (Atividade 05)

---

## ▶️ Como Executar

**Pré-requisitos:** Node.js e TypeScript instalados globalmente.

```bash
# Instalar TypeScript globalmente (se necessário)
npm install -g typescript

# Compilar um arquivo
tsc caminho/para/arquivo.ts

# Executar o arquivo compilado
node caminho/para/arquivo.js
```

Para a **Atividade 05** (aplicação interativa):

```bash
cd Atividade05

# Instalar dependências
npm install prompt-sync

# Compilar
tsc

# Executar
node app.js
```

---

## 📚 Conceitos Abordados

- ✅ Tipos primitivos e inferência de tipos
- ✅ Funções, parâmetros opcionais e *rest parameters*
- ✅ Classes, construtores e métodos
- ✅ Encapsulamento com `private`, `get` e `set`
- ✅ Associação entre classes
- ✅ Herança com `extends` e `super`
- ✅ Polimorfismo e sobrescrita de métodos (`override`)
- ✅ Aplicação interativa via terminal

---

> Disciplina: Programação Orientada a Objetos  
> Linguagem: TypeScript
