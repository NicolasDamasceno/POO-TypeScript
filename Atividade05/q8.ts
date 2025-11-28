class Pessoa{
    private _nome: string;
    private _sobrenome: string;
    constructor(nome:string, sobrenome:string){
        this._nome = nome;
        this._sobrenome = sobrenome
    }
    get nome():string{
        return this._nome
    }
    get sobrenome():string{
        return this._sobrenome
    }

    nomeCompleto():string{
        return `${this._nome} ${this._sobrenome}`
    }
}

class Funcionario extends Pessoa{
    private _matricula: string;
    private _salario: number;

    constructor(nome:string,sobrenome:string, matricula:string, salario:number){
        super(nome, sobrenome);
        this._matricula = matricula;
        this._salario = salario
    }

    get matricula(){
        return this._matricula
    }
    get salario():number{
        return this._salario
    }

    set salario(valorSalario: number){
        if (valorSalario < 0) {
            console.log("O salário não pode ser negativo!")
        }else{
            this._salario = valorSalario
        }
    }
    
    calcularSalarioPrimeiraParcela():number{
        return (this._salario * 0.6)
    }

    calcularSalarioSegundaParcela():number {
        return (this._salario * 0.4)
    }
}

class Professor extends Funcionario{
    private _titulacao: string

    constructor(nome:string, sobrenome:string, matricula:string, 
        salario:number,titulacao:string){
            super(nome, sobrenome, matricula, salario)
            this._titulacao = titulacao
    }

    get titulacao(): string{
        return this._titulacao
    }

    calcularSalarioPrimeiraParcela():number{
        return this.salario
    }
    calcularSalarioSegundaParcela(): number {
        return 0
    }
      
}

let professor:Professor = new Professor("Ely", "Miranda", "PPR22", 3200, "Doutor");
console.log(professor.nomeCompleto());
console.log(`Primeira Parceda do Professor ${professor.titulacao} ${professor.matricula} é R$` + professor.calcularSalarioPrimeiraParcela().toFixed(2));
console.log(`Segunda Parceda do Professor ${professor.titulacao} ${professor.matricula} é R$` + professor.calcularSalarioSegundaParcela().toFixed(2));