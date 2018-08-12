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
var testVar = null; // variable é declarada, e o valor null é atribuído como seu valor
console.log(testVar); // null  
console.log(typeof testVar); // object 
// Escopo de variáveis
var meuNumero = 1;
var ehValido = true;
var chave = "0E5CE8BD-6341-4CC2-904D-C4A94ACD276E";
var a = 10;
var b = 20;
console.log(Math.pow(a, b));
