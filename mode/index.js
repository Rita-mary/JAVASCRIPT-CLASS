const toggleBtn = document.getElementById('toggle-btn');

console.log(toggleBtn);

const body = document.body;
console.log(body);

toggleBtn.addEventListener('click', changeMode);

function changeMode() {
  // body.style.backgroundColor ="White"
  body.classList.add('hidden');
  body.classList.remove('remove-me');

  const containMore = body.classList.contains('more');
  body.classList.toggle('theme-mode');
  console.log(containMore);

  if (body.classList.contains('theme-mode')) {
    toggleBtn.textContent = 'Light';
  }else{
    toggleBtn.textContent ="Dark"
  }
}
