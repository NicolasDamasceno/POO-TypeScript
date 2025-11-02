class Conta {
    id: number;
    numero: string;
    saldo: number;

    constructor(id: number, numero: string,
        saldoInicial: number) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    sacar(valor: number): boolean {
        if (this.saldo > valor) {
            this.saldo = this.saldo - valor;
            return true;
        }

        return false;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }

        return false;
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}

let c1: Conta = new Conta(1, "111-1",100);
let c2: Conta = new Conta(2,"222-2",100);
let c3: Conta;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferir(c2,50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());

/*
a) Qual o resultado dos dois "prints"? Justifique sua resposta. 
    R - Ambos printam o mesmo saldo de 90, pois as variaveis agora apontam para o C2.
b) O que acontece com o objeto para o qual a referência c1 apontava?
    R - Ele continua armazenado na memória, porém não há mais uma variável que aponta para ele
    tornando-se inacessível.
*/