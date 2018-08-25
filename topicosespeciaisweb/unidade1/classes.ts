// Definindo uma classe
class NaveEspacial {
    propulsor: string;

    constructor(propulsor:string) {
        this.propulsor = propulsor;
    }

    pularNoHiperEspaco() {
        console.log("Entrando no hiperespaço com " + this.propulsor);
    }
}

// Instanciando uma classe
let falcon = new NaveEspacial("hyperdrive");
falcon.pularNoHiperEspaco();

// Classe com construtor alternativo
class NaveEspacial2 {
    
    constructor(public propulsor:string) {}

    pularNoHiperEspaco() {
        console.log("Entrando no hiperespaço com " + this.propulsor);
    }
}

// Herança
class MillenniumFalcon extends NaveEspacial2 {
    constructor() {
        super("hyperdrive");
    }

    pularNoHiperEspaco() {
        if (Math.random() >= 0.5) {
            super.pularNoHiperEspaco();
        } else { console.log("Falhou")}
    }
}

// Interfaces
interface NaveCarga {
    containersDeCarga: number;
}

class MillenniumFalcon2 extends NaveEspacial2 implements NaveCarga {
    containersDeCarga: number;

    constructor() {
        super("hyperdrive");
        this.containersDeCarga = 4;
    }
}

interface NaveContrabando extends NaveCarga {

    containersEscondidos: number;
}
