//No Ts tem os MODIFIERS = Public, Private, Protected & Readonly
//E Acessors = Get and Set

class userAccount{
    protected name: string; //Alterável e Lido
    public age: number; // Não Podemos chamar ela em outra classe, a não ser que seja extendida (extends)

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

    get getLevel(){ //Faz vocÊ exibir o que quiser na tela
        console.log("Teste")
        return this.level;
    }

    set setAge(age: number){ //Faz vocÊ pode alterar algum valor
        this.age = age
    }
}

const will = new userAccount("Willian", 12);

console.log(will)
will.logDetails()

const john = new charAccount("John", 28, "Sova", 100);

john.logDetails()

john.logCharDetails()

john.setAge = 30
console.log(john.age)
console.log(john.getLevel)