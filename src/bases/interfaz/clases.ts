// Interfaces en las clases

/*
    Para que una clase implemente una interface, se usa la palabra reservada implements

    Qué es implements?
    Mientras que extends se usa para heredar comportamiento (código, lógica, constructores) de una clase padre, implements se usa para obligar a una clase a cumplir con un contrato.

    Cuando usas class Mutant implements Xmen, Human, le estás diciendo a TypeScript: "Oye, esta clase Mutant es responsable de tener exactamente las propiedades y métodos que definen Xmen y Human
*/

interface Xmen {
    name:string;
    realName:string;
    mutanPower(id:number):number;
}

interface Human {
    age:number;
}

class Mutant implements Xmen, Human {
    public age:number;
    public name:string;
    public realName:string;

    constructor (age:number, name:string, realName:string) {
        this.age = age,
        this.name = name;
        this.realName = realName;
    }

    mutanPower(id:number){
        return id
    }
}

const mutant1 = new Mutant (20, 'Wolverine', 'James Howlett');
console.log(mutant1)
console.log(mutant1.mutanPower(5))


/*
    Para qué sirve y cuándo se usa?
        - Multiherencia (simulada): En TypeScript/JavaScript, una clase solo puede heredar de una única clase padre (extends X es solo una). Pero una clase puede implementar muchas interfaces (implements A, B, C). Esto es vital para que una clase sea "de tipo A" y "de tipo B" al mismo tiempo.

        - Garantía de API: Si trabajas en un equipo grande, puedes decir: "Cualquier clase que quiera ser un Mutante DEBE tener un método mutanPower". Si alguien intenta crear un Mutante sin ese método, el código ni siquiera compilará.

        - Desacoplamiento: La clase no necesita saber quién es su padre, solo le importa cumplir con las reglas del contrato (la interfaz).

    Uso en la vida real:
        Imagina que tienes una interfaz Guardable con un método guardarEnBaseDeDatos(). Puedes hacer que una clase Usuario, una clase Producto y una clase Pedido implementen esa interfaz. Aunque sean cosas totalmente distintas, garantizas que las tres tengan un método para guardarse.
*/


// Ejercicio
/*
    Crear una clase que maneje notificaciones.

    *Instrucciones:
        1) Crea una interfaz Notificable que tenga:
        - mensaje
        - enviar()

        2) Crea una interfaz Logeable que tenga:
        - fecha: Date

        3) Crea la clase Notificacion que implements Notificable, Logeable:

        - En el método enviar(), haz un console.log del mensaje.

        4)Instancia la clase, asigna los valores y llama a enviar().
*/

interface Notificable{
    mensaje:string;
    enviar():void;
}

interface Logeable{
    fecha:Date;
}

class Notificacion implements Notificable, Logeable {
    public mensaje:string;
    public fecha:Date;

    constructor(mensaje:string, fecha:Date) {
        this.mensaje = mensaje;
        this.fecha = fecha;
    }

    enviar():void {
        console.log(this.mensaje);
    }
}

const not1 = new Notificacion('Bienvenido', new Date('2026-10-24'));
not1.enviar();