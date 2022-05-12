"use strict";
const todo = {
    title: "Assistir filme",
    description: "Passar tempo com a familia",
    completed: false,
};
console.log(todo);
//atualizando o objeto de FALSE para true com o type utility: READONLY
//todo.completed = true < - Para evitar esse tipo de alteração
//FUNÇÃO DA ATUALIZAÇÃO DO OBJETO:
function updateTodo(todo, fieldsToUpdate) {
    return { ...todo, ...fieldsToUpdate };
}
//O "partial" faz com que as propriedades se tornem OPCIONAIS
const todo2 = updateTodo(todo, { completed: true });
console.log(todo);
const todo3 = {
    title: "Ghost of Tsushima",
    completed: false,
};
const todo4 = {
    title: "Ghost of Tsushima",
    completed: false,
};
//Quando usar o omit ou pick:
/*
Quero ANULAR? usar o pick
Quero PEGAR E ESCONDER UMA? usa o omit
*/
