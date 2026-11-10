// Decoradores de Propiedades


// Creamos un decorador que permita dejar una propiedad publica pero que nadie la pueda modificar, puede recibir por parametro (target y propertyKey). Cuando decoramos una propiedad, lo que retornamos es conocido como un PropertyDescriptor
function readonly(isWritable:boolean = true):Function {
    return function(target:any, propertyKey:string){
        const descriptor: PropertyDescriptor ={
            get(){
                console.log(this)
                return 'Sasha'
            },
            set(this, val){
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })

            }
        }
        return descriptor;
    }
}


export class Pokemon5 {
    @readonly()
    public publicApi:string = 'https://pokeapi.co';
    public name:string;
    
    constructor( name:string){
        this.name = name;
    }

    savePokemonToDB(id:number){
        console.log(`Pokemon guardado en DB ${id}`)
    }
}

/**
 * NOTA TÉCNICA:
 * Aunque aquí practicamos la creación de decoradores de propiedad para entender la metaprogramación en TS, en la vida real (2026+) se recomienda el uso de la palabra reservada 'readonly' de TypeScript.

 * ¿Por qué?
        1. Es nativa: No requiere lógica compleja de PropertyDescriptor.
        2. Es segura: TypeScript garantiza en tiempo de compilación que no se modifique.
        3. Es estándar: Todo desarrollador TS entiende 'readonly' instantáneamente.

 * Ejemplo: public readonly nombre: string = 'Sasha';
 */