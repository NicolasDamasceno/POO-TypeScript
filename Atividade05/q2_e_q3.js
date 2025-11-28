"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculadora {
    _operando1;
    _operando2;
    constructor(operando1, operando2) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }
    get operando1() {
        return this._operando1;
    }
    get operando2() {
        return this._operando2;
    }
    soma() {
        return this._operando1 + this._operando2;
    }
}
class CalculadoraCientifica extends Calculadora {
    constructor(operando1, operando2) {
        super(operando1, operando2);
    }
    exponciar() {
        return this.operando1 ** this.operando2;
    }
}
let calculadora = new Calculadora(6, 7);
console.log(calculadora.soma());
let calculadoraCientifica = new CalculadoraCientifica(5, 2);
console.log(calculadoraCientifica.exponciar());
//# sourceMappingURL=q2_e_q3.js.map