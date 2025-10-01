// 1. Crie uma função que recebe como parâmetro um número e retorna true se o
// número for par e false se for ímpar.

function parOuImpar(num: number){
    if (num%2 == 0){
        return true
    };
    return false
};

console.log(parOuImpar(4));
console.log(parOuImpar(11));