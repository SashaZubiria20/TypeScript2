// Clases

class Avenger {
    name:string;
    power:number;

    constructor(name:string, power:number){
        this.name = name,
        this.power = power
    }
}


const hulk = new Avenger('hulk', 10);
console.log(hulk);


/*
    - extends: Indica que FlyingAvenger es un tipo especial de Avenger.

    - super(): Es la forma de decirle a la clase padre: "Oye padre, ejecuta tu código de inicialización primero con estos valores".

    - this: Solo después de que super() termina de construir la parte "Avenger" del objeto, puedes empezar a construir la parte "Flying" asignando this.flying.


Consejo extra: Si tu clase hija no añade ninguna propiedad nueva al constructor, a veces puedes omitir el constructor de la clase hija, pero si añades una nueva propiedad (como flying), el super() es obligatorio.
*/

class FlyingAvenger extends Avenger {
    flying: boolean;

    constructor(name: string, power: number, flying: boolean) {
        // 1. Primero llamamos al constructor del padre
        super(name, power); 
        
        // 2. Recién ahora podemos usar 'this'
        this.flying = flying;
    }
}

const falcon = new FlyingAvenger('Falcon', 15, true)
console.log(falcon);

/*************/

/*
    Las clases pueden ser privadas (private), publicas (public) o estaticas (static) a la propiedad estatica se puede acceder haciendo referencia a la clase (no a la instancia) y con el .
*/


class Avenger2 {
    private name:string;
    public team:string;
    public realName?: string;
    static avgAge: number = 35;

    constructor (name:string, team:string, realName?:string){
        this.name = name,
        this.team = team,
        this.realName = realName
    }
}

const antman: Avenger2 = new Avenger2('Antman', 'Capitan', 'Juan');
console.log(antman);

/*
    Normalmente, cuando tú haces const antman = new Avenger2(...), estás creando una instancia (un objeto único basado en esa clase). Las propiedades como name o team son únicas para cada antman que crees.

    La palabra reservada static cambia esto:

    - Una propiedad static no pertenece a la instancia (al objeto antman), sino que pertenece a la clase misma.

    - Es como una propiedad "global" de todos los objetos que crees con esa clase.

    Para qué sirve?
        - Se usa para datos que son compartidos o constantes para todas las instancias de esa clase. Por ejemplo, en tu Avenger2, pusiste static avgAge: number = 35;. Eso significa que todos los Avengers comparten ese valor de "edad promedio".

    Cómo se accede?
        -   No puedes hacer antman.avgAge. Para acceder a una propiedad estática, siempre debes usar el nombre de la clase: console.log(Avenger2.avgAge);

    * Uso en la vida real:
        - Configuraciones: Una URL de API base que nunca cambia para todas las instancias.

        - Contadores: Si quisieras contar cuántos Avengers has creado en total, tendrías un static contador: number = 0 que aumentarías cada vez que llamas al constructor.

        - Utilidades: Métodos que no necesitan saber quién es el objeto, sino que hacen una tarea general.
*/