var Banco = /** @class */ (function () {
    function Banco(nomeBanco) {
        this.nomeBanco = nomeBanco;
        this.clientes = [];
        this.contas = [];
    }
    Banco.prototype.adicionarCliente = function (cliente) {
        var procurarCliente = this.consultarCliente(cliente.cpf);
        if (procurarCliente) {
            console.log("Cliente ".concat(cliente.nome, " j\u00E1 adicionado!"));
        }
        else {
            this.clientes.push(cliente);
            console.log("Cliente Adicionado");
        }
    };
    Banco.prototype.adicionarConta = function (conta) {
        var contaExistente = this.contas.find(function (c) { return c.numero === conta.numero; });
        if (contaExistente) {
            console.log("Conta ".concat(conta.numero, " j\u00E1 adicionada!"));
        }
        else {
            this.contas.push(conta);
            console.log("Conta Adicionada");
        }
    };
    Banco.prototype.consultarCliente = function (cpf) {
        var resultado;
        for (var _i = 0, _a = this.clientes; _i < _a.length; _i++) {
            var cliente = _a[_i];
            if (cliente.cpf == cpf) {
                resultado = cliente;
                break;
            }
        }
        return resultado;
    };
    Banco.prototype.associarClienteConta = function (numeroConta, cpfCliente) {
        var cliente = this.consultarCliente(cpfCliente);
        var contaEncontrada;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (conta.numero == numeroConta) {
                contaEncontrada = conta;
                break;
            }
        }
        if (cliente && contaEncontrada) {
            contaEncontrada.cliente = cliente;
            cliente.contas.push(contaEncontrada);
            console.log("Conta ".concat(numeroConta, " vinculada ao cliente ").concat(cliente.nome));
        }
        else {
            if (!cliente) {
                console.error("Error: CPF ".concat(cpfCliente, " n\u00E3o encontrado!"));
            }
            if (!contaEncontrada) {
                console.error("Error: N\u00FAmero de Conta ".concat(numeroConta, " n\u00E3o encontrada!"));
            }
        }
    };
    Banco.prototype.listarContaCliente = function (cpf) {
        var cliente = this.consultarCliente(cpf);
        if (cliente) {
            if (cliente.contas.length > 0) {
                console.log("-------- Contas --------");
                for (var _i = 0, _a = cliente.contas; _i < _a.length; _i++) {
                    var conta = _a[_i];
                    console.log("N\u00FAmero: ".concat(conta.numero));
                    console.log("Saldo: R$".concat(conta.saldo.toFixed(2)));
                    console.log("Data de Abertura: ".concat(conta.dataAbertura));
                }
            }
            else {
                console.log("O cliente n\u00E3o possui contas associadas.");
            }
        }
        else {
            console.log("Error: CPF ".concat(cpf, " n\u00E3o encontrado!"));
        }
    };
    Banco.prototype.saldoClienteTotal = function (cpf) {
        var cliente = this.consultarCliente(cpf);
        if (cliente) {
            if (cliente.contas.length > 0) {
                var totalSaldo = 0;
                for (var _i = 0, _a = cliente.contas; _i < _a.length; _i++) {
                    var conta = _a[_i];
                    totalSaldo = totalSaldo + conta.saldo;
                }
                return totalSaldo;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    };
    return Banco;
}());
var Conta = /** @class */ (function () {
    function Conta(numero, saldoInicial) {
        this.numero = numero;
        this.cliente = null;
        this.saldo = saldoInicial;
        this.dataAbertura = new Date();
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
var Cliente = /** @class */ (function () {
    function Cliente(id, nome, cpf) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.contas = [];
    }
    return Cliente;
}());
