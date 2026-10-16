// Get y Set


/*
    Son como metodos internos de las clases, se puede ejecutar logica dentro de ellos.

    -Get: Deben regresar un valor return, no se ejecutan como un metodo, simplemente se llaman. No recibe argumento
    -Set: No regresa nada y Recibe un solo argumento
*/

class Avenger {
    public name:string;
    public realName: string;

    constructor (name:string, realName:string) {
        this.name = name,
        this.realName = realName
    }

    protected getFullname (){
        return `${this.name} ${this.realName}`;
    }
}


class Xmen extends Avenger {
    public isMutant:boolean;

    constructor (name:string, realName:string, isMutant:boolean) {
        super(name, realName);
        this.isMutant = isMutant;
    }

    getFullnameDesdeXmen () {
        return super.getFullname();
    }

    get fullName(){
        return `${this.name} - ${this.realName}`;
    }

    set fullName(name:string){
        if(name.length<3){
            throw new Error('El nombre debe ser mayor de 3 letras')
        }
        this.name = name;
    }
}

const wolverine = new Xmen('Wolverine', 'Logan', true);
console.log(wolverine.fullName);

wolverine.fullName = 'Juan';
console.log(wolverine.fullName);

/*
    Qué son?
        Imagina que un get y un set son como un portero o guardia de seguridad de una propiedad privada. En lugar de que cualquier persona (u otro código) toque directamente una variable, pasa a través de estos "porteros" para verificar si está permitido.

    - get (El Observador): Te permite acceder a una propiedad como si fuera una variable normal (sin paréntesis), pero por dentro ejecuta toda la lógica que tú quieras antes de devolver el valor.

    -set (El Validador): Te permite asignar un valor a una propiedad como si fuera una variable normal (objeto.propiedad = valor), pero antes de guardar nada, puedes ejecutar lógica para validar si el valor es correcto.

Para qué sirven y cuándo se usan?
    - Encapsulamiento: Ocultas cómo se almacena el dato realmente.
    - Validación: Como hiciste en tu set fullName, puedes lanzar un error si alguien intenta poner un nombre inválido.
    - Formateo: Puedes hacer que el get devuelva el nombre siempre en mayúsculas sin importar cómo se guardó originalmente.

Uso en la vida real:
En una app bancaria, nunca permitirías que alguien haga cuenta.saldo = -5000000. Usarías un set saldo(valor) que verifique si el usuario tiene fondos suficientes o si la operación es lógica antes de aceptar el cambio.
*/


// Ejercicio
/**
    * Ejercicio: Control de Acceso
    * Objetivo: Practicar el uso de get y set.
    * Pasos:
    * 1. Crear clase 'Usuario' con una propiedad privada    '_estaConectado' (boolean).
    * 2. Crear un 'get' llamado 'estado' que retorne: "Usuario  conectado" o "Usuario desconectado".
    * 3. Crear un 'set' llamado 'estado' que reciba un boolean:
    *    - Si recibe 'true', cambiar '_estaConectado' a true y mostrar  "Usuario ha iniciado sesión".
    *    - Si recibe 'false', cambiar '_estaConectado' a false y    mostrar "Usuario ha cerrado sesión".
    * 4. Probar llamando a 'usuario.estado = true' y luego consultando  'usuario.estado'.
 */

class Usuario {
    public name:string;
    private estaConectado:boolean;

    constructor(name:string, estaConectado:boolean){
        this.name = name,
        this.estaConectado = estaConectado
    }

    get estado():string {
        if(this.estaConectado == false){
            return 'Usuario desconectado';
        }else{
            return 'Usuario  conectado'
        }
    }

    set estado(estado:boolean){
        if(estado == false) {
            this.estaConectado = false;
            console.log('Usuario ha cerrado sesión')
        }else{
            this.estaConectado = true;
            console.log('Usuario ha iniciado sesión')
        }
    }
}

const user1 = new Usuario('Juan', true);

// 1. Probando el GET 
console.log(user1.estado); 

// 2. Probando el SET
user1.estado = false; 

// 3. Probando el GET de nuevo para ver el cambio
console.log(user1.estado);
