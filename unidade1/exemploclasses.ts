class NaveEspacial3 {
    
    constructor(public propulsor:string) {}

    pularNoHiperEspaco() {
        console.log(`Entrando no hiperespaço com ${this.propulsor}`);
    }
}

let nave = new NaveEspacial3("hyperdrive");
nave.pularNoHiperEspaco();

class MillenniumFalcon3 extends NaveEspacial3 implements NaveCarga2 {

    containersCarga: number;

    constructor() {
        super("hyperdrive");
        this.containersCarga = 2;
    }

    pularNoHiperEspaco() {
        if (Math.random() >= 0.5) {
            super.pularNoHiperEspaco();
        } else { console.log("Falhou em pular no hiperespaço")};
    }
}

let falcon2 = new MillenniumFalcon3();
falcon2.pularNoHiperEspaco();

interface NaveCarga2 {
    containersCarga: number;
}

let boaParaCarga = (nave: NaveCarga2 ) => nave.containersCarga > 2;
console.log(`A falcon é boa para carga? ${boaParaCarga(falcon2) ? 'sim' : 'não'}`);

