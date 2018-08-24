// Reescreva o código usando classes e tipagem
function Carro(nome) {
    this.nome = nome;
    this.velocidade = 0;
 
    this.buzinar = function() {
        console.log("FonFon!");
    };
 
    this.acelerar = function(velocidade) {
        this.velocidade = this.velocidade + velocidade;
    }
}
var carro = new Carro("BMW");
carro.buzinar();
console.log(carro.velocidade);
carro.acelerar(100);
console.log(carro.velocidade);