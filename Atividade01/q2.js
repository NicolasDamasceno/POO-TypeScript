// 2. Crie uma função que receba como parâmetros um nome e um pronome de
// tratamento opcional. Caso esse último não seja fornecido, deve ser considerado o
// valor “Sr”. Ao final, imprima uma saudação semelhante a “Sra. Sávia”.
function tratamento(nome, pronome) {
    if (!pronome) {
        pronome = "Sr/Sra";
    }
    ;
    var msg = "Ol\u00E1, ".concat(pronome, ". ").concat(nome);
    return console.log(msg);
}
tratamento("Ely", "Sr");
tratamento("Claudia", "Sra");
tratamento("Nicolas");
