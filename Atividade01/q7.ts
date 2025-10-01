/*7. Dado método filter dos arrays, crie uma implementação usando arrow function que
filtre todos os elementos pares do array abaixo:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];*/

function parOuImpar(num: number){
    if (num%2 == 0){
        return true
    };
    return false
};

function filtrarPares(numeros: number[]): number[] {
    return numeros.filter((numero)=> parOuImpar(numero))
};

console.log(filtrarPares([1, 3, 5, 6, 8, 9, 10]));