/*12. Crie uma classe chamada TradutorEmojis que possua um atributo chamado
dicionario, armazenando palavras-chave e seus respectivos emojis, conforme o
exemplo abaixo:

class TradutorEmojis {

dicionario: { [palavra: string]: string } = {
"amor": " ",
"futebol": " ",
"cachorro": " ",
//....
};

Crie um método chamado traduzir que receba uma frase e retorne a frase usando
emojis quando houver correspondência. Pesquise os métodos split, map e join para
fazer o que se pede.
Exemplo: “O amor do brasileiro é o futebol” → “O do brasileiro é o ”,*/
var TradutorEmojis = /** @class */ (function () {
    function TradutorEmojis() {
        this.dicionario = {
            "ama": "❤️",
            "futebol": "⚽",
            "cachorro": "🐕",
        };
    }
    TradutorEmojis.prototype.traduzir = function (frase) {
        var _this = this;
        var palavras = frase.split(' ');
        var traducao = palavras.map(function (item) {
            if (_this.dicionario[item]) {
                item = _this.dicionario[item];
            }
            return item;
        });
        var resultado = traducao.join(' ');
        return resultado;
    };
    return TradutorEmojis;
}());
var traducao = new TradutorEmojis();
console.log(traducao.traduzir("O brasileiro ama cachorro caramelo!"));
