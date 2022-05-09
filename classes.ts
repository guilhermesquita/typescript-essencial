//No Ts tem os MODIFIERS = Public, Private, Protected & Readonly
//E Acessors = Get and Set

class userAccount{
    public name: string; //Alterável e Lido
    protected age: number; // Não Podemos chamar ela em outra classe, a não ser que seja extendida (extends)

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    logDetails(): void{
        console.log(`The player ${this.name} is ${this.age} years old`);
    }
}

class charAccount extends userAccount{
    private nickname: string; //inalterável e nem lida
    readonly level: number; //Pode ser lido, mas não alterado

    constructor(name: string, age:number, nickname: string, level: number){
        super(name, age)//pega as propriedades da classe SUPERior
        this.nickname = nickname;
        this.level = level;

    }

    logCharDetails(){
        console.log(`The player ${this.name} has the char ${this.nickname} at level ${this.level}`);
    }
}

const will = new userAccount("Willian", 12);

console.log(will)
will.logDetails()

const john = new charAccount("John", 28, "Sova", 100);

john.logDetails()

john.logCharDetails()