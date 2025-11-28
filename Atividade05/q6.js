"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    _nome;
    _sobrenome;
    constructor(nome, sobrenome) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    nomeCompleto() {
        return `${this._nome} ${this._sobrenome}`;
    }
}
let pessoa = new Pessoa('Nicolas', 'Damasceno');
console.log(pessoa.nomeCompleto());
//# sourceMappingURL=q6.js.map