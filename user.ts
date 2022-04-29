//accountInfo
//charInfo
//PlayerInfo

type accountInfo = {
    id:number
    name:string
    email?:string //A interrogação significa opcional
}

const account:accountInfo = {
    id: 123,
    name: "Guilherme",
    email: "guirozmesquita@gmail.com"
}

type charInfo = {
    nickname:string
    level: number
}

const char:charInfo = {
    nickname: "guirmes",
    level: 13
}

type playerInfo = accountInfo & charInfo //Esse type é a UNIÃO entre esses os dois tipos - INTERSECTION

const player : playerInfo = {
    name:"Guilherme",
    nickname: "guirmes",
    email: "guirozmesquita@gmail.com",
    level: 13,
    id: 123,
}