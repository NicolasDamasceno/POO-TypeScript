var Conta = /** @class */ (function () {
    function Conta(id, numero, saldoInicial) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldoInicial;
    }
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.sacar = function (valor) {
        if (this.saldo > valor) {
            this.saldo = this.saldo - valor;
            return true;
        }
        return false;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    return Conta;
}());
var c1 = new Conta(1, "111-1", 100);
var c2 = new Conta(2, "222-2", 100);
var c3;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferir(c2, 50);
console.log(c1);
console.log(c2);
console.log(c3);
