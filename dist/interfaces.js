"use strict";
//A INTERFACE TMB TEM MODIFIERS
const tlou = {
    title: 'The Last of Us',
    description: "A good game!",
    genre: "action",
    platform: ["ps3", "ps4"],
    getSimilars: (title) => {
        console.log(`Similar games to ${title}: Uncharted, A Plage Tale, Metro`);
    }
};
console.log(tlou.title);
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
const leftBehind = {
    title: 'The Last Of Us = The Left Behind',
    description: 'A extension of original game',
    genre: 'Action',
    originalGame: tlou,
    newContent: ['3 hours story', 'new characters'],
};
//IMPLEMENTANDO UMA CLASSE COM INTERFACE:
class creatGame {
    constructor(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}
