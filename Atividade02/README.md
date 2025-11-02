-> Nesse arquivo será armazenado as questões discursivas.

Q1 - Assinale verdadeiro ou falso:
(F) Objetos são modelos para classes;
(V) Atributos de uma classe devem ser obrigatoriamente inicializados para que as
classes compilem;
(F) Uma variável declarada dentro de um método deve ser inicializada para que a classe seja compilável;
(V) Uma variável que seja uma classe declarada em um método é automaticamente inicializada com undefined;
(V) Construtores são rotinas especiais que servem para inicializar e configurar os objetos no momento da instanciação;
(V) Construtores não possuem tipo de retorno e podem ou não ter parâmetros;
(V) Uma classe pode ter várias instâncias.

Q2 - Suponha uma classe Hotel que sirva apenas para guardar a quantidade de solicitações de reservas feitas conforme abaixo:
class Hotel {
    quantReservas : number;
    adicionarReserva() : void {
    this.quantReservas++;
    }
}
Podemos afirmar que haverá um problema de compilação, pois a variável inteira não foi inicializada previamente? Justifique.
R - Sim, haveria um problemas de compilação pois é necessário iniciar o atributo.

Q8 - Realizada as alterações no código da questão 5

Q9 - Depende, caso o banco aceite um saldo negativo quando houver mais saques do que dinheiro disponivel, sendo mais recomendavel um limite.