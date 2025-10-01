/*3. Crie uma função que retorne os números de um array passados por parâmetro
separados por traço (-) no formato string. Para isso, use o método forEach dos
arrays.*/
function enumerarArray(numeros) {
    var novoArray = "";
    numeros.forEach(function (item, indice) {
        return novoArray = novoArray + item + "-";
    });
    return novoArray.substring(0, novoArray.length - 1);
}
;
var texto = "";
console.log(enumerarArray([1, 2, 3]));
