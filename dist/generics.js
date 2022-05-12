"use strict";
//GENERICS TYPES - Definir o tipo e torná-lo imutável
/*
State = S
Type = T
Key = K
Value = V
Element = E
*/
function useState() {
    let state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState, setState };
}
const newState = useState(); //Definindo o nosso "<S>"
newState.setState("foo");
console.log(newState.getState());
// newState.setState(123); -> Aqui ele vai dar erro. Pq só aceita string!
console.log(newState.getState());
