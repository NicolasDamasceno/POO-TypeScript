class Banco{
    nomeBanco: string;
    clientes: Cliente[];
    contas: Conta[];

    constructor(nomeBanco:string){
        this.nomeBanco = nomeBanco;
        this.clientes = [];
        this.contas = [];
    }

    adicionarCliente(cliente: Cliente):void{
        let procurarCliente: Cliente | null = this.consultarCliente(cliente.cpf);
        if (procurarCliente){
            console.log(`Cliente ${cliente.nome} já adicionado!`);
        } else {
            this.clientes.push(cliente);
            console.log("Cliente Adicionado");
        }
    }

    adicionarConta(conta:Conta):void{  
        const contaExistente = this.contas.find(c => c.numero === conta.numero);
        if(contaExistente){
            console.log(`Conta ${conta.numero} já adicionada!`);
        } else{
            this.contas.push(conta);
            console.log(`Conta Adicionada`);
        }
    }

    consultarCliente(cpf:string):Cliente | null{
        let resultado = null;
        for (let cliente of this.clientes){
            if (cliente.cpf == cpf) {
                resultado = cliente;
                break;
            }
        }
        return resultado;
    }

    associarClienteConta(numeroConta: string, cpfCliente:string): void{
        let cliente: Cliente | null = this.consultarCliente(cpfCliente);
        let contaEncontrada: Conta | undefined;
        for (let conta of this.contas){
            if (conta.numero == numeroConta){
                contaEncontrada = conta;
                break;
            }
        }
        if (cliente && contaEncontrada){
            contaEncontrada.cliente = cliente;
            cliente.contas.push(contaEncontrada);
            console.log(`Conta ${numeroConta} vinculada ao cliente ${cliente.nome}`);
        } else {
            if (!cliente){
                console.error(`Error: CPF ${cpfCliente} não encontrado!`);
            }
            if (!contaEncontrada) {
                console.error(`Error: Número de Conta ${numeroConta} não encontrada!`);
            }
        }
        
        
    }

    listarContaCliente(cpf:string): void{
        let cliente: Cliente | null = this.consultarCliente(cpf);
        if (cliente){
            if (cliente.contas.length > 0){
                console.log("-------- Contas --------");
                for (let conta of cliente.contas){
                    console.log(`Número: ${conta.numero}`);
                    console.log(`Saldo: R$${conta.saldo.toFixed(2)}`);
                    console.log(`Data de Abertura: ${conta.dataAbertura}`);
                }
            }else {
                console.log(`O cliente não possui contas associadas.`);
            }
        }else {
            console.log(`Error: CPF ${cpf} não encontrado!`);
        }

    }

    saldoClienteTotal(cpf:string): number | null{
        let cliente: Cliente | null = this.consultarCliente(cpf);
        if (cliente) {
            if (cliente.contas.length > 0){
                let totalSaldo: number = 0;
                for (let conta of cliente.contas){
                    totalSaldo = totalSaldo + conta.saldo;
                }
                return totalSaldo;
            } else {
                return null;
            }

        }else {
            return null;
        }
    }


}

class Conta {
    numero: string;
    cliente: Cliente | null;
    saldo: number;
    dataAbertura: Date;

    constructor(numero: string, saldoInicial: number) {
        this.numero = numero;
        this.cliente = null;
        this.saldo = saldoInicial;
        this.dataAbertura = new Date();
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

class Cliente{
    id: number;
    nome: string;
    cpf: string;
    contas: Conta[]

    constructor(id:number,nome:string,cpf:string){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.contas = [];
    }
}

