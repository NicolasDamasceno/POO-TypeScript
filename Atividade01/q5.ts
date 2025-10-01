/*5. Crie uma função exibir receba como parâmetro um “rest parameter” representando
strings. A função deve exibir no log cada um dos elementos do “rest parameter”.
Chame a função usando diferentes quantidade de parâmetros conforme abaixo:
exibir(“a”, “b”);
exibir(“a”, “b”, “c”);
exibir(“a”, “b”, “c”, “d”);*/

function exibirLetras(...letras: string[]): void {
    letras.forEach((item, index) => console.log(item));
};

exibirLetras("a","b");
exibirLetras("a","b","c");
exibirLetras("a","b","c","d");