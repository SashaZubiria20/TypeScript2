// Variables y Constantes
let nombre: string = 'Sasha';
const edad: number = 34;
let esEstudiante: boolean = true;


// Arrays
const numeros: number[] = [1, 2, 3];
const textos: string[] = ['a', 'b', 'c'];
// O usando el tipo genérico
const lista: Array<number> = [1, 2, 3];


// Objetos Literales
const usuario: { nombre: string; edad: number } = {
    nombre: 'Sasha',
    edad: 34
};


// Funciones (Sintaxis básica y tipado)
const sumar = (a: number, b: number): number => {
    return a + b;
};


// Tipos Personalizados (type)
type ID = string | number; // Unión de tipos
type Persona = {
    nombre: string;
    edad: number;
};


// Interfaces (Contratos)
interface Heroe {
    nombre: string;
    poder?: string; // Propiedad opcional
    saludar(): void; // Firma de método
}


// Clases (Forma larga, compatible con Vite/Strict)
class Vehiculo {
    public marca: string;

    constructor(marca: string) {
        this.marca = marca;
    }

    arrancar(): void {
        console.log('Encendido');
    }
}


// Clases Abstractas e Implementación
abstract class Padre {
    abstract hablar(): void;
}

class Hijo extends Padre implements Heroe {
    nombre: string = 'Hijo';
    
    hablar(): void {
        console.log('Hola');
    }
    
    saludar(): void { // Método de la interfaz Heroe
        console.log('Saludos');
    }
}


// Constructor Privado (Singleton)
class Singleton {
    private static instance: Singleton;

    private constructor() {} // Nadie puede hacer 'new Singleton()'

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}


// Interfaz para funciones
interface Operacion {
    (a: number, b: number): number;
}

const multiplicar: Operacion = (x, y) => x * y;