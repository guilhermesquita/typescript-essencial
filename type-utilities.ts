type Todo = { // criação do type alias normalmente
    title: string;
    description: string;
    completed: boolean;
}

const todo: Readonly<Todo> = {
    title: "Assistir filme",
    description: "Passar tempo com a familia",
    completed: false,
}

console.log(todo)

//atualizando o objeto de FALSE para true com o type utility: READONLY
//todo.completed = true < - Para evitar esse tipo de alteração

//FUNÇÃO DA ATUALIZAÇÃO DO OBJETO:
function updateTodo(todo: Todo, fieldsToUpdate: Partial <Todo>){ //fields to update = campos para atualizar
    return {... todo, ...fieldsToUpdate}
} 

//O "partial" faz com que as propriedades se tornem OPCIONAIS

const todo2 : Todo = updateTodo(todo, {completed: true})

console.log(todo)


//PICK - type utility
type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
    title: "Ghost of Tsushima",
    completed: false,
}

// OMIT
type TodoPreview2 = Omit<Todo, "description">

const todo4: TodoPreview = {
    title: "Ghost of Tsushima",
    completed: false,
}


//Quando usar o omit ou pick:

/* 
Quero ANULAR? usar o pick 
Quero PEGAR E ESCONDER UMA? usa o omit
*/

