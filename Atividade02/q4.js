var Radio = /** @class */ (function () {
    function Radio(volume) {
        this.volume = volume;
    }
    return Radio;
}());
var r = new Radio(0);
r.volume = 10;
console.log(r.volume);
/*R - Para resolver o erro de compilação, é necessário iniciar a instância
com um argumento para o atributo volume.*/ 
