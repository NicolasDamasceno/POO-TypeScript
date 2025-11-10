var Calculadora = /** @class */ (function () {
    function Calculadora(operando1, operando2) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }
    Object.defineProperty(Calculadora.prototype, "operando1", {
        get: function () {
            return this._operando1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calculadora.prototype, "operando2", {
        get: function () {
            return this._operando2;
        },
        enumerable: false,
        configurable: true
    });
    Calculadora.prototype.somar = function () {
        return this._operando1 + this._operando2;
    };
    Calculadora.prototype.subtrair = function () {
        return this.operando1 - this._operando2;
    };
    return Calculadora;
}());
var calculadora = new Calculadora(2, 3);
console.log(calculadora.operando1);
console.log(calculadora.operando2);
console.log(calculadora.somar());
console.log(calculadora.subtrair());
