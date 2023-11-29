function todoList() {
    return { todos: [] }
}

function todoDetail(title, description, dueDate, priority, notes, checklist) {
    return {title, description, dueDate, priority, notes, checklist}
}

const todoList1 = todoList();
const todo1 = todoDetail("new", "whip", "23 march", "high", "random shit", "wake up")
todoList1.todos.push(todo1)
console.log(todoList1);