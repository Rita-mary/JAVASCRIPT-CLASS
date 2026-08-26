let age = 17;

let score = 40;

let gender = "Girl"

let name = " Rita-mary"
console.log(score)
console.log(name)
console.log(age)

let firstName = "Rita-mary"

let middleName = "Ngozi"

let lastName = "Amakom"

console.log("My name is " + firstName + " " + middleName + " " + lastName + ". I am " + age + "years old. " + "I am a " + gender  + ".")

const title = document.getElementById("main-title");
console.log(title.textContent);


const items = document.getElementsByClassName("description");

console.log(items[0].textContent); 

const buttons = document.getElementsByTagName("button");

console.log(buttons[1].textContent); 

const firstParagraph = document.querySelector("p"); 
console.log(firstParagraph.textContent,222222222)

const standardBox = document.querySelector("#box"); 

const firstItem = document.querySelector(".text-item"); 

const allItems = document.querySelectorAll(".text-item");
console.log(allItems.length); 
