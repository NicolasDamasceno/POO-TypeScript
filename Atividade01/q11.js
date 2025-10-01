/*11. Crie agora uma classe chamada Sorteio e crie:
a. Um atributo que é um array de strings inicializado com [ ].
b. Crie um método chamado adicionar que recebe um nome como parâmetro
e o adiciona no array;
c. Crie um método chamado sortear que retorna aleatoriamente um dos
nomes do array.*/
var Sorteio = /** @class */ (function () {
    function Sorteio() {
        this.nomes = [];
    }
    Sorteio.prototype.adicionarNome = function (nome) {
        this.nomes.push(nome);
    };
    ;
    Sorteio.prototype.sotearNome = function () {
        var indice = Math.floor(Math.random() * (this.nomes.length - 1 + 1)) + 1;
        return this.nomes[indice];
    };
    ;
    return Sorteio;
}());
var sorteio = new Sorteio();
sorteio.adicionarNome("Ely");
sorteio.adicionarNome("Ana");
sorteio.adicionarNome("Nicolas");
sorteio.adicionarNome("Guilerme");
console.log(sorteio.sotearNome());
