// Clases Abstractas

/*
    Sirven para crear otras clases o asegurarnos de que otras clases implementen lo que esperamos
*/

abstract class Mutante {
    public name: string;
    public realName:string;

    constructor (name:string, realName:string){
        this.name = name,
        this.realName = realName
    }
}


// De todas formas, cada clase que creemos, extendida de una clase abtracta puede tener sus propios metodos
class Xmen extends Mutante {
    salvarMundo () {
        return 'Mundo a salvo';
    }
}
class Villian extends Mutante {
    conquistarMundo () {
        return 'Mundo consquistado';
    }
}

const wolverine: Xmen = new Xmen ('Wolverine', 'Logan');
const magneto: Villian = new Villian ('Magneto', 'Magnus');
console.log(wolverine.salvarMundo);
console.log(magneto.conquistarMundo);


// Puede servir para especificar que estamos esperando un argumento, objeto o clase que contenga ese tipo o que haya sido extendido de ese ripo
const printName = (character:Mutante) =>{
    console.log(character.realName)
}

printName(wolverine);

/*
    Una clase marcada con abstract es una clase que no puede ser instanciada. Es decir, no puedes hacer const mutante = new Mutante(). ¿Por qué? Porque una clase abstracta es una plantilla incompleta. Está diseñada para servir exclusivamente como clase padre (para ser extendida).

    Para qué sirven?
        - Definir una base común: Sirven para obligar a las clases hijas a seguir una estructura.

        - Seguridad: Aseguran que el programador no cree objetos genéricos (no quieres un "mutante" genérico, quieres un "Xmen" o un "Villano").

        - Polimorfismo: Como viste en tu función printName(character: Mutante), puedes recibir cualquier cosa que "extienda" de Mutante. No te importa si es Xmen o Villan, mientras sea un Mutante, la función sabe que tendrá la propiedad realName.

    Uso en la vida real:
    Imagina un sistema de pagos. Podrías tener una clase abstracta MetodoDePago. No puedes "hacer un pago" con un "método de pago genérico", pero sí puedes extenderlo a PagoConTarjeta o PagoConPayPal. La clase abstracta te garantiza que tanto la tarjeta como PayPal tengan métodos obligatorios como procesarPago().
*/

// Ejercicio
/**
    * Ejercicio: Sistema de Vehículos
    * Objetivo: Practicar clases abstractas.
    * Pasos:
    * 1. Crear clase abstracta 'Vehiculo' con 'marca'.
    * 2. Crear un método abstracto 'arrancar()' que no devuelve nada.
    * 3. Crear clase 'Auto' que extiende de 'Vehiculo':
    *    - Debe implementar 'arrancar()' mostrando "El auto [marca] está encendiendo el motor".
    * 4. Crear clase 'Bicicleta' que extiende de 'Vehiculo':
    *    - Debe implementar 'arrancar()' mostrando "La bicicleta    [marca] comienza a pedalear".
    * 5. Crear una función 'iniciarViaje' que reciba un argumento de tipo 'Vehiculo' y llame a 'arrancar()'.
 */

abstract class Vehiculo {
    public marca:string;
    
    constructor(marca:string){
        this.marca = marca
    }

    abstract arrancar():string;
}

class Auto extends Vehiculo {
    arrancar(): string {
        return `El auto ${this.marca} está encendiendo el motor`
    }
}

class Bicicleta extends Vehiculo {
    arrancar(): string {
        return `La bicicleta ${this.marca} comienza a pedalear`
    }
}

const auto1: Auto = new Auto ('Toyota');
const bici1: Bicicleta = new Bicicleta('Tomaselli');

const iniciarViaje = (vehiculo:Vehiculo) =>{
    console.log(vehiculo.arrancar())
}

iniciarViaje(auto1);
iniciarViaje(bici1);