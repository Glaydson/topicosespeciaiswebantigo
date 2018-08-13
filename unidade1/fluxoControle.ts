// if-else
console.log('*** IF-ELSE ***');
let ehValido1: boolean = true; 
 
if (ehValido1) { 
  console.log("é válido!"); 
} else { 
  console.log("NÃO é válido!"); 
} 

// Operador ternário
console.log('*** OPERADOR TERNÁRIO ***');
let ehValido2: boolean = true; 
let mensagem = ehValido2 ? "É válido!" : "NÃO é válido!"; 
console.log(mensagem); 

//switch
console.log('*** SWITCH ***');
enum NivelAlerta{info, alerta, erro}  

function getAssinantesAlerta(nivel: NivelAlerta) {   
    let emails = new Array<string>();   
    switch(nivel){   
        case NivelAlerta.info:      
            emails.push("cst@domain.com");      
            break;   
        case NivelAlerta.alerta:      
            emails.push("development@domain.com");      
            emails.push("sysadmin@domain.com");      
            break;   
        case NivelAlerta.erro:     
            emails.push("development@domain.com");     
            emails.push("sysadmin@domain.com");     
            emails.push("management@domain.com");     
            break;   
        default:     
            throw new Error("Argumento inválido!");   
    }   
    return emails; 
}  
console.log(getAssinantesAlerta(NivelAlerta.info)); // ["cst@domain.com"] 
console.log(getAssinantesAlerta(NivelAlerta.alerta)); //  ["development@domain.com", "sysadmin@domain.com"]

// while
console.log('*** WHILE ***');
let i: number = 0; 
while (i < 5) { 
  i += 1; 
  console.log(i); 
} 

// do-while
console.log('*** DO-WHILE ***');
let y: number = 0; 
do {  
    y += 1;   
    console.log(y); 
} while (y < 5); 

// for...in
console.log('*** FOR...IN ***');
let obj: any = { a: 1, b: 2, c: 3 };  
for (let chave in obj) {     
    if (obj.hasOwnProperty(chave)) {         
        console.log(chave + " = " + obj[chave]);     
    } 
}  // Saída // "a = 1" // "b = 2" // "c = 3" 

// for...of
console.log('*** FOR...OF ***');
let iteravel = [10, 20, 30];  
for (let valor of iteravel) {   
    valor += 1;   
    console.log(valor); 
} 

// for
console.log('*** FOR ***');
for (let i: number = 0; i < 9; i++) { 
    console.log(i); 
 } 