// Interfaces Genericas

export interface Hero {
    name:string;
    realName:string;
}

export interface Villain {
    name:string;
    dangerLevel:number;
}

export interface Respuesta<T>{
    datos:T;
}