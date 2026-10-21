// Interfaz básica

/*
    Son como los tipos, al crear una interface definimos como queremos que sean nuestros objetos.
    La unica diferencia es que los tipos no son expansibles, las interfaces si


    Son muy similares a los type (tipos personalizados), pero tienen una gran ventaja: son expandibles (o abiertas). Esto se llama Declaration Merging (fusión de declaraciones).

        - Si defines un type Hero y luego intentas definir otro type Hero en otro archivo, TypeScript te dará un error de "nombre duplicado".

        - Si defines una interface Hero y luego, más adelante en otro archivo (quizás en una librería externa), vuelves a definir interface Hero, TypeScript combinará ambas en una sola.

    * Para qué sirve y cuándo se usa?
        -   Librerías de terceros: Si estás usando una librería y quieres añadirle una propiedad a un objeto que ellos definieron, simplemente defines la interfaz con el mismo nombre y TypeScript le agregará esa nueva propiedad al objeto original.

        - Estructura de Objetos: Aunque type también sirve para esto, la convención en la industria es usar interface para definir estructuras de objetos y type para uniones de tipos, alias de tipos primitivos o cosas más complejas (como los Union Types que vimos antes).

* Diferencia clave:
    - type: Es un alias. Es cerrado.
    - interface: Es un contrato. Es abierto y diseñado específicamente para extenderse y fusionarse
*/


/*
type Hero =  {
    name:string,
    age?:number,
    powers:string[],
    getName?: ()=> string
}
*/


interface Hero  {
    name:string,
    age?:number,
    powers:string[],
    getName?: ()=> string
}

let alberto: Hero = {
    name: 'Alberto',
    age: 20,
    powers: ['Caminar']
}
console.log(alberto);

let pablo: Hero = {
    name: 'Pablo',
    age: 20,
    powers: ['Caminar'],
    getName() {
        return this.name;
    }
}
console.log(pablo);



// Ejercicio
/**
 * Ejercicio: Usuarios y Administradores
 * Objetivo: Practicar la extensión de interfaces.
 * Pasos:
 * 1. Crear interface 'Usuario' con 'nombre' y 'email'.
 * 2. Crear interface 'Administrador' que 'extends Usuario'.
 * 3. Añadir a 'Administrador' la propiedad 'nivel' (number).
 * 4. Crear un objeto 'admin' de tipo 'Administrador' con los datos requeridos.
 * 5. Mostrar el objeto en consola.
 */

interface Usuario {
    nombre:string,
    email:string
}

interface Administrador extends Usuario{
    nivel:number
}

let admin: Administrador = {
    nombre : 'Juan',
    email : 'juan@gmail.com',
    nivel : 2
}

console.log(admin);