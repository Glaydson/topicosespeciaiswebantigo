// Operador spread
let arrayOriginal1 = [ 1, 2, 3]; 
let arrayOriginal2 = [ 4, 5, 6]; 
let copyArr = [...arrayOriginal1]; 
let mergedArr = [...arrayOriginal1, ...arrayOriginal2]; 
console.log(mergedArr);  // [1, 2, 3, 4, 5, 6]
let novoObjArr = [...arrayOriginal1, 7, 8]; 
console.log(novoObjArr);   // [1, 2, 3, 7, 8]

