class Veiculo {
    private _placa: string;
    private _ano: number;

    constructor(placa: string, ano:number){
        this._placa = placa;
        this._ano = ano;
    }
    get placa():string{
        return this._placa;
    }
    get ano():number{
        return this._ano;
    }
}

class Carro extends Veiculo{
    private _modelo:string;

    constructor(placa:string, ano:number, modelo:string){
        super(placa, ano);
        this._modelo = modelo;
    }
    get modelo():string{
        return this._modelo;
    }
}

class CarroEletrico extends Carro{
    private _autonomiaBateria: number;
    constructor(placa:string, ano:number, modelo:string, autonomiaBateria:number){
        super(placa, ano, modelo);
        this._autonomiaBateria = autonomiaBateria;
    }
    get autonomiaBateria():number{
        return this._autonomiaBateria;
    }
}
let veiculo:Veiculo = new Veiculo("AAA-333",2005);
console.log(veiculo.ano);
console.log(veiculo.placa);

let carro: Carro = new Carro("LLC-111", 1998, "Corsa");
console.log(carro.placa);
console.log(carro.ano)
console.log(carro.modelo);

let carroEletrico: CarroEletrico = new CarroEletrico("RAL-222", 2023, "Mini Dolphin", 350);
console.log(carroEletrico.placa);
console.log(carroEletrico.placa);
console.log(carroEletrico.modelo);
console.log(carroEletrico.autonomiaBateria);