// Herencia, Super y Extends


/*
    - extends: Es la palabra reservada para crear una clase hija que hereda de una clase padre. Establece la relación de "es un".

    - super(): Es la llamada obligatoria al constructor del padre. Es la forma en que la clase hija "enciende" primero la parte del padre antes de empezar a trabajar con su propia lógica.

    - Herencia: Es el mecanismo que permite que Xmen reutilice todo el código, propiedades y métodos (getFullname) de Avenger, sin tener que reescribirlo.
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



// Aca usamos la herencia, Xmen hereda de Avenger el name y el realName, por eso dentro del constructor llamamos al super
class Xmen extends Avenger {
    public isMutant:boolean;

    constructor (name:string, realName:string, isMutant:boolean) {
        super(name, realName);
        this.isMutant = isMutant;
    }

    getFullnameDesdeXmen () {
        return super.getFullname();
    }
}

const wolverine = new Xmen('Wolverine', 'Logan', true);
console.log(wolverine);

/*Las propiedades o metodos tambien podemos definirlas como protected 
    Private: Solo se puede acceder desde la clase donde esta el metodo
    Protected: Permite acceder al metodo en la clase padre o cualquier otra clase que extienda de ella
*/
console.log(wolverine.getFullnameDesdeXmen());