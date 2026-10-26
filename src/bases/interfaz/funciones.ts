// Interfaces en funciones

/*
    Las interfaces sirven para restringir una funcion, o para definir como queremos que sea una funcion

    Es una forma de establecer una "firma" o "molde" para las funciones. A diferencia de un type que es un alias, la interface define la estructura de entrada y salida que una función debe cumplir si quiere ser asignada a una variable específica.

    Al declarar una interfaz con una estructura de función:

    interface miInterfaz {
        (parametro: tipo): tipoRetorno;
    }

    Estás creando una regla: "Cualquier variable que use este nombre debe ser una función con estos parámetros y este retorno".
*/

interface addTwoNumbers {
    (a:number, b:number):number;
}

let addNumbersFunction: addTwoNumbers;

addNumbersFunction = (a:number, b:number):number =>{
    return a+b;
}

console.log(addNumbersFunction(1,2))

/*
    * Diferencia clave con las funciones normales:
        - Función normal: Tú escribes la lógica y TypeScript infiere el tipo.
        - Interface para función: Tú dictas las reglas desde afuera (el contrato) y la función está obligada a cumplirlas.

    * Para qué sirve en la vida real?
        - Se usa principalmente cuando trabajas con callbacks (funciones que pasas como argumento a otras). Por ejemplo, si tienes una función procesar(callback: miInterfaz), te aseguras de que el usuario no te pase cualquier cosa, sino estrictamente una función que sepa manejar los parámetros que tú esperas.

    * Cuándo usar interface en lugar de type para funciones?
        - En este caso puntual (funciones), type e interface son casi idénticos en capacidad. Se prefiere interface por una cuestión de estilo y coherencia si todo tu proyecto se basa en interfaces, pero a nivel funcional, ambos cumplen el mismo rol de dictar el contrato.
*/