class Hora{
    private _horas:number;
    private _minutos:number;
    private _segundos:number;

    constructor(hora:number,minutos:number,segundos:number){
        this._horas = hora;
        this._minutos = minutos;
        this._segundos = segundos;
    }

    get horas():number{
        return this._horas;
    }

    get minutos():number{
        return this._minutos;
    }

    get segundos():number{
        return this._segundos;
    }

    exibirHora():string{
        let horasStr = String(this._horas).padStart(2, '0');
        let minutosStr = String(this._minutos).padStart(2, '0');
        let segundosStr = String(this._segundos).padStart(2, '0');
        return `${horasStr}h:${minutosStr}min:${segundosStr}s`;
    }
}

let horario = new Hora(14,40,50);
console.log(horario.horas);
console.log(horario.minutos);
console.log(horario.segundos);
console.log(horario.exibirHora());

