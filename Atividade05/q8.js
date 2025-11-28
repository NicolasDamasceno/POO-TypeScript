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
let professor = new Professor("Ely", "Miranda", "PPR22", 3200, "Doutor");
console.log(professor.nomeCompleto());
console.log(`Primeira Parceda do Professor ${professor.titulacao} ${professor.matricula} é R$` + professor.calcularSalarioPrimeiraParcela().toFixed(2));
console.log(`Segunda Parceda do Professor ${professor.titulacao} ${professor.matricula} é R$` + professor.calcularSalarioSegundaParcela().toFixed(2));
//# sourceMappingURL=q8.js.map