// Parametros opcionales para las funciones

// Para hacer que el argumento sea opcional debemos colocar un simbolo de ? despues del nomnre del parametro, en este caso el segundo parametro aparecera como undefined, o podemos usar el operador || en el return y poner lo que necesitemos

const fullName = (firstName:string, lastName?:string): string => {
    //return `${firstName} ${lastName}`
    return `${firstName} ${lastName || '---'}`;
}

const name = fullName('Tony',);
console.log({name});

/*
    - ¿Qué son los parámetros opcionales?
Como viste en el código del profesor, al colocar el símbolo de interrogación ? después del nombre de un parámetro (por ejemplo: lastName?: string), le estás diciendo a TypeScript: "Este valor puede venir o puede no venir". Si no viene, su valor será undefined.

    - ¿Para qué sirven y cuándo se usan?
Sirven para dar flexibilidad a tus funciones. Se usan cuando un dato es útil pero no estrictamente necesario para que la lógica principal se ejecute. Por ejemplo, en un registro de usuarios, el segundoNombre es opcional, pero el apellido sí es obligatorio.

    - Uso en la vida real:
Imagina una función que genera una notificación. Quizás el mensaje es obligatorio, pero un icono o un tiempoDeDuracion son opcionales. Si el usuario no los proporciona, tu función simplemente usa valores por defecto o los ignora, evitando que el código falle por falta de datos.
*/


// Ejercicios
/**
    * Ejercicio: Buscador de Personajes
    * Objetivo: Practicar parámetros opcionales.
    * Pasos:
    * 1. Crear función 'buscarPersonaje' con 'nombre' (string) obligatorio y 'edad' (number) opcional.
    * 2. Si la edad existe, retornar: "Personaje [nombre] de [edad] años encontrado".
    * 3. Si la edad NO existe, retornar: "Personaje [nombre] encontrado (edad desconocida)".
    * 4. Invoca la función dos veces: una enviando edad y otra sin enviarla.
 */

const buscarPersonaje = (nombre:string, edad?:number) =>{
    if(edad !== undefined) {
        return `Personaje ${nombre} de ${edad} años encontrado`
    }else{
        return `Personaje ${nombre} encontrado (edad desconocida)`
    }
}

console.log(buscarPersonaje('Juan', 38));
console.log(buscarPersonaje('Pepe'));