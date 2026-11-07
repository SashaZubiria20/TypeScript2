import { getPokemon } from "./get-pokemon";

// Llamado funcion de axios
getPokemon(4)
    .then(pokemon => console.log(pokemon.sprites.front_default))
    .catch(err => console.error(err))
    .finally(() => console.log('Fin de getPokemon'))


/*
    Que hice?
        Converti una respuesta cruda de internet (que es solo texto JSON, algo "desordenado") en un objeto tipado y estructurado.

    - El Contrato (Interface): Al definir interface Pokemon, le di una "forma" a los datos. TypeScript ahora sabe que un Pokémon tiene sprites, que los sprites tienen front_default, etc.

    - El poder del Genérico (<Pokemon>): Cuando hice axios.get<Pokemon>(...), le di una orden al compilador: "Axios, no me devuelvas un objeto genérico; confía en mí, lo que viene de esta URL tiene la estructura de mi interfaz Pokemon".

    - La recompensa (Autocompletado): Al escribir pokemon.sprites.front_default, el editor ayudó. Eso no es magia, es seguridad de tipos. Si en el futuro la API cambia y el campo se llama frontDefault (sin guion bajo), TypeScript me va a marcar el error en rojo inmediatamente, evitándote que la página web se rompa en producción.

    *QuickType: traduce la respuesta cruda de la API a interfaces de TypeScript en un segundo. Es una herramienta de productividad estándar en la industria.
*/