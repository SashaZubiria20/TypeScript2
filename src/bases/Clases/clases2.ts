// Forma corta de asignar propiedades


class Avenger {
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

const antman: Avenger = new Avenger('Antman', 'Capitan', 'a');
console.log(antman);


/*---------------*/

/*
    Comentare esta forma de crear la clase debido a que arroja error por la configuracion de vite isolatedModules: true 
*/

/*
class Avenger2 {
    constructor(
        private name: string, 
        public team: string, 
        public realName?: string
    ) {}
}


const batman: Avenger2 = new Avenger2('Batman', 'Capitan', 'b');
console.log(batman);
*/