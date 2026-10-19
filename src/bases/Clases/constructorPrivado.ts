// Constructores Privados

/*
    Sirven para controlar la manera en que las instancias son ejecutadas

    permite que el constructo solo sea llamado dentro de la misma clase, no por fuera

    Se usa cuando quieres asegurarte de que de una clase solo pueda existir una única instancia en toda tu aplicación. Por ejemplo, una conexión a una base de datos, un gestor de configuración global, o un servicio de logging centralizado. No quieres 10 conexiones a la base de datos abiertas, quieres una sola que todos compartan.
    
    En el desarrollo moderno, muchas veces esto se resuelve con módulos de ES6 (si exportas un objeto constante, ese objeto es un singleton por naturaleza), pero en arquitectura de software profesional, el patrón Singleton sigue siendo un estándar.
*/

class Apocalipsis {
    public name:string;

    // Se crea una instancia del mismo tipo de la clase (Apocalipsis)
    static instance:Apocalipsis;

    // Ponemos el constructor privado
    private constructor (name:string) {
        this.name = name
    }

    /* Creamos un metodo estatico que permita crear el apocalipsis, tambien del mismo tipo de la clase (Apocalipsis)
    Preguntamos con un if si en la instancia existe o no, si no existe lo creamos, si existe lo retornamos
    */
    static callApocalipsis (): Apocalipsis {
        if (!Apocalipsis.instance){
            Apocalipsis.instance = new Apocalipsis ('Soy apocalipsis.. el único')
        }
        return Apocalipsis.instance
    }
}

// No creamos una nueva instancia, llamamos la clase como tal y llamamos al metodo
const apocalipsis1 = Apocalipsis.callApocalipsis();
const apocalipsis2 = Apocalipsis.callApocalipsis();
const apocalipsis3 = Apocalipsis.callApocalipsis();
console.log(apocalipsis1, apocalipsis2, apocalipsis3);


/*
    El patrón Singleton (Constructor privado) hace tres cosas para lograr su objetivo:

    - private constructor: Al ponerle private, le quitas a los demás programadores (y a ti mismo) el derecho de hacer new Apocalipsis(). Si intentas hacer new afuera, el compilador te gritará.

    - static instance: Guardamos la única copia permitida del objeto en una propiedad estática de la clase.

    - static callApocalipsis(): Es la única puerta de entrada. Es un método estático que dice: "Si alguien ya pidió una instancia, dale la que ya existe. Si nadie la ha pedido todavía, créala por primera vez (usando el constructor privado) y entrégala".

    * En resumen: Es una forma de decir: "Esta clase es tan especial que no quiero que nadie cree copias por error; yo controlo cuándo se crea y siempre entregaré la misma instancia".
*/