class Hotel {
    quantReservas : number;
    constructor(quantReservas: number) {
        this.quantReservas = quantReservas;
    }

    adicionarReserva() : void {
    this.quantReservas++;
    }
}

let hotel: Hotel = new Hotel(2);
hotel.adicionarReserva();
console.log(hotel.quantReservas);