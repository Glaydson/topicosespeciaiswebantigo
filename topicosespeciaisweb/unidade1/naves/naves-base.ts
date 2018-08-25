class NaveEspacial {
    
    constructor(public propulsor:string) {}

    pularNoHiperEspaco() {
        console.log(`Entrando no hiperespaço com ${this.propulsor}`);
    }
}

interface NaveCarga {
    containersCarga: number;
}

export {NaveEspacial, NaveCarga}