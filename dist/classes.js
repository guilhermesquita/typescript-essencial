"use strict";
//No Ts tem os MODIFIERS = Public, Private, Protected & Readonly
//E Acessors = Get and Set
class userAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} is ${this.age} years old`);
    }
}
class charAccount extends userAccount {
    constructor(name, age, nickname, level) {
        super(name, age); //pega as propriedades da classe SUPERior
        this.nickname = nickname;
        this.level = level;
    }
    logCharDetails() {
        console.log(`The player ${this.name} has the char ${this.nickname} at level ${this.level}`);
    }
    get getLevel() {
        console.log("Teste");
        return this.level;
    }
    set setAge(age) {
        this.age = age;
    }
}
const will = new userAccount("Willian", 12);
console.log(will);
will.logDetails();
const john = new charAccount("John", 28, "Sova", 100);
john.logDetails();
john.logCharDetails();
john.setAge = 30;
console.log(john.age);
console.log(john.getLevel);
