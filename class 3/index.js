const gender = "Female"

console.log(gender)

let num1 =40
let num2 =60

let num3 = 3
let num4 = 5

let sum = num1 + num2
let minus = num1 - num2
let multiply = num1 * num2
let divide = num1 / num2
let power = num3 ** num4
let mod = num4 % num3

console.log(sum)
console.log(minus)
console.log(multiply)
console.log(divide)
console.log(power)
console.log(mod)


let sqr = Math.sqrt(9)
let min = Math.min(34,45,123,123/5)
let max = Math.max(34,45,123,123/5)

console.log(sqr)
console.log(max)
console.log(Math.round(min))
// rounding down
console.log(Math.floor(min))
// rounding up
console.log(Math.ceil(29.3))
// random numbers betweeon 1 and 100
console.log(Math.round(Math.random()* 100))

let email = "email@gmail.com"


let age = 17;



let firstName = "Rita-mary"

let middleName = "Ngozi"

let lastName = "Amakom"
let fruit = "Mango"
let color = "Red"
let is_valid = true

console.log("My name is " + firstName + " " + middleName + " " + lastName + ". I am " + age + "years old. " + "I am a " + gender  + " developer.")
console.log(`My name is ${firstName} ${lastName}. I am a ${gender} developer`)

console.log(`My best fruit is ${fruit} and my best colour is ${color}`)
console.log(typeof(middleName))
console.log(typeof is_valid )


let minnum = 30
let maxnum = 58

let randomNumber = Math.floor(Math.random()*(maxnum-minnum + 1)) + minnum

console.log(`${randomNumber} was generated.`)


let newnum = 36

newnum +=3
newnum -= 9
newnum /= 6


console.log(newnum)

// type conversion in js

let strnum ="345"

console.log(typeof strnum)

strnum = Number(strnum)
console.log(typeof strnum)

strnum = String(strnum)
console.log(typeof strnum , "just now")

let decnum = 342.443


// to remove the decimal part of a number parseFloat is the opposite of Parseint
decnum = parseInt(decnum)
console.log(decnum)

// Assignment
// How to get Element from html to javascript using the tag name, class name, id, query selector


console.log(`My full name is ${firstName} ${lastName}.`)

let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium numquam molestiae quod itaque? Ipsam, laborum atque laboriosam est, quidem numquam quos, blanditiis totam quasi odio voluptatum fugiat veniam molestiae. Ut."

let lengthOfString = lorem.length

console.log(lengthOfString)

let fullName = lastName + " " + firstName

console.log(fullName.length)

console.log(fullName[3].toLocaleUpperCase())
console.log(fullName[14])


// trimming off white spaces, you can also use trimstart and trimend to specify what sides to trim
let something = "    dhhjjjsdkkd   "
console.log(something.trim())

console.log(something.includes("sdk"))
//  replaceAll replaces every instance of the selected word in the string
console.log(something.replace("sdk", "God"))
console.log(something.startsWith("sdk"))
console.log(something.trim().startsWith("dhh"))

let shortlorem = lorem.slice(4,56)

console.log(shortlorem + "...")
console.log(lorem.split("."))
console.log(lorem.split(","))
console.log(lorem.split(" "))