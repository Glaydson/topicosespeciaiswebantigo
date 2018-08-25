// Arquivo principal
import { NaveEspacial, NaveCarga} from './naves-base';
import { MillenniumFalcon} from './naves-combate';


let nave = new NaveEspacial("hyperdrive");
nave.pularNoHiperEspaco();

let falcon = new MillenniumFalcon();
falcon.pularNoHiperEspaco();

let boaParaCarga = (nave: NaveCarga ) => nave.containersCarga > 2;
console.log(`A falcon é boa para carga? ${boaParaCarga(falcon) ? 'sim' : 'não'}`);
