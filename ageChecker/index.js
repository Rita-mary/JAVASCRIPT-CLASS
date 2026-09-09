// We are checking if the person can rule
// If the person is less tan 25, He is too young to rule
// If the person is between 25 and 79,  He can rule
// If the person is greater than 70, He is too old

const ageEle = document.getElementById('ageInput');
const ageButton = document.getElementById('ageBtn');
const resultEle = document.getElementById('result');

console.log(ageEle);
console.log(ageButton);

ageButton.addEventListener('click', showResult);

function showResult(){
  inputVal = ageEle.value;
  inputVal = Number(inputVal);

  let response;
  if (inputVal == ""){
    response ="You submitted an empty input"
    resultEle.style.color = "orange"
  }else if (inputVal < 25) {
    response ="You're too young to rule";
    resultEle.style.color = "blue"
  } else if (inputVal >= 25 && inputVal <= 70) {
    response = 'You can rule now!';
    resultEle.style.color = "green"
  } else if (inputVal > 70) {
    response ='You are too old to rule';
    resultEle.style.color = "red"
  } else {
    response ='Enter a valid age';
  }

  resultEle.textContent = response


  // ageButton.classList.toggle("submitted")

  // if (ageButton.classList.contains("submitted")){
  //   resultEle.textContent = response
  // }else{
  //   resultEle.textContent = ""
  // }
}


let minnum = 1
let maxnum = 20

let randomNumber = Math.floor(Math.random()*(maxnum-minnum + 1)) + minnum

console.log(`${randomNumber} was generated.`)


// Assignment
// learn about functions in js
// do an add function

// let sum
// function add(x,y){
//   return x + y
// }

// sum =add(3,4)
// sum1 =add(35,49)
// sum2=add(63,34)

// console.log(sum, "Sum From the function defined")
// console.log(sum1, "Sum 1 From the function defined")
// console.log(sum2, "Sum 2 From the function defined")
