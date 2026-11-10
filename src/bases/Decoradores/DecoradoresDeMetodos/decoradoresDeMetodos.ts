// Decoradores de Metodos


/*
    * Mientras que los decoradores de clase sirven para "encerrar" toda la clase, los decoradores de método sirven para "interceptar" una función específica.

    * Para qué sirve?
    Es el uso más común en la vida real para:

        - Validación de parámetros: Antes de que el código del método se ejecute, el decorador puede revisar si el id es mayor a 0. Si no lo es, cancela la ejecución.

        - Logging automático: Cada vez que alguien llame a savePokemonToDB, quieres que quede un registro en el servidor sin tener que escribir console.log dentro de cada método de tu app.

        - Medición de rendimiento: Puedes crear un decorador @MeasureTime() que te diga exactamente cuántos milisegundos tardó en ejecutarse esa función.
*/

const printToConsoleConditional2 = (print:boolean = false):Function => {
    if(print){
        return () => console.log('Si')
    }else{
        return () => console.log('No')
    }
}


const bloquearPrototipo = function (constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}


// Este decorador nos permitiria validar que el pokemon este entre un rango, cuando el decorador es para un metodo, puede recibir por parametro (target, propertyKey y descriptor)
function checkValidPokemonId(){
    return function(target:any, propertyKey:string, descriptor: PropertyDescriptor){

        const originalMethod = descriptor.value;

        console.log(target);
        console.log(propertyKey);

        descriptor.value = (id: number) => {
            if(id<1 || id>800){
                return console.error('El id del pokemon debe estar entre 1 y 800');
            }else{
                return originalMethod(id);
            }
        }
    }
}

@bloquearPrototipo
@printToConsoleConditional2(false)
export class Pokemon4 {
    public publicApi:string = 'https://pokeapi.co';
    public name:string;
    
    constructor( name:string){
        this.name = name;
    }

    @checkValidPokemonId()
    savePokemonToDB(id:number){
        console.log(`Pokemon guardado en DB ${id}`)
    }
}


/*
    Qué es ese descriptor que te sale?
        Es la parte más importante. El descriptor es un objeto que contiene la definición de la función. Si modificas descriptor.value, puedes reemplazar la función original por otra función que haga cosas extra (por ejemplo, validar algo y luego llamar al original).



    target, propertyKey, descriptor: Son los 3 argumentos mágicos que TypeScript pasa automáticamente a cualquier decorador de método.

    - target: Es la clase donde vive el método.
    - propertyKey: Es el nombre del método ("savePokemonToDB").
    - descriptor: Es el "cajón" donde vive la función original.



    const originalMethod = descriptor.value;: Aquí estamos guardando una copia de la función original en una variable, antes de reemplazarla. ¡Esto es vital! Si no la guardamos, perderíamos la lógica original del método para siempre.



    descriptor.value = (id: number) => { ... }: Aquí está el "hack". Estamos sobrescribiendo el método original con una nueva función que tú acabas de crear.

        - Tu nueva función primero hace el if (id < 1 || id > 800).

        - Si está mal, lanza el error y no llama a la función original.

        - Si está bien, hace return originalMethod(id). ¡Aquí es donde finalmente llamas a la lógica original!

    Por qué es tan potente?
        Porque ahora, si tienes 50 métodos que necesitan validar un ID, no tienes que escribir el if 50 veces. Solo decoras cada método con @checkValidPokemonId() y listo. El decorador se encarga de proteger a todos los métodos por igual.
*/