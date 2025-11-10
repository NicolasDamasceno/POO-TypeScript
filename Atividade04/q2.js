var Hora = /** @class */ (function () {
    function Hora(hora, minutos, segundos) {
        this._horas = hora;
        this._minutos = minutos;
        this._segundos = segundos;
    }
    Object.defineProperty(Hora.prototype, "horas", {
        get: function () {
            return this._horas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hora.prototype, "minutos", {
        get: function () {
            return this._minutos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hora.prototype, "segundos", {
        get: function () {
            return this._segundos;
        },
        enumerable: false,
        configurable: true
    });
    Hora.prototype.exibirHora = function () {
        var horasStr = String(this._horas).padStart(2, '0');
        var minutosStr = String(this._minutos).padStart(2, '0');
        var segundosStr = String(this._segundos).padStart(2, '0');
        return "".concat(horasStr, "h:").concat(minutosStr, "min:").concat(segundosStr, "s");
    };
    return Hora;
}());
var horario = new Hora(14, 40, 50);
console.log(horario.horas);
console.log(horario.minutos);
console.log(horario.segundos);
console.log(horario.exibirHora());
