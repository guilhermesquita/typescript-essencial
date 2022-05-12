 //GENERICS - Definir o tipo e torná-lo imutável
 
 /* 
 State = S
 Type = T
 Key = K
 Value = V
 Element = E
 */
 
 function useState<S>(){ //Criação normal de um método (hook do react) e criando um generic <>.
    let state: S

    function getState(){
        return state;
    }

    function setState(newState: S){
        state = newState;
    }   

    return { getState, setState }
 }

 const newState = useState<string>(); //Definindo o nosso "<S>"

 newState.setState("foo");
 console.log(newState.getState())

// newState.setState(123); -> Aqui ele vai dar erro. Pq só aceita string!
 console.log(newState.getState())