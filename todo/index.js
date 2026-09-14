const toggleBtn = document.getElementById('toggle');
const formEle = document.getElementById('form');
const todoInput = document.getElementById('todoInput');
const todoContainer = document.getElementById('todoContainer');
const formBtn = document.getElementById('formBtn');
const body = document.body;
let start = 1;
let editButtonId = null;

toggleBtn.addEventListener('click', changeMode);
formEle.addEventListener('submit', addTodo);

let todos = [];

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

  if (editButtonId !== null) {
    const todo = todos.find((todo) => {
      return todo.id === editButtonId;
    });
    todo.title = todoValue;
    formBtn.textContent = 'Add Todo';
    editButtonId = null;
  } else {
    const todo = {
      id: start++,
      title: todoValue,
    };

    todos.push(todo);
  }

  console.log(todos);

  display();

  todoInput.value = '';
}

function deleteTodo(id) {
  todos = todos.filter((todo) => {
    return todo.id !== id;
  });

  display();
  console.log(todos);
  console.log(id);
}

function editTodo(id) {
  const todo = todos.find((todo) => {
    return todo.id === id;
  });

  console.log(todo, todo.title);

  todoInput.value = todo.title;
  formBtn.textContent = 'Edit Todo';
  editButtonId = todo.id;
}

function display() {
  todoContainer.innerHTML = todos
    .map((todo) => {
      return `<div>
        <h3>${todo.title}</h3>
        <button onclick ="editTodo(${todo.id})">Edit</button>
        <button onclick ="deleteTodo(${todo.id})">Delete</button>
      </div>`;
    })
    .join('');
}
