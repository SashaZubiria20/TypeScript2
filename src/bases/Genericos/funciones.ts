// Funciones genericas


export const printObject = (argument:any) =>{
    console.log(argument);
}


// Funcion tradicional: para que sea generica, solo debemos poner el tipo de dato generico, entre llaves de mayor y menor <T>, justo despues del nombre de la funcion, podemos usar cualquier nombre pero por convencion se usa la T. Este tipo de dato va a ser el mismo tipo del argumento
export function genericFunction<T> (argument:T){
    return argument;
}


// Funcion de Flecha: El tipo de dato generico se define justo antes de los argumentos.
export const genericFunctionArrow = <T> (argument: T) => argument;