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
let funcionario = new Funcionario("Nicolas", "Damasceno", "TADS00", 2700);
console.log(funcionario.nomeCompleto());
console.log(`Primeira Parceda do Funcionário ${funcionario.matricula} é R$` + funcionario.calcularSalarioPrimeiraParcela().toFixed(2));
console.log(`Segunda Parceda do Funcionário ${funcionario.matricula} é R$` + funcionario.calcularSalarioSegundaParcela().toFixed(2));
funcionario.salario = -800;
console.log(funcionario.salario);
//# sourceMappingURL=q7.js.map