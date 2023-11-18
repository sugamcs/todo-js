function todoList() {
    return {todos : []}
} 

const todoList1 = todoList()
const todoList2 = todoList()
const todos = todoList1.todos
const todo1 = "Make a webpage"
const todo21 = ";helkahel"
const newTodos = todoList2.todos
newTodos.push(todo21)

todos.push(todo1)
console.log(todoList2)
console.log(todoList1)