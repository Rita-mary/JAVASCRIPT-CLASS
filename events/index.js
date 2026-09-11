const form = document.getElementById('formInput');
const name = document.getElementById('nameInput');
const date = document.getElementById('dateInput');
const number = document.getElementById('numberInput');
const sendBtn = document.getElementById('sendBtn');

console.log(form, name, date, number, sendBtn);

sendBtn.addEventListener('click', register);

function register(e) {
  console.log(e);
}

form.addEventListener('submit', registerUser);

function registerUser(e) {
  console.log('clicked');
  e.preventDefault();
  console.log(e.type);
  const data = {
    name: name.value,
    number: Number(number.value),
    date : date.value
  }
  console.log(data)

  name.value = ""
  date.value = ""
  number.value = ""
  console.log(e.target);
}
