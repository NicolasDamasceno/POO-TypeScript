var Triangulo = /** @class */ (function () {
    function Triangulo(ladoA, ladoB, ladoC) {
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }
    Triangulo.prototype.ehTriangulo = function () {
        if (this.ladoA > (Math.abs(this.ladoB - this.ladoC)) && this.ladoA < (this.ladoB + this.ladoC)) {
            return true;
        }
        return false;
    };
    Triangulo.prototype.ehEquilatero = function () {
        if (this.ehTriangulo() && (this.ladoA == this.ladoB && this.ladoB == this.ladoC)) {
            return true;
        }
        return false;
    };
    Triangulo.prototype.ehEscaleno = function () {
        if (this.ehTriangulo() && (this.ladoA != this.ladoB && this.ladoA != this.ladoC && this.ladoB != this.ladoC)) {
            return true;
        }
        return false;
    };
    Triangulo.prototype.ehIsoceles = function () {
        if (this.ehTriangulo() && !this.ehEquilatero() && !this.ehEscaleno()) {
            return true;
        }
        return false;
    };
    return Triangulo;
}());
var triangulo1 = new Triangulo(5, 5, 5);
var triangulo2 = new Triangulo(2, 2, 3);
var triangulo3 = new Triangulo(3, 4, 5);
console.log(triangulo1.ehTriangulo());
console.log(triangulo2.ehTriangulo());
console.log(triangulo3.ehTriangulo());
console.log(triangulo1.ehEquilatero());
console.log(triangulo2.ehIsoceles());
console.log(triangulo3.ehEscaleno());
