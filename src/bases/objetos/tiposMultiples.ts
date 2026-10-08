// Union Types (Tipos de Unión)

/*
    ¿Qué son los Union Types?
Es la capacidad de decirle a TypeScript: "Esta variable puede ser de tipo A, O de tipo B, O de tipo C". Se utiliza el carácter | (pipe) para separar los tipos permitidos.

    ¿Para qué sirve en la vida real?
Es extremadamente útil para manejar respuestas de APIs o estados.
Imagina que tienes una variable resultado. A veces puede ser un string (si hubo un error), a veces un number (si todo salió bien y te devuelve un ID) o incluso un objeto Usuario si la petición fue exitosa.
En lugar de crear 3 variables distintas, usas un Union Type para manejar el mismo contenedor con diferentes tipos de datos.
*/




type Hero = {
    name:string,
    age?:number,
    powers:number[],
    getName?: ()=> string
}

let myCustomVariable: (string | number | Hero) = 'Sergio'
console.log(myCustomVariable);
console.log(typeof myCustomVariable);

myCustomVariable = 20
console.log(typeof myCustomVariable);

myCustomVariable = {
    name: 'Bruce',
    age: 43,
    powers: [7]
}
console.log(typeof myCustomVariable);