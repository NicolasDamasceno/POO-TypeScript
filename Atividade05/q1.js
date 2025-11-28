"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
    _placa;
    _ano;
    constructor(placa, ano) {
        this._placa = placa;
        this._ano = ano;
    }
    get placa() {
        return this._placa;
    }
    get ano() {
        return this._ano;
    }
}
class Carro extends Veiculo {
    _modelo;
    constructor(placa, ano, modelo) {
        super(placa, ano);
        this._modelo = modelo;
    }
    get modelo() {
        return this._modelo;
    }
}
class CarroEletrico extends Carro {
    _autonomiaBateria;
    constructor(placa, ano, modelo, autonomiaBateria) {
        super(placa, ano, modelo);
        this._autonomiaBateria = autonomiaBateria;
    }
    get autonomiaBateria() {
        return this._autonomiaBateria;
    }
}
let veiculo = new Veiculo("AAA-333", 2005);
console.log(veiculo.ano);
console.log(veiculo.placa);
let carro = new Carro("LLC-111", 1998, "Corsa");
console.log(carro.placa);
console.log(carro.ano);
console.log(carro.modelo);
let carroEletrico = new CarroEletrico("RAL-222", 2023, "Mini Dolphin", 350);
console.log(carroEletrico.placa);
console.log(carroEletrico.placa);
console.log(carroEletrico.modelo);
console.log(carroEletrico.autonomiaBateria);
//# sourceMappingURL=q1.js.map