//A INTERFACE TMB TEM MODIFIERS

interface Game{ //criação da interface
    title: string;
    description: string;
    readonly genre: string; //Só pode ser lido, mas inalterável
    platform?: string[]; //Platform é OPCIONAL
    getSimilars?: (title: string) => void;
}

const tlou: Game = { //Criação do OBJETO com todos TIPOS da interface game
    title: 'The Last of Us',
    description: "A good game!",
    genre: "action",
    platform: ["ps3", "ps4"],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Uncharted, A Plage Tale, Metro`)
    }
}

console.log(tlou.title)

if(tlou.getSimilars){
tlou.getSimilars(tlou.title)}

interface DLC extends Game{
    originalGame: Game;
    newContent: string[]
}

const leftBehind: DLC = {
    title: 'The Last Of Us = The Left Behind',
    description: 'A extension of original game',
    genre: 'Action',
    originalGame: tlou,
    newContent: ['3 hours story', 'new characters'],
}


//IMPLEMENTANDO UMA CLASSE COM INTERFACE:
class creatGame implements Game { //A classe precisa ter todos os tipos que tem na interface Game
    title: string;
    description: string;
    genre: string;

    constructor(t: string, d:string, g:string){
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}