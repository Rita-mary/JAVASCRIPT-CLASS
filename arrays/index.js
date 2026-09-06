const dept = [
  'Mathematics',
  'Economics',
  'Geography',
  'Chemistry',
  'Engineering',
  'Nursing',
];

const few_depts = dept.slice(0, 3);

console.log(few_depts);
console.log(dept);

few_depts.splice(1, 2);
console.log(few_depts);

dept.forEach((element) => {
  console.log(element);
});

const allScores = [20, 30, 40, 50, 60, 70];

allScores.forEach((score) => {
  score = score + 25;
  console.log(score);
});

console.log("Students' grade deduction starts here");

const studentGrade = [40, 50, 70, 40, 99, 60, 70, 20, 0];

studentGrade.forEach((grade) => {
  if (grade >= 20) {
    grade -= 20;
  } else {
    grade += 2;
  }
  console.log(grade);
});

const newStudentGrade = studentGrade.map((element) => {
  element += 20;
  return element;
});

console.log(newStudentGrade);

const finalScores = [30, 40, 50, 78, 22, 34, 89, 100];

const gradedScores = finalScores.map((grade) => {
  let myGrade;
  if (grade >= 70) {
    myGrade = 'A';
    return myGrade;
  } else if (grade >= 60) {
    {
      myGrade = 'B';
      return myGrade;
    }
  } else if (grade >= 50) {
    {
      myGrade = 'C';
      return myGrade;
    }
  } else if (grade >= 45) {
    {
      myGrade = 'D';
      return myGrade;
    }
  } else if (grade >= 40) {
    {
      myGrade = 'E';
      return myGrade;
    }
  } else if (grade < 40) {
    {
      myGrade = 'F';
      return myGrade;
    }
  }
});

console.log(gradedScores);

const scoreDiv = finalScores.map((grade) => {
  grade /= 100;
  grade *= 60;
  return Math.round(grade);
});

console.log(scoreDiv);

const ages = [20, 89, 10, 7, 8, 56];

const above18 = ages.filter((age) => {
  return age >= 18;
});

console.log(above18);

const below18 = ages.filter((age) => {
  return age < 18;
});

console.log(below18);

const allNumbers = [34, 78, 90, 55, 87, 45];

const evenNumbers = allNumbers.filter((numb) => {
  return numb % 2 === 0;
});

console.log(evenNumbers)

const oddNumbers = allNumbers.filter((numb) => {
  return numb % 2 === 1;
});

console.log(oddNumbers)

const allNumb = [30, 40, 44, 68, 97]

const grter18 = allNumb.find((num)=>{
    return num >18
})

console.log(grter18)
// returns true if all meets a particular condition and false if all don't meet the condition
const allEven = allNumb.every((num)=>{
    return num > 18
})

console.log(allEven)
// returns true if some meet a particular condition and false if no one does 
const anyEven = allNumb.some((num)=>{
    return num > 18
})

console.log(anyEven)

// Assignment
// convert every name to uppercase
let people = ["john", "mary", "peter", "mark"]

let nameUpper = people.map((name) =>{
  return name.toUpperCase()
})

console.log(nameUpper)


// use an array method to calculate the total price
let price = [ 200, 300, 500, 600]
let total = 0
price.forEach((num) =>{
  total = total + num
})

console.log(total)


// Arrange in alphabetical order 
let women = ["Eve" , "Michelle", "Sandra", "Judith", "Chinwe"]

let sorted = women.sort()

console.log(sorted)
