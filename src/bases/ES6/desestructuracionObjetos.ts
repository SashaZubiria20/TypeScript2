// Destructuracion de Objetos

/*
    La desestructuración es una forma elegante y rápida de extraer propiedades de un objeto y convertirlas en variables individuales

    ¿Para qué sirve?
    - Limpieza: Tu código se vuelve mucho más corto y legible.
    - React/Angular/Vue: En los frameworks modernos, el 90% del código que escribes utiliza desestructuración para recibir datos (props).
    - Selectividad: Solo extraes lo que necesitas. Si el objeto avengers tiene 50 propiedades pero tú solo necesitas poder y vision, con la desestructuración ignoras el resto.

    Uso en la vida real:
    - Se usa constantemente cuando recibes datos de una base de datos o de una API. Imagina que recibes un objeto gigante de Usuario. En lugar de hacer usuario.nombre, usuario.apellido, usuario.email, haces const { nombre, email } = usuario; y listo, ya tienes tus variables listas para usar en tu pantalla.
*/

type Avangers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
}

const avangers: Avangers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500
}

/*
const {poder, vision} = avangers
console.log(poder, vision.toUpperCase());
*/


/*
const printAvanger = (avangers:Avangers) => {
    console.log(avangers.vision);
}
printAvanger(avangers);
*/


const printAvanger = ({ironman}:Avangers) => {
    console.log(ironman);
}
printAvanger(avangers);