"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empregado {
    salario = 500;
    calcularSalario() {
        return this.salario;
    }
}
class Diarista extends Empregado {
    calcularSalario() {
        return super.calcularSalario() / 30;
    }
}
class Horista extends Diarista {
    calcularSalario() {
        return super.calcularSalario() / 24;
    }
}
let empregado = new Empregado();
console.log(empregado.calcularSalario());
let diarista = new Diarista();
console.log(diarista.calcularSalario());
let horista = new Horista();
console.log(horista.calcularSalario());
//# sourceMappingURL=q5.js.map