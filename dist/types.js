"use strict";
//declaration: type
//declaration = value
//BOOLEAN - TRUE OR FALSE
let isOpen;
isOpen = true;
//STRING
let message;
message = "foo";
//NUMBER (ACEITA HEXADECIMAL)
let number;
number = 0xff0;
//ARRAY
let items;
items = [1, 3, 2]; //Se colocar uma string já vai dar errado
let values; //Podemos fazer assim...
values = [1, 3, 2];
//TUPLA
let tup;
tup = [3, "olá"];
//ENUM
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
//ANY (qualquer coisa)
let coisa; //Pode ser qualquer coisa, QUALQUER COISA.
coisa = [1, 2];
coisa = "olá";
coisa = 3;
//VOID (vazio) - Quando não retornamos nada
function logger() { console.log("fool"); } //O TS já que o console.log é void.Então não é preciso tipar nos casos mais simples
//NEVER - Nunca vai retornar 
function error() { throw new Error("Erro!"); }
;
//OBJECT - Qualquer coisa que não seja um tipo primitivo
let cart;
cart = { nome: "Luiz", idade: 13 };
//TYPE INFERENCE
let str = "olá"; //O TS já interpretará essa variável como string
