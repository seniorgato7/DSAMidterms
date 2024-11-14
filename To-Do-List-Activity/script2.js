const todoList = [];

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `
      <p>
        <span class="todo-text">${todo.text}</span>
        <span class="todo-time">(Added: ${todo.time})</span>
        <button onclick="editTodo(${i})">Edit</button>
        <button onclick="deleteTodo(${i})">Delete</button>
      </p>`;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value.trim();

  if (name) {
    const now = new Date();
    const time = now.toLocaleString();
    todoList.push({ text: name, time: time });
    inputElement.value = '';
    renderTodoList();
  }
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

function editTodo(index) {
  const newText = prompt("Edit your task:", todoList[index].text);
  if (newText !== null) {
    todoList[index].text = newText.trim();
    const now = new Date();
    todoList[index].time = now.toLocaleString() + " (Edited)";
    renderTodoList();
  }
}