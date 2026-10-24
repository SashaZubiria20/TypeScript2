// Interfaz Compleja (estructura compleja)

/*
    Para no tener anidados varios objetos (niveles), en el caso de que la interface contenga objetos dentro., es recomendable crear otra interface por separado
*/

/*
interface Client {
    name:string;
    age:number;
    address:{
        id:number;
        zip:string;
        city:string
    }
}
*/

interface Client {
    name:string;
    age:number;
    address: Address
}

interface Address {
        id:number;
        zip:string;
        city:string
    }


const client: Client = {
    name: 'Pedro',
    age: 25,
    address:{
        id:125,
        zip: ' USH NSI',
        city: 'Ottawa',
    }
}

console.log(client);

/*
    Por qué lo hacemos así?
        En el ejemplo, el Client tiene una address. Si pusiéramos todo dentro de Client (como en el bloque comentado de las líneas 8-16), tendríamos un objeto monolítico. Eso hace que el código sea difícil de leer y, sobre todo, imposible de reutilizar.

* Las ventajas de separar en Interface Client e Interface Address:
    - Reutilización: ¿Qué pasa si mañana necesitas una clase Empleado que también vive en una dirección? Si tienes la interfaz Address por separado, simplemente haces: address: Address. No tienes que escribir los campos de dirección de nuevo!

    - Mantenibilidad: Si los requisitos de una dirección cambian (por ejemplo, ahora necesitamos agregar un campo país), solo editas la interfaz Address una vez, y automáticamente todos los objetos que la usan (Client, Empleado, Proveedor) se actualizan.

    - Legibilidad: Al ver la interfaz Client, entiendes rápidamente qué es un cliente, sin distraerte con los detalles de qué campos tiene una dirección.

Uso en la vida real:
En aplicaciones grandes, verás cientos de interfaces pequeñas que se combinan entre sí. Es como jugar con piezas de LEGO: construyes piezas pequeñas y sólidas (Address, ContactInfo, UserPreferences) para luego ensamblar objetos grandes y complejos (User, Admin, Customer).
*/


// Ejercicio
/**
    * Ejercicio: Biblioteca de Libros
    * Objetivo: Practicar interfaces anidadas y composición.
    * Pasos:
    * 1. Crear interface 'Autor' con 'nombre' y 'nacionalidad'.
    * 2. Crear interface 'Libro' con 'titulo' y 'autor'.
    * 3. Crear un objeto 'miLibro' de tipo 'Libro'.
    * 4. Muestra en consola el nombre del autor.
 */

interface Libro {
    titulo:string,
    autor: Autor,
}


interface Autor {
    nombre:string;
    nacionalidad:string;
}


const miLibro:Libro = {
    titulo: 'El señor de los anillos',
    autor:{
        nombre:'J. R. Tolkien',
        nacionalidad: 'británica'
    }
}

console.log(miLibro.autor.nombre);