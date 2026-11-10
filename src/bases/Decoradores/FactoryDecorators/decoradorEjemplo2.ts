import { Pokemon3 } from "./decoradorEjemplo";

const pikachu = new Pokemon3 ('Pikachu');
console.log(pikachu);


// Intentamos expandir el prototipo de la clase (objeto) agregandole otra propiedad
(Pokemon3.prototype as any).customName = 'Bulbasaur';