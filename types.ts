//declaration: type
//declaration = value

//BOOLEAN - TRUE OR FALSE
let isOpen: boolean
isOpen = true

//STRING
let message: string
message = "foo"

//NUMBER (ACEITA HEXADECIMAL)
let number: number
number = 0xff0

//ARRAY
let items:number[]
items = [1,3,2] //Se colocar uma string já vai dar errado

let values: Array<number> //Podemos fazer assim...
values = [1,3,2]

//TUPLA
let tup : [number, string]
tup = [3, "olá"]

//ENUM
enum Colors{
    white = '#fff',
    black = '#000'
}

//ANY (qualquer coisa)
let coisa:any //Pode ser qualquer coisa, QUALQUER COISA.
coisa = [1,2]
coisa = "olá"
coisa = 3

//VOID (vazio) - Quando não retornamos nada
function logger():void{console.log("fool")} //O TS já que o console.log é void.Então não é preciso tipar nos casos mais simples

//NULL / UNDEFINED
type Bla = string | undefined

//NEVER - Nunca vai retornar 
function error():never{throw new Error("Erro!")};

//OBJECT - Qualquer coisa que não seja um tipo primitivo
let cart:object
cart = {nome: "Luiz",idade:13}

//TYPE INFERENCE
let str = "olá" //O TS já interpretará essa variável como string

