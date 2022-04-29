type newUid = number | string //Type alias - um apelido para variável : number | string

function logDetails(uid : number, item : string){
    console.log(`A product with ${uid} has a title as ${item}`)
}

function logInfo(uid:newUid, item:string){ //number OU string - declarada lá em cima
    console.log(`A product with ${uid} has a title as ${item}`)    
}

logDetails(3, "olá")
logInfo("123", "Willian")

type Platform = "Windows" | "Linux" | "MacOS"

function Plats(Platform:Platform){
    return Platform
}

Plats("Linux")