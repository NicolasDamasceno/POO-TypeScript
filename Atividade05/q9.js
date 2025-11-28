"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    _nome;
    _sobrenome;
    constructor(nome, sobrenome) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    get nome() {
        return this._nome;
    }
    get sobrenome() {
        return this._sobrenome;
    }
    nomeCompleto() {
        return `${this._nome} ${this._sobrenome}`;
    }
}
class Funcionario extends Pessoa {
    _matricula;
    _salario;
    constructor(nome, sobrenome, matricula, salario) {
        super(nome, sobrenome);
        this._matricula = matricula;
        this._salario = salario;
    }
    get matricula() {
        return this._matricula;
    }
    get salario() {
        return this._salario;
    }
    set salario(valorSalario) {
        if (valorSalario < 0) {
            console.log("O salário não pode ser negativo!");
        }
        else {
            this._salario = valorSalario;
        }
    }
    calcularSalarioPrimeiraParcela() {
        return (this._salario * 0.6);
    }
    calcularSalarioSegundaParcela() {
        return (this._salario * 0.4);
    }
}
class Professor extends Funcionario {
    _titulacao;
    constructor(nome, sobrenome, matricula, salario, titulacao) {
        super(nome, sobrenome, matricula, salario);
        this._titulacao = titulacao;
    }
    get titulacao() {
        return this._titulacao;
    }
    calcularSalarioPrimeiraParcela() {
        return this.salario;
    }
    calcularSalarioSegundaParcela() {
        return 0;
    }
}
class FolhaPagamento {
    _pessoas;
    constructor(pessoas) {
        this._pessoas = pessoas;
    }
    calcularPagamento() {
        let total = 0;
        for (let pessoa of this._pessoas) {
            if (pessoa instanceof Funcionario) {
                total += pessoa.salario;
            }
        }
        return total;
    }
}
let pessoa = new Pessoa('Guilherme', 'Alves');
console.log(pessoa.nomeCompleto());
let funcionario = new Funcionario("Nicolas", "Damasceno", "TADS00", 2700);
console.log(funcionario.nomeCompleto());
console.log(`Primeira Parceda do Funcionário ${funcionario.matricula} é R$` + funcionario.calcularSalarioPrimeiraParcela().toFixed(2));
console.log(`Segunda Parceda do Funcionário ${funcionario.matricula} é R$` + funcionario.calcularSalarioSegundaParcela().toFixed(2));
let professor = new Professor("Ely", "Miranda", "PPR22", 3200, "Doutor");
console.log(professor.nomeCompleto());
console.log(`Primeira Parceda do Professor ${professor.titulacao} ${professor.matricula} é R$` + professor.calcularSalarioPrimeiraParcela().toFixed(2));
console.log(`Segunda Parceda do Professor ${professor.titulacao} ${professor.matricula} é R$` + professor.calcularSalarioSegundaParcela().toFixed(2));
let arrayPessoasAleatorias = [pessoa, funcionario, professor];
let folha = new FolhaPagamento(arrayPessoasAleatorias);
console.log(`Pessoas na folha: ${arrayPessoasAleatorias.length}`);
console.log(`Total de pagamentos: R$ ${folha.calcularPagamento().toFixed(2)}`);
//# sourceMappingURL=q9.js.map