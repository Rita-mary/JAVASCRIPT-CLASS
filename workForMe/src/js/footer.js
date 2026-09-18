const year = document.getElementById('year');


const mydate = new Date()

console.log(mydate.getFullYear())

const realYear = new Date().getFullYear()

year.textContent = `${realYear} `