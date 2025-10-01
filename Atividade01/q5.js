/*5. Crie uma função exibir receba como parâmetro um “rest parameter” representando
strings. A função deve exibir no log cada um dos elementos do “rest parameter”.
Chame a função usando diferentes quantidade de parâmetros conforme abaixo:
exibir(“a”, “b”);
exibir(“a”, “b”, “c”);
exibir(“a”, “b”, “c”, “d”);*/
function exibirLetras() {
    var letras = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        letras[_i] = arguments[_i];
    }
    letras.forEach(function (item, index) { return console.log(item); });
}
;
exibirLetras("a", "b");
exibirLetras("a", "b", "c");
exibirLetras("a", "b", "c", "d");
