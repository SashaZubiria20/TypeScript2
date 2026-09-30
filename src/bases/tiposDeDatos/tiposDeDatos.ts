// Tipos de datos

/*
    * Primitivos:
        - string
        - number
        - boolean
        - symbol
        - null
        - undefined
    
    * Compuestos:
        - Objetos literales
        - Funciones
        - Clases
        - Arreglos

    * ts nos permite crear nuestros propios tipos de datos
        - Nuevo tipo de dato
        - Interfaces
        - Genericos
        - Tuplas ()
    
    En constantes o variables, hay que declarar que tipo de dato llevan, y se hace justo despues del nombre, poniendo los : y especificando el tipo de dato.

    Documentacion oficial: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

*/

const msg: string = 'Hola mundo';
console.log(msg);

/*
    * Inferir tipos: Siemre es recomendable asignarle el tipo de dato para que a la hs de trabajar con el, ts pueda ayudarnos y ademas para que quien vea el codigo sepa que tipo de datos usamos.
*/

function sayHello (msg: string) {
    console.log(msg);
    // msg.
}
sayHello('Sasha');


/******/
// Booleans
let isSuperman: boolean = true;
let isBatman: boolean = false;
console.log(isSuperman);
console.log(isBatman);
console.log({isBatman});


/******/
// Numbers
let avengers: number = 10;
const villians: number = 20;
console.log(avengers);
console.log(villians);


/******/
// String
const batman: string = 'Batman';
const linternaVerde: string = "Linterna Verde"
const volcanNegro: string = `Volcan Negro`
console.log(batman);
console.log(linternaVerde);
console.log(volcanNegro);
console.log(`I'm ${batman}`);
// En este caso el ? (null check) significa si en la posicion 11 batman tiene algo entonces has el toUpperCase, sino no hagas nada
console.log(batman[10]?.toUpperCase() || 'No esta presente');


/******/
// Any: Se trata de usar lo menos posible, al ser any puede contener cualquier tipo
let personaje: any = 123;
console.log(personaje);

// Al ser de tipo any se puede modificar el valor
personaje = 'hola'
console.log(personaje);

// Tambien podemos castearlo para poder usar los metodos
console.log((personaje as string).toUpperCase());

// si declaramos con let pero no establecemos ningun valor, por defecto es any, arroja undefined
let exists;
console.log(exists);

// Al ser constante debe estar inicializada sino dara error
//const power;


/******/
// Arrays / Areglos
const numbers = [1,2,3,4,5,'6',7,8,9,10];
// numbers.push(true);
numbers.push(11);
numbers.push('11');
console.log(numbers);

// Especificando el tipo
const numbers2: (string|number|boolean) []= [1,2,3,4,5,'6',7,8,9,10];
numbers2.push(true);
console.log({numbers2});

const numbers3: number[] = [1,2,3,4];
console.log(numbers3);


/******/
// Tuples - Tuplas: Se definen los tipos de datos que en cada posicion
const hero: [string, number] = ['Dr Strange', 100];
// hero[0] = 50;
hero[1] = 50;
console.log(hero);


/******/
// Enums - Enumeraciones: Permiten tener un sentido semantico para establecer valores
/*
enum AudioLevel {
    min,
    medium,
    max
}
const currentAudio = AudioLevel.medium;
console.log(currentAudio);
*/

// Como enum es solo de ts, actualmente se usa un objeto casteado
const AudioLevel1 = {
    min: 1,
    medium: 5,
    max: 10
} as const;
console.log(AudioLevel1);


/******/
// Void - vacio: Indica que una función no devuelve ningún valor (o que su retorno no nos interesa) arroja undefined
// null no es lo mismo qeu undefined
const callBatman = (): void =>{

}
const a = callBatman();
console.log(a);


/******/
// Never - nunca: Indica que una función jamás debe terminar su ejecución normalmente
/*
const error = (message: string):never => {
    throw new Error(message)
}
error('Auxilio');
*/

// Despues de esta funcion el codigo no se seguira ejecutando


/******/
// Null y Undefined:
let nada: undefined = undefined;
console.log(nada);

// Si por alguna razon necesitamos que a pesar de ser un booleano pueda tener un valor de undefined, lo podemos especificar explicitamente
let isActive: (boolean|undefined) = undefined;
console.log(isActive);

/*
* undefined
    - Qué es: Significa que una variable ha sido declarada, pero aún no tiene ningún valor asignado. Es el estado "por defecto" en JavaScript.
    - Cuándo se usa: Cuando querés decir que algo "aún no está definido".
    - Por qué: Es la forma en la que JS nos avisa que nos olvidamos de inicializar algo.

* null
    - Qué es: Representa la ausencia intencionada de un valor. Es un valor que vos asignás manualmente para indicar que "esto está vacío" o "no tiene nada".
    - Cuándo se usa: Cuando querés limpiar una variable o cuando un objeto no tiene un valor real (por ejemplo, si buscas un elemento en el DOM y no existe, devuelve null).
    - Por qué: A diferencia de undefined, null es algo que el programador elige poner.

* void
    - Qué es: Representa la ausencia de un valor de retorno en una función.
    - Cuándo se usa: Exclusivamente en funciones que ejecutan una acción pero no devuelven nada (return vacío o inexistente).
    - Por qué: Para que TypeScript sepa que, si intentás guardar el resultado de esa función en una variable, no vas a obtener nada útil.

* never
    - Qué es: Representa un valor que nunca jamás ocurrirá.
    - Cuándo se usa: En funciones que siempre lanzan un error (throw) o que entran en un bucle infinito (como un while(true)).
    - Por qué: Para avisarle a TypeScript que el código debajo de esa función es inalcanzable. Es una forma de decirle al compilador: "esta función rompe el flujo del programa".
*/