class userAccount{
    public name: string; //Pode fazer oq quiser
    protected age: number; //Não pode chamar fora da classe ou subclasse

    constructor(name: string, age: number){
        this.name = name;
        this.age = age
    }
    
    logDetails():void{
    console.log(`This player ${this.name} is ${this.age} years old.`)
}
}

class charAccount extends userAccount{
    private nickname: string; //Inalterável
    readonly level: number; //Só pode ser lida

    constructor (name: string, age:number, nickname: string, level: number){
        super(name, age);
        this.nickname = nickname;
        this.level = level
    }
}


const will = new userAccount("Will", 30)
console.log(will)
//console.log(will.age)
will.logDetails();  

const John = new charAccount("John", 20,"JohnMasterr", 80)
console.log(John.name)