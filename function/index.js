let num1 = 43;
let num2 = 29;

function addNumber(x,y) {
  let answer = x + y;
//   console.log(answer, "Result of Addition");
  return answer
}

function subNumber(x,y) {
  let answer = x - y;
//   console.log(answer, "Result of subtraction");
  return answer
}

function timesNumber(x,y) {
  let answer = x * y;
//   console.log(answer, "Result of multiplication");
  return answer
}

function divideNumber(x,y) {
  let answer = x / y;
//   console.log(answer, "Result of division");
  return answer
}

let result1 = addNumber(num1,num2)
console.log(result1)

let result2 =subNumber(num1,num2)
console.log(result2)

let result3 =timesNumber(num1,num2)
console.log(result3)

let result4 =divideNumber(num1,num2)
console.log(result4)


let num3 =3
let num4 =23
let num5 =9

function maximumNum(){
    let answer = Math.max(num3, num4 , num5)
    console.log(`The maximum of the numbers is ${answer}`)
}

maximumNum()

function summNumbers(x,y,z){
    let sum = x + y + z
    console.log(sum)
}

summNumbers(3,4,6)


function powerOfNum(x,y){
    let power = Math.pow(x,y)
    console.log(power)
    return power
}

powerOfNum(3,4)
powerOfNum(2,5)


// Arrow functions  

const sayHello = ()=>{
    console.log("Welcome to the class")
}

const miniMum = (x,y,z)=>{
    let answer1= Math.min(x,y,z)
    return answer1
}

console.log(miniMum(2/4,3,5,4/6))


// https://teaching-sitee.netlify.app/