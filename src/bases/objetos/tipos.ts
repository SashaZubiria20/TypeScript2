// Tipos personalizados


// Que pasa si necesitamos crear varios objetos que luzcan igual, es decir que tengan la misma firma (parametros tipados) y luego tuvieramos que cambiar uno de los parametros, deberiamos hacerlo en todos los objetos. 

let pedro: {name:string, age?:number, powers:string[], getName?: ()=> string} = {
    name: 'Pedro',
    age: 34,
    powers: ['Trepar', 'Volar']
}
console.log(pedro);

let susana: {name:string, age?:number, powers:string[], getName?: ()=> string} = {
    name: 'Susana',
    age: 20,
    powers: ['Caminar']
}
console.log(susana);

// Para solucionar esto podemos crear tipos personalizados, para definirlo usamos la palabra reservada type + nombre del tipo

type Hero = {
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
console.log(pablo.getName?.());



// Ejercicios
/**
    Necesitamos crear un sistema para registrar naves espaciales con una estructura común.

Define un type llamado Nave con la siguiente estructura:
nombre: string (obligatorio).
capacidadPasajeros: number (obligatorio).
tripulacion: number (obligatorio).
tipoMotor: string (opcional).
despegar: función que no recibe argumentos y devuelve un string.

Crea un objeto llamado halconMilenario basado en el tipo Nave:
Asígnale los valores que quieras (asegúrate de incluir el método despegar que retorne un mensaje).
Crea un objeto llamado cazaTie basado en el tipo Nave:
Esta nave no debe tener tipoMotor (practica la propiedad opcional).
Incluye su método despegar.
Muestra por consola el resultado del método despegar() de ambas naves.
*/

type Nave = {
    nombre: string,
    capacidadPasajeros: number,
    tripulacion: number,
    tipoMotor?: string,
    despegar: () => string
}

let halconMilenario: Nave = {
    nombre: 'Halcon Milenario',
    capacidadPasajeros: 20,
    tripulacion: 10,
    tipoMotor: '3.0',
    despegar(){
        return `${halconMilenario.nombre} despegando`
    }
}

let cazaTie: Nave = {
    nombre: 'caza Tie',
    capacidadPasajeros: 40,
    tripulacion: 15,
    despegar(){
        return `${cazaTie.nombre} despegando`
    }
}

console.log(halconMilenario.despegar?.());
console.log(cazaTie.despegar?.());