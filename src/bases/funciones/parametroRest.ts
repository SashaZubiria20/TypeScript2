// Parametro Rest

// Digamos que queremos que el primer argumento sea obligatorio, pero no sabemos cuantos argumentos mas vamos a tener, se usa el operaor spread operator (...) + el nombre que queramos darle y tiparlo como string
// restArg (resto de argumentos) al ser un array podemos usar sus metodos, en este caso el metodo join
const fullName = (firstName:string, ...restArgs:string[]): string => {
    return `${firstName} ${restArgs.join(' ')}`;
}


const superman = fullName ('Clark', 'Joseph', 'Kent');
console.log({superman})


/*
    - ¿Qué son los parámetros REST?
El operador REST (...) permite que una función acepte un número indefinido de argumentos. TypeScript los agrupa todos en un arreglo (array). Se define con tres puntos seguidos del nombre que quieras darle al parámetro, y es obligatorio que sea el último parámetro en la lista de argumentos de la función.

    - ¿Para qué sirven y cuándo se usan?
Sirven para cuando no sabes de antemano cuántos valores vas a recibir. Al ser un arreglo, tienes a tu disposición todos los métodos de los arrays (como join, map, filter, reduce, etc.).

    - Uso en la vida real:
Imagina una función de suma, o una función que concatena nombres (como tu ejemplo), o incluso una función que recibe una lista de etiquetas (tags) para un blog. Como el usuario podría enviarte una etiqueta o cincuenta, el parámetro REST es la solución perfecta para capturarlas todas sin tener que definir arg1, arg2, arg3... hasta el infinito.
*/


// Ejercicios
/**
    * Ejercicio: Suma Dinámica
    * Objetivo: Practicar parámetros REST.
    * Pasos:
    * 1. Crear función 'sumarNumeros' que reciba como parámetro REST    una lista de números.
    * 2. La función debe retornar la suma de todos los números  recibidos.
    * 3. Tipa el retorno de la función como 'number'.
    * 4. Invoca la función dos veces:
    *    a) Sumando: 1, 2, 3
    *    b) Sumando: 5, 10, 15, 20, 25
 */

const sumarNumeros = (...numeros: number[]): number => {
    return numeros.reduce((a, b) => a + b, 0);
};

console.log(sumarNumeros(1,2,3));
console.log(sumarNumeros(5, 10, 15, 20, 25));