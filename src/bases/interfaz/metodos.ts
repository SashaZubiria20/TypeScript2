// Métodos en las interfaces

/*
    Al igual que los tipos, las interfaces nos permiten definir metodos, que pueden ser opcionales (?) u obligatorios
*/

interface Client {
    name:string;
    age:number;
    address: Address
    getFullAdress (id:string): string;
}

interface Address {
        id:number;
        zip:string;
        city:string
    }


const client: Client = {
    name: 'Pedro',
    age: 25,
    address:{
        id:125,
        zip: ' USH NSI',
        city: 'Ottawa',
    },
    getFullAdress(id:string){
        return id;
    }
}

console.log(client.getFullAdress('Córdoba'));