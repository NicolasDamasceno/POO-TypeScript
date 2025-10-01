/*10. Crie a classe uma classe chamada Autenticacao com:
a. Atributos usuario e senha;
b. Um método validar(): string que retorna verdadeiro se o usuario for "admin"
senha for "1234". */

class Autenticacao {
    usuario: string = "";
    senha: string = "";

    validar() {
        return (this.usuario == "admin" && this.senha == "1234");

    }
};

let a1: Autenticacao = new Autenticacao();
a1.usuario = "admin";
a1.senha = "1234";
console.log(a1.validar());

let a2: Autenticacao = new Autenticacao();
a2.usuario = "administrador";
a2.senha = "1234";
console.log(a2.validar());