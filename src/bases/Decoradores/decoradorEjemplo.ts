// Ejemplo de decorador - Bloque prototipo de clase


const printToConsoleConditional2 = (print:boolean = false):Function => {
    if(print){
        return () => console.log('Si')
    }else{
        return () => console.log('No')
    }
}


// Esta funcion la usaremos como decorador para prevenir que alguien haga una expansion de propiedades o metodos de una clase
const bloquearPrototipo = function (constructor: Function) {
    Object.seal(constructor); // Previene la modificacion de los atributos o propiedades existentes y previene que se adicionen nuevas propiedades
    Object.seal(constructor.prototype);
}


@bloquearPrototipo
@printToConsoleConditional2(true)
export class Pokemon3 {
    public publicApi:string = 'https://pokeapi.co';
    public name:string;
    
    constructor( name:string){
        this.name = name;
    }
}

/*
    * Protección de código: En librerías muy grandes, a veces no quieres que otros desarrolladores extiendan tus clases de formas inesperadas. El decorador es la herramienta que usas para cerrar esas puertas.

    * Control de integridad: Object.seal y Object.freeze dentro de decoradores aseguran que la estructura de tu clase se mantenga intacta durante todo el ciclo de vida de la aplicación.

    * El poder de la configuración: Fíjate que el decorador "vive" en un archivo, pero afecta a la clase en otro archivo distinto. Esa es la potencia de los decoradores: puedes inyectar lógica de seguridad o configuración de forma declarativa (con el @).
*/