let contaBancaria = {
    saldo: 2000,
    depositar(valor) {
        this.saldo += valor;
    }
};
 
let eu = {
    nome: "Max",
    contaBancaria: contaBancaria,
    hobbies: ["Esportes", "Cozinhar"]
};
 
eu.contaBancaria.depositar(3000);
 
console.log(eu);