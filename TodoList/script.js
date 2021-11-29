const listElement = document.querySelector("#app ul");
const inputElement = document.querySelector("#app input");
const buttonElement = document.querySelector("#app button");
const todos = JSON.parse(localStorage.getItem("lista_todos")) || [];

const todo = any;

function renderTodos() {
  listElement.innerHTML = "";
  for (todo of todos) {
    console.log(todo);

    const todoElement = document.createElement("li");
    const todoText = document.createTextNode(todo);

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    const position = todos.indexOf(todo);

    linkElement.setAttribute("onclick", "deletarTodo(" + position + ")");

    const linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(listElement);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function adicionarTodo() {
  if (inputElement.value == "") {
    alert("Digite alguma tarefa!");
  } else {
    const todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    salvarDados();
  }
}

buttonElement.onclick = adicionarTodo;

function deletarTodo(position) {
  todos.splice(position, 1);
  renderTodos();
  salvarDados();
}

function salvarDados() {
  localStorage.setItem("lista_todos", JSON.stringify(todos));
  renderTodos();
}
