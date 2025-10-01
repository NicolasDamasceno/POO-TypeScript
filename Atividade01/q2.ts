// 2. Crie uma função que receba como parâmetros um nome e um pronome de
// tratamento opcional. Caso esse último não seja fornecido, deve ser considerado o
// valor “Sr”. Ao final, imprima uma saudação semelhante a “Sra. Sávia”.

function tratamento(nome: string, pronome?: string){
    if (!pronome) {
        pronome = "Sr/Sra"
    };
    let msg : string = `Olá, ${pronome}. ${nome}`;
    return console.log(msg)

}

tratamento("Ely", "Sr");
tratamento("Claudia", "Sra");
tratamento("Nicolas");