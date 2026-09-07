let index = 0;

while (index < 5) {
  console.log('Hello Adam');
  index++;
}


let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

for (let index = 0; index < 10; index ++){
    console.log(index)
    console.log("Hello World")
}

const fruits = ["Mango","Cherry", "Grape" , "Corn"]

for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    console.log(element)
}

for (let index = 10; index > 0; index-=2) {
    console.log(index) 
}

for (let index = fruits.length-1; index > -1; index--) {
    console.log(fruits[index])
}

let newArray = []

for (let index = fruits.length-1; index >= 0; index--) {
        console.log(fruits[index])
        newArray.push(fruits[index]) 
    }

console.log(newArray)

for (let index = 0; index < 10; index++) {
    if (index ===4 ){
        continue
    }
    console.log(index)
    
}


for (let index = 0; index < 10; index++) {
    if (index === 4 ){
        break
    }
    console.log(index)
    
}