function printToConsole(constructor:Function){
    console.log(constructor)
}


@printToConsole
export class Pokemon {
    public publicApi:string = 'https://pokeapi.co';
    public name:string;

    constructor( name:string){
        this.name = name;
    }
}

/*
    El decorador intercepta la definición de la clase en el momento de la transpilación. No se ejecuta cuando creas una instancia (con new), sino que se ejecuta una sola vez cuando la aplicación carga y define la clase. En este caso, recibe el constructor de la clase como argumento y lo imprime.

    El decorador se ejecuta una sola vez al arrancar la aplicación. Ahí es donde "toca" o "decora" el molde (la clase). Luego, cuando haces new Pokemon(), la clase ya ha sido decorada/modificada.
*/