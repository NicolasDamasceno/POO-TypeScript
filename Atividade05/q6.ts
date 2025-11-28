class Pessoa{
    private _nome: string;
    private _sobrenome: string;
    constructor(nome:string, sobrenome:string){
        this._nome = nome;
        this._sobrenome = sobrenome
    }

    nomeCompleto():string{
        return `${this._nome} ${this._sobrenome}`
    }
}

let pessoa: Pessoa = new Pessoa('Nicolas', 'Damasceno');
console.log(pessoa.nomeCompleto())