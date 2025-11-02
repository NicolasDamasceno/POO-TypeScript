class Triangulo {
    ladoA: number;
    ladoB: number;
    ladoC: number;

    constructor (ladoA:number, ladoB:number, ladoC:number){
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    ehTriangulo(): boolean{
        if (this.ladoA > (Math.abs(this.ladoB - this.ladoC)) && this.ladoA < (this.ladoB + this.ladoC)) {
            return true
        }
        return false
    
    }

    ehEquilatero(): boolean{
        if (this.ehTriangulo() && (this.ladoA == this.ladoB && this.ladoB == this.ladoC)){
            return true
        }
        return false
    }

    ehEscaleno(): boolean{
        if (this.ehTriangulo() && (this.ladoA != this.ladoB && this.ladoA != this.ladoC && this.ladoB != this.ladoC)) {
            return true
        }
        return false
    }

    ehIsoceles(): boolean{
        if (this.ehTriangulo() && !this.ehEquilatero() && !this.ehEscaleno()){
            return true
        }
        return false
    }

}

let triangulo1 = new Triangulo(5,5,5);
let triangulo2 = new Triangulo(2,2,3);
let triangulo3 = new Triangulo(3,4,5);

console.log(triangulo1.ehTriangulo());
console.log(triangulo2.ehTriangulo());
console.log(triangulo3.ehTriangulo());

console.log(triangulo1.ehEquilatero());
console.log(triangulo2.ehIsoceles());
console.log(triangulo3.ehEscaleno());
