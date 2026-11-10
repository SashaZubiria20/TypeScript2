import { Pokemon5 } from "./decoradoresDePropiedades";

const squirtle = new Pokemon5 ('Squirtle');

// 1. Acceder a la propiedad (esto dispara el GET del decorador)
console.log('Valor actual:', squirtle.publicApi); 

// 2. Intentar modificar (esto dispara el SET del decorador)
squirtle.publicApi = 'https://google.com';

// 3. Ver qué pasó después de intentar modificar
console.log('Valor tras intentar cambiar:', squirtle.publicApi);