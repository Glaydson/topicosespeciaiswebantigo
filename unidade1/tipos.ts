// Tipos Básicos

// Boolean
let estaFeito: boolean = true;

// Number
let altura: number = 1.90;

// String
let meuNome: string = "João";
meuNome = 'José';

// Array
let lista1: number[] = [1, 2, 3];
let lista2: Array<number> = [1, 2, 3];

// Tupla
let x: [string,   number];   
x = ["olá",   10]; // OK   
x = ["mundo",   20]; // OK   
x = [10, "olá"];   // Erro  
x = [20, "mundo"];   // Erro 

// Enumerations
enum Cores {Vermelho, Verde, Azul};   
let c: Cores =   Cores.Verde;

// Tipo Any
let incerto: any   = 4; // OK   
incerto = "talvez uma string"; // OK   
incerto =   false; // OK  

// Null x Undefined
let testVar; // variável é declarada mas não inicializada
console.log(testVar); // undefined  
console.log(typeof testVar); // undefined  
let testVar = null; // variável é declarada, e o valor null é atribuído como seu valor
console.log(testVar); // null  
console.log(typeof testVar); // object 

// Escopo de variáveis
var meuNumero: number = 1; 
let ehValido: boolean = true; 
const chave: string = "0E5CE8BD-6341-4CC2-904D-C4A94ACD276E"; 

function soma2(b) {
    let dois: number = 2;  // variável só existe no escopo da função
    console.log('A soma de 2 mais ' + b + ' é ' + (dois + b));
}
let dois: string = "2";  // variável com escopo global
// let dois: number = 2;   // Erro, pois já existe variável com este nome neste escopo
soma2(4);  // A soma de 2 mais 4 é 6

let a = 10;
let b = 20;
console.log(a ** b);

