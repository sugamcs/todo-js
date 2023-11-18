function todoList() {
    return { todos: [] };
}

document.addEventListener('DOMContentLoaded', function () {
    const todoList1 = todoList();
    const todos = todoList1.todos;

    const form = document.querySelector('form');
    const inputContent = document.querySelector("#todo");

    form.addEventListener('submit', function (e) {
        e.preventDefault()
        
        const newTodo = inputContent.value;
        form.reset()
        

        if (newTodo !== "") {
            todos.push(newTodo);
            console.log(todos);
        }
    });
});


