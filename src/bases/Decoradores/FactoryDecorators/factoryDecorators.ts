// Factory Decorators

/*
    Los decoradores pueden ser funciones tradicionales (function) o funciones de flecha, pero por lo general se usan funciones tradicional para especificar aun mas que se trata de un decorador
*/

// Para que una funcion sea un Factory constructor debe retornar una funcion 

const printToConsoleConditional = (print:boolean = false):Function => {
    if(print){
        return () => console.log('Si')
    }else{
        return () => console.log('No')
    }
}

@printToConsoleConditional(false)
export class Pokemon2 {
    public publicApi:string = 'https://pokeapi.co';
    public name:string;
    
    constructor( name:string){
        this.name = name;
    }
}

/*
    Qué es?
        - Un Decorator Factory es simplemente una función que retorna otra función (el decorador real).

    Uso en la vida real:
        Esto es fundamental en frameworks como NestJS. Cuando escribes @Get('/usuarios'), en realidad estás usando un Decorator Factory. Ese /usuarios es un parámetro que le pasas a la fábrica para que el decorador sepa qué ruta configurar. Sin la "fábrica", no podrías personalizar el decorador con información externa.
    
    * Decorador simple: @decorador -> Se ejecuta directamente.

    * Decorator Factory: @decorador(parametros) -> La función se ejecuta, recibe los parámetros y retorna el decorador que finalmente afectará a la clase.
*/