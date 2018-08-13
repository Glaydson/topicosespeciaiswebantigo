// Tipos Básicos
// Boolean
var estaFeito = true;
// Number
var altura = 1.90;
// String
var meuNome = "João";
meuNome = 'José';
// Array
var lista1 = [1, 2, 3];
var lista2 = [1, 2, 3];
// Tupla
var x;
x = ["olá", 10]; // OK   
x = ["mundo", 20]; // OK   
x = [10, "olá"]; // Erro  
x = [20, "mundo"]; // Erro 
// Enumerations
var Cores;
(function (Cores) {
    Cores[Cores["Vermelho"] = 0] = "Vermelho";
    Cores[Cores["Verde"] = 1] = "Verde";
    Cores[Cores["Azul"] = 2] = "Azul";
})(Cores || (Cores = {}));
;
var c = Cores.Verde;
// Tipo Any
var incerto = 4; // OK   
incerto = "talvez uma string"; // OK   
incerto = false; // OK  
// Null x Undefined
var testVar; // variável é declarada mas não inicializada
console.log(testVar); // undefined  
console.log(typeof testVar); // undefined  
var testVar = null; // variável é declarada, e o valor null é atribuído como seu valor
console.log(testVar); // null  
console.log(typeof testVar); // object 
// Escopo de variáveis
var meuNumero = 1;
var ehValido = true;
var chave = "0E5CE8BD-6341-4CC2-904D-C4A94ACD276E";
function soma2(b) {
    var dois = 2; // variável só existe no escopo da função
    console.log('A soma de 2 mais ' + b + ' é ' + (dois + b));
}
var dois = "2"; // variável com escopo global
// let dois: number = 2;   // Erro, pois já existe variável com este nome neste escopo
soma2(4); // A soma de 2 mais 4 é 6
var a = 10;
var b = 20;
console.log(Math.pow(a, b));
// Usando tipos em funções
function retornaMeuNome() {
    return 'Glaydson';
}
console.log(retornaMeuNome()); // Glaydson
var nome = 2;
function retornaMeuNome2() {
    // return nome;    // Erro
    return 'Glaydson';
}
// void
function digaOla() {
    // return 'Alo';     // Erro
    console.log("Alô");
}
// tipos dos parâmetros
function multiplica(numero1, numero2) {
    return numero1 * numero2;
}
// console.log(multiplica(2,'Glaydson'));  // Erro de compilação
console.log(multiplica(2, 3));
// Função é um tipo
var minhaMultiplicacao = multiplica;
console.log(multiplica(3, 4)); // 12
console.log(typeof (minhaMultiplicacao)); // function
var minhaMultiplicacao2;
minhaMultiplicacao2 = multiplica;
//console.log(minhaMultiplicacao2(2));   // Erro, falta um argumento
console.log(minhaMultiplicacao2(3, 4)); // 12
