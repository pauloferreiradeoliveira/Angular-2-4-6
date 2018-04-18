var minhaVar = 'minha Variavel';
var numero = 2;
var pi = 3.14;
var numeris = [1, 2, 3];
numeris.map(function (v) {
    return v * 2;
});
numeris.map(function (valor) { return valor * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var n1 = "ssss";
var mul = function (x, y) { return x + y; };
console.log(mul(4, 5));
