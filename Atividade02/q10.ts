class Jogador{
    forca: number;
    nivel: number;
    pontos: number;

    constructor(forca:number, nivel:number, pontos:number){
        this.forca = forca;
        this.nivel = nivel;
        this.pontos = pontos;
    }

    calcularAtaque(): number{
        return this.forca * this.nivel
    }
    estarVivo(): boolean{
        return this.pontos > 0
    }

    atacarJogador(inimigo: Jogador) {
        if (this.estarVivo()){
            let dano = this.calcularAtaque();
            inimigo.pontos = inimigo.pontos - dano;
        }
    }
}

let j1 : Jogador = new Jogador(8,1,20);
let j2: Jogador = new Jogador(5,2,23);

j2.atacarJogador(j1);
console.log("j1: está vivo? " + j1.estarVivo() + " - " + j1.pontos)
j1.atacarJogador(j2);
console.log("j2: está vivo? " + j2.estarVivo() + " - " + j2.pontos)
j2.atacarJogador(j1);
console.log("j1: está vivo? " + j1.estarVivo() + " - " + j1.pontos)
