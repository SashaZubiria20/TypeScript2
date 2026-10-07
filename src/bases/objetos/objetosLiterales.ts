// Objetos Literales

/*
    En js la forma más básica de crear un objeto es: { nombre: 'Sasha', edad: 34 }

    En js puedes reescribir un objeto con otras propiedades y no dara error, incluso añadir un metodo.

    Por eso ts nos ayuda poniendo limites, para que el codigo no se ropa cuando intentemos acceder a propiedades que ya no existen o que cambiaron de tipo

    por eso aparece la necesidad de definir una estructura fija (o contrato) para los objetos.

    En resumen ts nos ayuda a poner limites y prohibiciones para que nadie pueda cambiar el contenido de un objeto y conseguir que el codigo se rompa
*/

let flash = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Super velocidad', 'Viajar en el tiempo']
}


/*
flash = {
    name: 'Clark Kent',
    age: 60,
    
    
    getNombre(){
        return this.name
    }
    
}
*/

console.log(flash);
console.log(flash);


// Como crear tipos especificos

/*
    Para esto debemos ponerle un tipo a un objeto, puede ser un tipo o una interface.

    Hacemos que los parametros sean obligatorios poniendo su tipo entre {}, despues del nombre de la variable incluso podemos especificar qeu metodos debe tener
    Si queremos que sea opcional podemos poner un ? despues del nombre del tipo

    Para que acepte acepte metodos tambien debemos agregarlo, con el nombre, los argumentos que rebiba o no y lo que devuelve. Tambien puede ser opcional
*/

let batman: {name:string, age?:number, powers:string[], getName?: ()=> string} = {
    name: 'Bruce Wayne',
    age: 34,
    powers: ['Trepar', 'Volar']
}

batman = {
    name: 'Juan',
    //age: 34,
    powers: ['Saltar', 'Correr'],
    getName(){
        return this.name
    }
}

// al momento de utilizar el metodo, como definimos que era opcional, podemos decirle a ts: Si existe getName, ejecútalo; si no existe, no hagas nada y devuelve undefined, poniendo un ?.
console.log(batman.getName?.());

