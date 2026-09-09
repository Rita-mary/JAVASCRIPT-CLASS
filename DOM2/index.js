const contentEle = document.getElementById("content")

console.log(contentEle)

contentEle.textContent = "Hello, Welcome to my Channel"

const parent = document.getElementById("parent")

console.log(parent)

parent.innerHTML = `<p> lorem ipsum, dolor.</p><button>send</button>`

const clickBtn = document.getElementById("click-btn")
const navList = document.getElementById("nav-list")
const imageEle = document.getElementById("img")

clickBtn.style.color = "blue"
clickBtn.style.backgroundColor = "yellow"

navList.setAttribute("href" , "www.google.com")

navList.href = "www.amazon.com"

imageEle.src = "https://i.pinimg.com/736x/57/48/21/574821a39139bdf7b056de62fb8905f6.jpg"

imageEle.alt = "Woman image"
