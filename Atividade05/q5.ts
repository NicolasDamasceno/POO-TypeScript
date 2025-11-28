class Empregado{
    salario:number = 500;
   
    calcularSalario():number{
        return this.salario
    }
}

class Diarista extends Empregado{
    calcularSalario(): number {
        return super.calcularSalario() / 30
        
    }
}

class Horista extends Diarista{
    calcularSalario(): number {
        return super.calcularSalario() / 24
    }
}

let empregado: Empregado = new Empregado();
console.log(empregado.calcularSalario());

let diarista: Diarista = new Diarista();
console.log(diarista.calcularSalario());

let horista: Horista = new Horista();
console.log(horista.calcularSalario());