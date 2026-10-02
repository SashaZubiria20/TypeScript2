// Parametros por defecto de las funciones

// Un argumento requerido como en este caso upper no puede ir despues de un argumento opcional como lastName. Entonces para qeu quede por defecto lo igualamos a false

const fullName = (firstName:string, lastName?:string, upper: boolean = false): string =>{
    if(upper){
        return `${firstName} ${lastName}`.toUpperCase();
    }else{
        return `${firstName} ${lastName}`;
    }
}

const name = fullName('Tony', 'Stark', true);
console.log({name});

/*
    - ¿Qué son los parámetros por defecto?
Es una técnica que nos permite asignar un valor inicial a un parámetro en caso de que este no sea enviado al llamar a la función. En tu código, upper: boolean = false significa: "Si el usuario no envía el tercer argumento, asume que es false automáticamente".

    - ¿Para qué sirven y cuándo se usan?
Sirven para evitar que el parámetro tome el valor undefined y para simplificar las llamadas a la función. Se usan cuando tienes un valor "predeterminado" lógico para tu aplicación.

    - Uso en la vida real:
Imagina una configuración de usuario: configurarTema(color: string = 'claro'). Si el usuario no elige un tema, tu sistema automáticamente le pone el tema 'claro' por defecto. Esto hace que tu código sea mucho más resiliente y menos propenso a errores por valores faltantes.

    - Regla de oro de los parámetros:
Fíjate que en tu función pusiste lastName (opcional) antes que upper (por defecto). Esto es vital: los parámetros opcionales y por defecto siempre deben ir al final. Si pones un parámetro obligatorio después de uno opcional, TypeScript se confundirá al intentar asignar los argumentos.
*/


// Ejercicios
/**
    * Ejercicio: Configurador de Servidor
    * Objetivo: Practicar parámetros por defecto.
    * Pasos:
    * 1. Crear función 'iniciarServidor' con 'puerto' (number = 8080) y    'entorno' (string = 'desarrollo').
    * 2. Retornar un mensaje: "Servidor iniciado en el puerto [puerto]     en modo [entorno]".
    * 3. Invocar la función dos veces:
    *    a) Sin enviar argumentos (para ver los valores por defecto).
    *    b) Enviando '3000' y 'producción'.
 */

const iniciarServidor = (puerto:number=8080, entorno:string='desarrollo') => {
    return `Servidor iniciado en el puerto ${puerto} en modo ${entorno}`;
}

console.log(iniciarServidor());
console.log(iniciarServidor(2020, 'practica'));