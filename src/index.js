const todoList1 = todoList();
const todos = todoList1.todos;
const todoText = document.querySelector("#todo-content");
const form = document.querySelector('#form');
const inputContent = document.querySelector("#todo");

function todoList() {
    return { todos: [] };
}


function todoPusher() {
    form.addEventListener('submit', function (e) {
    e.preventDefault();

    const newTodo = inputContent.value;
    form.reset();

    if (newTodo !== "") {
        todos.push(newTodo);
        updateToDoList();
    }
});
}


function updateToDoList() {
    todoText.textContent = "";

    todos.forEach(todo => {
        const todoItem = document.createElement('li');
        todoItem.textContent = todo;
        todoText.append(todoItem);
    });
}


todoPusher()