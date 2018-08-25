import { NaveEspacial, NaveCarga} from './naves-base';

export class MillenniumFalcon extends NaveEspacial implements NaveCarga {

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