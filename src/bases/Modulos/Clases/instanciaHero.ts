// Import - Export

/*
    Es la puerta de entrada. Le dices al sistema: "Traeme la pieza llamada Hero desde este archivo específico".

    import { Hero } from './Hero';: Es la sintaxis estándar. Las llaves {} te permiten importar exactamente lo que necesitas (puedes importar varias cosas separadas por comas).
*/


import { Hero } from "./Hero";

const ironan = new Hero('Ironman', 1, 55);
console.log(ironan)
