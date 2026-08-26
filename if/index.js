let fname = 'Rita-mary';

if (fname === 'Rita-mary') {
  console.log(`Hi my name is ${fname}`);
}

// === comparison operator (checks value and datatype)
// == comparison operator (checks only value)

let num = '3';

if (num === 3) {
  console.log('Hello it is 3');
} else {
  console.log('It has a different datatype');
}

let age = 10;
if (age === 67) {
  console.log('You just became 18');
} else {
  console.log('You are not 18');
}

let score = 60;

if (score > 70) {
  console.log('You got an A');
} else if (score >= 60) {
  console.log('You got a B');
} else if (score >= 50) {
  console.log('You got a C');
} else if (score >= 40) {
  console.log('You got a D');
} else if (score >= 30) {
  console.log('You got an E');
} else if (score < 30) {
  console.log('You got an F');
} else {
  console.log('Enter you correct score');
}

if (age === 18) {
  console.log('You are an adult.');
} else if (age < 18) {
  console.log('You just became an adult.');
} else if (age > 18) {
  console.log('You are still a child.');
} else {
  console.log('Enter your real age');
}

let grade = 'd';
grade = grade.toUpperCase();

if (grade === 'A') {
  console.log('Excellent');
} else if (grade === 'B') {
  console.log('Very Good');
} else if (grade === 'C') {
  console.log('Good');
} else if (['D', 'E', 'F'].includes(grade)) {
  console.log('Failed');
} else {
  console.log('Enter the correct grade');
}

let leaderAge = 34;

if (leaderAge < 25) {
  console.log("You're too young to rule");
} else if (leaderAge >= 25 && leaderAge <= 70) {
  console.log('You can rule now!');
} else if (leaderAge > 70) {
  console.log('You are too old to rule');
}else {
    console.log("Enter a valid age")
}

let gender = "male"

if (gender !== "male"){
    console.log("You are a female")
}else if(gender === "male"){
    console.log("You are a male")
}else{
    console.log("Enter a valid gender")
}

let username = " Diamond"


if (username){
    console.log(`Your username is name ${username}`)
}else{
    console.log("Login!")
}


let food = "rice"
if (food  ==="rice"){
    console.log("That is my best food.")
}else{
    console.log("That is not my best food.")
}

food === "rice" ? console.log("That is my best food") : console.log("That is not my best food.")


// condition  ? if true : if false 