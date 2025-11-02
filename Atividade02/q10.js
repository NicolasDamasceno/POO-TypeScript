var Jogador = /** @class */ (function () {
    function Jogador(forca, nivel, pontos) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos = pontos;
    }
    Jogador.prototype.calcularAtaque = function () {
        return this.forca * this.nivel;
    };
    Jogador.prototype.estarVivo = function () {
        return this.pontos > 0;
    };
    Jogador.prototype.atacarJogador = function (inimigo) {
        if (this.estarVivo()) {
            var dano = this.calcularAtaque();
            inimigo.pontos = inimigo.pontos - dano;
        }
    };
    return Jogador;
}());
var j1 = new Jogador(8, 1, 20);
var j2 = new Jogador(5, 2, 23);
j2.atacarJogador(j1);
console.log("j1: está vivo? " + j1.estarVivo() + " - " + j1.pontos);
j1.atacarJogador(j2);
console.log("j2: está vivo? " + j2.estarVivo() + " - " + j2.pontos);
j2.atacarJogador(j1);
console.log("j1: está vivo? " + j1.estarVivo() + " - " + j1.pontos);
j2.atacarJogador(j1);
j2.atacarJogador(j1);
console.log("j1: está vivo? " + j1.estarVivo() + " - " + j1.pontos);
