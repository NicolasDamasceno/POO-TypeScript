/*11. Crie agora uma classe chamada Sorteio e crie:
a. Um atributo que é um array de strings inicializado com [ ].
b. Crie um método chamado adicionar que recebe um nome como parâmetro
e o adiciona no array;
c. Crie um método chamado sortear que retorna aleatoriamente um dos
nomes do array.*/
class Sorteio {
    nomes: string[] = [];

    adicionarNome(nome: string): void{
        this.nomes.push(nome);
    };

    sotearNome(): string {
        let indice = Math.floor(Math.random() * (this.nomes.length - 1 + 1)) +1;
        return this.nomes[indice]
    };

}

let sorteio: Sorteio = new Sorteio();
sorteio.adicionarNome("Ely");
sorteio.adicionarNome("Ana");
sorteio.adicionarNome("Nicolas");
sorteio.adicionarNome("Guilerme");
console.log(sorteio.sotearNome());