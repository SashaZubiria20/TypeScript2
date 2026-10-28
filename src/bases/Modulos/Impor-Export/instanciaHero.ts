// Import - Export

/*
    Es la puerta de entrada. Le dices al sistema: "Traeme la pieza llamada Hero desde este archivo específico".

    import { Hero } from './Hero';: Es la sintaxis estándar. Las llaves {} te permiten importar exactamente lo que necesitas (puedes importar varias cosas separadas por comas).
*/


import { Hero } from "./Hero";

const ironan = new Hero('Ironman', 1, 55);
console.log(ironan)


// Tambien podemos usar alias para hacer las importaciones, para que en caso de por ejemplo, tener variables con el mismo nombre no choquen

/*
import { Hero as superHero } from "./Hero";

const Hero = 123

const ironan = new superHero('Ironman', 1, 55);
console.log(ironan)
*/



// Otra forma de importar, de esta forma tenemos acceso a todo lo que este importando ese archivo
/*
    import * as HeroClases from "./Hero";

    const ironan = new HeroClases.Hero ('Ironman', 1, 55);
*/