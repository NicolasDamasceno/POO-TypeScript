/*9. Crie uma função que receba um array de nomes e retorne aleatoriamente um
deles usando Math.random() e Math.floor().
Exemplo: ["Ana", "Bruno", "Carlos"] → "Bruno".*/
function retornoNome(nomes) {
    var numero = 0;
    var tamaho = nomes.length;
    numero = Math.floor(Math.random() * (tamaho - 1 + 1)) + 1;
    console.log(nomes[numero]);
}
;
retornoNome(["Ely", "Ana", "Nicolas", "Julia"]);
