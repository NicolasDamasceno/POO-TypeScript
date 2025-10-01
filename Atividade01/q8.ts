/*8. Crie um exemplo usando a função map para dobrar os elementos de um array e
reduce para totalizar a soma dos elementos do array.*/

function dobro(numeros: number[]): void {
    let novoArray: number[] = numeros.map((item) => 2 * item);
    console.log(novoArray);
};

function somar(numeros: number[]): void {
    let somatorio = 0;
    console.log(numeros.reduce((total, item) => total + item));

};

dobro([1, 2, 3, 4, 5]);
somar([5, 4, 3]);