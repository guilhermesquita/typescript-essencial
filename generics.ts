 function useState(){ //Criação normal de um método (hook do react)
    let state: number | string

    function getState(){
        return state;
    }

    function setState(newState: number | string){
        state = newState;
    }   

    return { getState, setState }
 }

 const newState = useState();

 newState.setState("foo");
 console.log(newState.getState())

 newState.setState(123);
 console.log(newState.getState())