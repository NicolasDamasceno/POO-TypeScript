/*3. Crie uma função que retorne os números de um array passados por parâmetro
separados por traço (-) no formato string. Para isso, use o método forEach dos
arrays.*/

function enumerarArray(numeros : number[]): string{
    let novoArray = "";

    numeros.forEach((item, indice) =>
        novoArray = novoArray + item + "-");

    return novoArray.substring(0, novoArray.length - 1);
};
let texto = "";

console.log(enumerarArray([1, 2, 3]));