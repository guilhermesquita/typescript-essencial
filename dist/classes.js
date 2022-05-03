"use strict";
class userAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`This player ${this.name} is ${this.age} years old.`);
    }
}
class charAccount extends userAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
}
const will = new userAccount("Will", 30);
console.log(will);
//console.log(will.age)
will.logDetails();
const John = new charAccount("John", 20, "JohnMasterr", 80);
console.log(John.name);
