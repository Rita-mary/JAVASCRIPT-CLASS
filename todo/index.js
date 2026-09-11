const toggleBtn = document.getElementById('toggle');
const formEle = document.getElementById('form');
const todoInput = document.getElementById('todoInput');
const todoContainer = document.getElementById('todoContainer');
const body = document.body;
let start = 1

toggleBtn.addEventListener('click', changeMode);
formEle.addEventListener('submit', addTodo);

const todos = [];

// changing theme
function changeMode() {
  body.classList.toggle('dark-theme');
}

// adding a todo
function addTodo(event) {
  event.preventDefault();

  if (todoInput.value === '') {
    return;
  }
  const todoValue = todoInput.value.trim();
  console.log(todoValue);

  const todo = {
    id: start++,
    title: todoValue,
  };

  todos.push(todo);
  console.log(todos);

  todoContainer.innerHTML = todos
    .map((todo) => {
      return `<div>
        <h3>${todo.title}</h3>
        <button>Edit</button>
        <button onclick ="deleteTodo()">Delete</button>
      </div>`;
    })
    .join('');

  todoInput.value = '';
}

function deleteTodo() {
  console.log('wash plate was clicked');
}
