// Parametros requeridos para las funciones

/*
    Cuando definimos la funcion de esta manera, especificando los parametros con sus tipos de datos, a la hora de utilizarla, estos parametros son obligatorios
*/
const fullName = (firstName:string, lastName:string): string => {
    return `${firstName} ${lastName}`
}

const name = fullName('Tony', 'Stark');
console.log({name})


/*
    - ¿Qué son los parámetros obligatorios?
En TypeScript, cuando defines una función y declaras sus parámetros (como hiciste con firstName: string y lastName: string), el compilador asume por defecto que son obligatorios. Esto significa que si intentas llamar a la función sin pasarle exactamente esos dos argumentos, TypeScript lanzará un error de compilación inmediatamente.

    - ¿Para qué sirven y cuándo se usan?
Sirven para garantizar la integridad de tu lógica. Si tu función fullName necesita obligatoriamente un nombre y un apellido para funcionar, TypeScript te protege de "olvidar" pasar uno de los dos. Es la forma más segura de programar: si el dato es vital, el compilador no te dejará avanzar si no lo envías.

    - Uso en la vida real:
Se usan siempre que tu función no pueda realizar su tarea sin la información completa. Por ejemplo, al crear un usuario en una base de datos, si el email y la password son obligatorios, los definimos así para evitar errores de lógica en el futuro (como intentar guardar un usuario vacío).
*/


// Ejercicios
/**
    * Ejercicio: Calculadora de Salario
    * Objetivo: Crear una función con parámetros obligatorios.
    * Pasos:
    * 1. Crear función 'calcularSalario' con parámetros 'salarioBase'   (number) e 'impuestos' (number).
    * 2. Retornar el resultado de la resta: salarioBase - impuestos.
    * 3. Especificar el tipo de retorno de la función.
    * 4. Mostrar el resultado por consola llamando a la función.
 */

const calcularSalario = (salarioBase:number, impuestos:number):  number => {
    return salarioBase-impuestos;
}

const total = calcularSalario(100,10);
console.log(total);