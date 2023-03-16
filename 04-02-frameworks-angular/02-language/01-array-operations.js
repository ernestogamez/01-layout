// 1. Array operations

let array = ["uno", "dos", "tres"];

// Head 
const head = ([primero]) => primero;
console.log(head(array));

// Tail 
const tail = ([primero, ...cola]) => cola;
console.log(tail(array));

// Init 
const init = (todos) => todos.slice(0, todos.length -1); 
console.log(init(array));

// Last 
const last = (todos) => todos.pop(); 
console.log(last(array));

