// Import - Export


/*
    export: Cuando escribes export delante de una clase, función o variable, le estás diciendo a los demás archivos: "Esta pieza de código es pública, cualquiera puede usarla".
    Es decir, lo podemos usar en cualquier otro archivo con la palabra reservada import
*/

export class Hero {
    public name: string;
    public powerId: number;
    public age: number;

    constructor(name:string, powerId:number, age:number){
        this.name = name,
        this.powerId = powerId
        this.age = age
    }
}

/*
    export class Hero: Permite que otros archivos importen esta clase.

    Si no pones export: Esa pieza de código es privada para ese archivo. Nadie más puede verla. Es la mejor forma de proteger tu lógica interna.
*/

/*
    * Diferencia entre Namespaces e Imports/Exports:

        - Namespaces: Intentaban agrupar todo en un "nombre" gigante y global. Si dos librerías usaban el mismo nombre de namespace, se generaba un conflicto (choque de nombres).

        - Imports/Exports: Cada archivo es su propio "mundo" (su propio módulo). Si tú exportas Hero y otra librería también tiene un Hero, no chocan, porque tú decides cómo llamar a la variable en tu archivo al importarla (import { Hero as SuperHero } ...). Es mucho más seguro!
*/