const inputs = document.querySelectorAll('.num-box');
const fVInput = document.getElementById('final-value');
const check = document.getElementById('checkbtn');
const feedback = document.getElementById('feedback');
const sticker = document.getElementById('sticker');
const body = document.body;
let rnum = Math.floor(Math.random() * 19 + 1) + 1;
let numguess = 0;

inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
    concatInput();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !input.value && index > 0) {
      inputs[index - 1].focus();
    }
  });
});

function concatInput() {
  let fv = '';
  if (inputs) {
    inputs.forEach((input) => {
      fv += input.value;
    });
    fVInput.value = fv;
  }
}

check.addEventListener('click', () => {
  checkGuess();
});

body.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkGuess();
  }
});

function checkGuess() {
  let guess = Number(fVInput.value);
  let response;
  if (fVInput.value == '') {
    if (check.classList.contains('start')) {
      check.classList.remove('start');
      rnum = Math.floor(Math.random() * 19 + 1) + 1;
      numguess = 0;
      check.textContent = 'Check';
      feedback.textContent = '';
      if (sticker) sticker.textContent = '😐';
      inputs.forEach((input) => (input.disabled = false));
      return;
    } else {
      response = 'Input a value to check';
      feedback.style.color = 'red';
      if (sticker) sticker.textContent = '😟';
      feedback.textContent = response;
      return
    }
  }

  if (guess === rnum) {
    numguess++;
    response = `You guessed right!! Number of Trials: ${numguess}`;
    check.classList.add('start');
    inputs.forEach((input) => (input.disabled = true));
    feedback.style.color = 'green';
    if (sticker) sticker.textContent = '🎉';
  } else if (guess > 20 || guess < 1) {
    numguess++;
    response = 'Your guess should be within 1-20.';
    check.classList.remove('start');
    feedback.style.color = 'orange';
    if (sticker) sticker.textContent = '😟';
  } else if (guess > rnum) {
    numguess++;
    response = 'You guessed higher, Try a lower number.';
    check.classList.remove('start');
    feedback.style.color = 'orange';
    if (sticker) sticker.textContent = '😟';
  } else if (guess < rnum) {
    numguess++;
    response = 'You guessed lower, Try a higher number.';
    check.classList.remove('start');
    feedback.style.color = 'orange';
    if (sticker) sticker.textContent = '😟';
  } else {
    response = 'Only integer values are allowed.';
    feedback.style.color = 'red';
    check.classList.remove('start');
    if (sticker) sticker.textContent = '😟';
  }

  if (check.classList.contains('start')) {
    check.textContent = 'Restart';
  } else {
    check.textContent = 'Check';
  }

  inputs.forEach((input) => {
    input.value = '';
  });
  if (inputs[0] && !check.classList.contains('start')) inputs[0].focus();
  fVInput.value = '';

  feedback.textContent = response;
}
