class Equipamento{
    ligado: boolean;

    constructor(ligado: boolean){
        this.ligado = ligado;
    }

    ligar(): void{
        if (this.ligado == false){
            this.ligado = true
        }
    }

    desligar(): void{
        if (this.ligado == true){
            this.ligado = false
        }
    }

    inverter(): void{
        this.ligado = !this.ligado
    }

    estaLigado(): boolean{
        return this.ligado;
    }
}

let ep1 = new Equipamento(false);
ep1.ligar();
console.log("Equipamento ligado? " + ep1.estaLigado());
ep1.desligar();
console.log("Equipamento ligado? " + ep1.estaLigado());
ep1.inverter();
console.log("Equipamento ligado? " + ep1.estaLigado());