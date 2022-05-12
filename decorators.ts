//Declaração iniciado com @

//class decorator - decorato de classe

function log(target: any) { //Criação de decorator
    console.log(target)
}

@log
class foo {}; //Se estiver dando erro. Vá no TSCONFING.json. E abilite o comentário "experimentalDecorators: true"



//FACTORY DECORATOR
function logger(prefix: string) { //Criação de decorator
    return (target: any) => { 
    console.log(`${prefix} - ${target}`)
    }
}

@logger("awesome")
class Foo {};