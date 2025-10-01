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

class TradutorEmojis {
    dicionario: {[palavras:string]: string} = {
        "ama": "❤️",
        "futebol": "⚽",
        "cachorro": "🐕",
    };

    traduzir(frase: string): string { 
        let palavras: string[] = frase.split(' ');
        let traducao = palavras.map((item) => {
            if (this.dicionario[item]){
                item = this.dicionario[item];
            }
            return item;
        });
        let resultado: string = traducao.join(' ');
        return resultado;
    }
}

let traducao: TradutorEmojis = new TradutorEmojis();
console.log(traducao.traduzir("O brasileiro ama cachorro caramelo!"));
