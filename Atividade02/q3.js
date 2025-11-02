var Hotel = /** @class */ (function () {
    function Hotel(quantReservas) {
        this.quantReservas = quantReservas;
    }
    Hotel.prototype.adicionarReserva = function () {
        this.quantReservas++;
    };
    return Hotel;
}());
var hotel = new Hotel(2);
hotel.adicionarReserva();
console.log(hotel.quantReservas);
