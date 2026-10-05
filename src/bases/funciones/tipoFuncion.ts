// Tipos de funciones


/*
    En TypeScript, una función es un tipo de dato en sí mismo. Igual que puedes decir que una variable es number o string, puedes decir que una variable es de tipo "Función que recibe un número y devuelve un string".

    - ¿Para qué sirve?
    Sirve para definir un contrato. Cuando tipas una variable como una función, le estás diciendo a TypeScript: "Esta variable solo puede almacenar funciones que cumplan exactamente con esta firma (parámetros y tipo de retorno)".

    - ¿Cuándo se usa?
    Se usa principalmente para:
    - Callbacks: Cuando pasas una función como argumento a otra función y quieres asegurarte de que la función que recibes tenga la estructura correcta.

    -Definiciones de API: Cuando diseñas interfaces donde sabes que vas a necesitar una función, pero no la implementas inmediatamente.

    -Flexibilidad: Como viste en el ejemplo del profe, puedes hacer que una variable myFunction cambie su comportamiento (primero guardar greet, luego saveTheWorld) siempre y cuando ambas funciones cumplan con la misma estructura.
*/


//
const addNumbers = (a:number, b:number): number => a+b;
//
const greet = (name: string): string => `Hola ${name}`;
//
const saveTheWorld = ():string => `El mundo esta salvado`;

// let myFunction: (y:number, z:number) => number;
let myFunction: (y:string) => string;
//myFunction=10;
//console.log(myFunction);

/*
myFunction = addNumbers;
console.log(myFunction(1,2));
*/


myFunction = greet;
console.log(greet('1'));

myFunction = saveTheWorld;
console.log(saveTheWorld());


// Ejercicios

/*
    * Ejercicio: El Operador Calculadora
    * Objetivo: Practicar el tipado de funciones.
    * Pasos:
    * 1. Definir una variable llamada 'operacion' cuyo tipo sea una función que reciba dos números y devuelva un número.
    * 2. Crear una función 'sumar' (recibe dos números, devuelve suma).
    * 3. Crear una función 'multiplicar' (recibe dos números, devuelve  multiplicación).
    * 4. Asignar 'sumar' a 'operacion' y probarla.
    * 5. Asignar 'multiplicar' a 'operacion' y probarla.
 */

let operacion: (a:number, b:number) => number;

const sumar = (c:number, d:number) => c+d; 
const multiplicar = (e:number, f:number) => e*f; 

operacion = sumar;
console.log(operacion(3,4));
operacion = multiplicar;
console.log(operacion(7,2));