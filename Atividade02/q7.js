var Equipamento = /** @class */ (function () {
    function Equipamento(ligado) {
        this.ligado = ligado;
    }
    Equipamento.prototype.ligar = function () {
        if (this.ligado == false) {
            this.ligado = true;
        }
    };
    Equipamento.prototype.desligar = function () {
        if (this.ligado == true) {
            this.ligado = false;
        }
    };
    Equipamento.prototype.inverter = function () {
        this.ligado = !this.ligado;
    };
    Equipamento.prototype.estaLigado = function () {
        return this.ligado;
    };
    return Equipamento;
}());
var ep1 = new Equipamento(false);
ep1.ligar();
console.log("Equipamento ligado? " + ep1.estaLigado());
ep1.desligar();
console.log("Equipamento ligado? " + ep1.estaLigado());
ep1.inverter();
console.log("Equipamento ligado? " + ep1.estaLigado());
