// Uma função simples
function retornaMeuNome() {
    return 'Glaydson';
}
console.log(retornaMeuNome());   // Glaydson

let nome = 2;
function retornaMeuNome2(): string {
    // return nome;    // Erro
    return 'Glaydson';
}

// void
function digaOla(): void {
   // return 'Alo';     // Erro
    console.log("Alô");
}

// adicionando os tipos dos parâmetros e do retorno
function multiplica(numero1: number, numero2: number) : number {
    return numero1 * numero2;
}
// console.log(multiplica(2,'Glaydson'));  // Erro de compilação
console.log(multiplica(2,3));

// função nomeada 
function saudacao(nome?: string): string { 
    if(nome){ 
      return "Olá! " + nome; 
    } else { 
      return "Olá!"; 
    } 
  } 
   
  // função anônima 
  let saudacao2 = function(nome?: string): string { 
    if (nome) { 
      return "Olá! " + nome; 
    } else { 
      return "Olá!"; 
    } 
  } 

// Função é um tipo!
let minhaMultiplicacao = multiplica;
console.log(multiplica(3,4));       // 12
console.log(typeof(minhaMultiplicacao));   // function

// Definindo uma função de forma mais genérica
let minhaMultiplicacao2: (val1: number, val2: number) => number;
minhaMultiplicacao2 = multiplica;      // OK, os argumentos batem
//console.log(minhaMultiplicacao2(2));   // Erro, falta um argumento
console.log(minhaMultiplicacao2(3,4));   // 12

// Arrow Functions
let saudacao3 = (nome: string): string => { 
    if(nome){ 
      return "Olá! " + nome; 
    } 
    else 
    { 
      return "Olá"; 
    } 
}; 


// Template Strings
let ehDistanteParaDerrubarNave = function (parsecs: number): boolean {
    return parsecs < 12;
}

let distancia = 11;
console.log(`Será que ${distancia} parsecs é suficiente para derrubar a nave? ${ehDistanteParaDerrubarNave(distancia) ? 'SIM': 'NÃO'}`);

let chamada = (nome: string) => console.log(`Entendeu, ${nome}?`);
chamada('R2');

// Definindo o valor de parâmetros
function incremento(velocidade: number, aumento: number = 1) : number {
    return velocidade + aumento;
}

console.log(`incremento(5, 1) = ${incremento(5,1)}`);
console.log(`incremento(5) = ${incremento(5)}`);

