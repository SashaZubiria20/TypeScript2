// Genericios

/*
    Es generico porque recibe cualquier tipo de dato

    Un genérico es como una variable de tipo. Así como una función recibe datos en sus parámetros, los genéricos permiten que tu función o clase "reciba" un tipo de dato como parámetro. Usamos <T> (la T es por convención, significa "Type").

        - Preservas la información de tipos: Si le pasas un string, TypeScript sabe que sale un string. Si le pasas un Date, TypeScript sabe que sale un Date.

        - Reutilización: Escribes la lógica una sola vez, pero funciona con total seguridad para cualquier tipo de dato.

        * Uso en la vida real:
            Los genéricos son el pan de cada día en herramientas como React (para tipar props), Angular (en servicios y componentes) o al crear librerías. Si alguna vez ves Array<number> o Promise<string>, eso es un genérico en acción.
*/


/**** Funciones ****/

import { printObject, genericFunction, genericFunctionArrow } from "./funciones";
import type { Hero } from "./interface";
import type { Villain } from "./interface";
import type { Respuesta } from "./interface";


printObject(123);
printObject(new Date());
printObject({a:1, b:2, c:3});
printObject([1,2,3,4,5,6,7,8,9,10]);
printObject('Hola Mundo');

/*
    Con los generciso podemos especificarle a ts que la funcion puede recibir cualquier tipo de objeto y que la salida va a ser igual al mismo tipo de dato que recibe. O tambien podemos especificar que tipo debe regresar basado en el tipo que recibe
*/

//Funciones tradicionales:
const name:string = 'Juan';
console.log(genericFunction(3.141618).toFixed(2));
console.log(genericFunction(name).toUpperCase());
console.log(genericFunction(new Date()).getDate());

//Funciones de flecha
console.log(genericFunctionArrow(3.141618).toFixed(2));
console.log(genericFunctionArrow(name).toUpperCase());
console.log(genericFunctionArrow(new Date()).getDate());

// Ejercicio
/*
    Crea una función genérica llamada obtenerPrimerElemento.
    Debe recibir un argumento llamado lista que sea un arreglo del tipo genérico.
    Debe retornar el primer elemento de la lista (de tipo T).
    Prueba:
        Crea un arreglo de números y obtén el primer elemento.
        Crea un arreglo de strings y obtén el primer elemento.
        Verifica (poniendo el mouse encima de la variable resultante) que TypeScript sabe exactamente qué tipo de dato salió de la función.
*/

const numeros:number[] = [53,68,14,92,75];
const nombres:string[] = ['Pablo', 'Maria', 'Susana', 'Pedro'];

const obtenerPrimerElemento = <T> (lista:T[]) => {
    return lista[0];
} 

console.log(obtenerPrimerElemento(numeros));
console.log(obtenerPrimerElemento(nombres));



/**** Interfaces ****/

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Hero>(deadpool).realName);

const res1:Respuesta<number> = {
    datos:123
}
console.log(res1.datos);


const res2:Respuesta<string> = {
    datos: 'Hola'
}
console.log(res2.datos);