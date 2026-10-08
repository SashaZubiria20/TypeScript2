// Destructuracion de Arrays

const avangersArr: string[] = ['cap. América', 'Ironman', 'Hulk'];

// Va por orden, si no quiero el primero, solo debo poner una , Y podemos usar el nombre que queramos de referencia hacia la posicion, no especificamente el del valor como en los objetos

const [,Ironman, pepe ] = avangersArr;
console.log(Ironman,pepe);


// La desestructuracion funciona mejor si tenemos definido los tipos, no debemos dejarlo de tipo any
const avangersArr2: [string, boolean, number] = ['cap. América', true, 150];
const [cap, a, b] = avangersArr2;
console.log(cap, a, b);