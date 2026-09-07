const user = {
  name: 'Rita-mary Amakom',
  age: 49,
  gender: 'female',
  grade: 'A',
};

console.log(user);
console.log(user.gender);
console.log(user.name);

const myInfo = {
  name: 'John Eze',
  location: {
    state: 'Rivers',
    lga: 'Phalga',
    address: 'Slaughter',
  },
  kids: ['Emmanuel', 'Esther', 'Jerome'],
};

console.log(myInfo);
console.log(myInfo.location.lga);
console.log(myInfo.kids[2]);

user.skill = "Animator"
console.log(user)

user.genotype = "AA"
console.log(user)

user.name = "RM Amakom"
delete user.genotype
console.log(user)


delete user.name
console.log(user)

const users = [
    {name : "Chinedu", age:56, gender:"Male"},
    {name : "Sandra", age:34, gender:"Female"},
    {name : "Andrew", age:92, gender: "Male"},
]

users.push({name : "Collins", age:25, gender: "Male"})

console.log(users)

const data = {
    firstName : "Rita-mary",
    lastName:"Amakom",
    age: 32,
    gender: "Female",
    password: "12345678",
    grade: "A",
}
console.log(data.firstName)

const {firstName, age, grade} = data
console.log(grade)
console.log(firstName)