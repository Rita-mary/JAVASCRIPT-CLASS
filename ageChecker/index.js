// We are checking if the person can rule
// If the person is less tan 25, He is too young to rule
// If the person is between 25 and 79,  He can rule
// If the person is greater than 70, He is too old

const ageEle = document.getElementById('ageInput');
const ageButton = document.getElementById('ageBtn');

console.log(ageEle);
console.log(ageButton);

ageButton.addEventListener('click', () => {
  inputVal = ageEle.value;
  inputVal = Number(inputVal)
  if (inputVal < 25) {
    console.log("You're too young to rule");
  } else if (inputVal >= 25 && inputVal <= 70) {
    console.log('You can rule now!');
  } else if (inputVal > 70) {
    console.log('You are too old to rule');
  } else {
    console.log('Enter a valid age');
  }
});
