const PI = 3.14;

function calculaCircunferencia(diametro: number) : number {
    return diametro * PI;
}

function calculaRetangulo(largura: number, comprimento: number):number {
    return largura * comprimento;
}

console.log(PI);
console.log(calculaRetangulo(10,10));
console.log(calculaCircunferencia(15));