// Metodos privados y publicos

/*
    Los metoso son funciones que pertenecen a una Clase.
    Pueden ser publicos o privados
    Tambien tenemos metodos estaticos, que solo se pueden usar en la clase no la en la instacia qeu creemos de la misma
*/


class Avenger {
    private name:string;
    public team:string;
    public realName?: string;
    static avgAge: number = 35;
    static getAvgAge(){
        return this.name
    }

    constructor (name:string, team:string, realName?:string){
        this.name = name,
        this.team = team,
        this.realName = realName
    }

    public /*private*/  bio(){
        return `${this.name} (${this.team})`;
    }
}

const antman: Avenger = new Avenger('Antman', 'Capitan', 'a');


// Metodo privado: solo pueden ser llamados desde dentro de la clase. Si intentaras hacer antman.bio() desde afuera, TypeScript te daría un error. Esto es perfecto para ocultar lógica interna que nadie más debería ver.
console.log(antman.bio());


console.log(Avenger.getAvgAge());