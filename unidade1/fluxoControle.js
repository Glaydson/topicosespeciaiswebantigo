// if-else
console.log('*** IF-ELSE ***');
var ehValido1 = true;
if (ehValido1) {
    console.log("é válido!");
}
else {
    console.log("NÃO é válido!");
}
// Operador ternário
console.log('*** OPERADOR TERNÁRIO ***');
var ehValido2 = true;
var mensagem = ehValido2 ? "É válido!" : "NÃO é válido!";
console.log(mensagem);
//switch
console.log('*** SWITCH ***');
var NivelAlerta;
(function (NivelAlerta) {
    NivelAlerta[NivelAlerta["info"] = 0] = "info";
    NivelAlerta[NivelAlerta["alerta"] = 1] = "alerta";
    NivelAlerta[NivelAlerta["erro"] = 2] = "erro";
})(NivelAlerta || (NivelAlerta = {}));
function getAssinantesAlerta(nivel) {
    var emails = new Array();
    switch (nivel) {
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
var i = 0;
while (i < 5) {
    i += 1;
    console.log(i);
}
// do-while
console.log('*** DO-WHILE ***');
var y = 0;
do {
    y += 1;
    console.log(y);
} while (y < 5);
// for...in
console.log('*** FOR...IN ***');
var obj = { a: 1, b: 2, c: 3 };
for (var chave in obj) {
    if (obj.hasOwnProperty(chave)) {
        console.log(chave + " = " + obj[chave]);
    }
} // Saída // "a = 1" // "b = 2" // "c = 3" 
// for...of
console.log('*** FOR...OF ***');
var iteravel = [10, 20, 30];
for (var _i = 0, iteravel_1 = iteravel; _i < iteravel_1.length; _i++) {
    var valor = iteravel_1[_i];
    valor += 1;
    console.log(valor);
}
// for
console.log('*** FOR ***');
for (var i_1 = 0; i_1 < 9; i_1++) {
    console.log(i_1);
}
