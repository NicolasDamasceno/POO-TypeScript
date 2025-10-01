/*10. Crie a classe uma classe chamada Autenticacao com:
a. Atributos usuario e senha;
b. Um método validar(): string que retorna verdadeiro se o usuario for "admin"
senha for "1234". */
var Autenticacao = /** @class */ (function () {
    function Autenticacao() {
        this.usuario = "";
        this.senha = "";
    }
    Autenticacao.prototype.validar = function () {
        return (this.usuario == "admin" && this.senha == "1234");
    };
    return Autenticacao;
}());
;
var a1 = new Autenticacao();
a1.usuario = "admin";
a1.senha = "1234";
console.log(a1.validar());
var a2 = new Autenticacao();
a2.usuario = "administrador";
a2.senha = "1234";
console.log(a2.validar());
