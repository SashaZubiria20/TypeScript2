// Funciones

const hero: string = 'Flash';

// Se especifica el tipo de dato que devuelve despues del nombre de la funcion
function returnName():string {
    return hero;
}
console.log(returnName());


/*****/
const activateBatisignal = () => {
    return 'Batiseñal activada';
}

// Podemos comprobar el tipo de dato que devuelve
console.log(typeof activateBatisignal);

// pero es recomendable especficar el tipo de dato
const activateBatisignal2 = ():string => {
    return 'Batiseñal activada';
}

console.log(activateBatisignal2());



// Ejercicios
/*
    * Ejercicio: Gestión de Misiones
    * Objetivo: Practicar la creación de funciones con parámetros   tipados y retorno explícito.
    * Pasos:
    * 1. Definir función con dos parámetros (string y number).
    * 2. Especificar tipo de retorno de la función.
    * 3. Utilizar template literals para mostrar el resultado.
 */

const asignarMision = (nombreHeroe:string, nivelPeligro:number):string =>{
    return `El héroe ${nombreHeroe} he sido asignado a una misión de nivel ${nivelPeligro}`
}
console.log(asignarMision('Pepe', 10));