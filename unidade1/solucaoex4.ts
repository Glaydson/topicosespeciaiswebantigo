class Carro {
    nome: string;
    velocidade: number = 0;

    constructor(nome: string) {
        this.nome = nome;
    }

    buzinar(): void {
        console.log("FonFon!");
    }

    acelerar(velocidade: number): void {
        this.velocidade += velocidade;
    }
}
const carro = new Carro("BMW");
carro.buzinar();
console.log(carro.velocidade);
carro.acelerar(100);
console.log(carro.velocidade);