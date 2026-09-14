const menuBtn = document.getElementById("menuBtn")
const smallNav = document.getElementById("smallNav")
const artisanSection = document.getElementById("artisanSection")

const artisanData =[
    {
        id:1,
        name:"John Henry",
        job:" Electrician",
        image: "./image/pic1.jpg"
    },
    {
        id:2,
        name:"John Henry",
        job:" Plumber",
        image: "./image/pic1.jpg"
    },
    {
        id:3,
        name:"John Henry",
        job:" Mechanic",
        image: "./image/pic1.jpg"
    },
    {
        id:4,
        name:"John Henry",
        job:" Electrician",
        image: "./image/pic1.jpg"
    },
    {
        id:5,
        name:"John Henry",
        job:" Electrician",
        image: "./image/pic1.jpg"
    }
]

menuBtn.addEventListener("click" , toggleNav)

function toggleNav(){
    smallNav.classList.toggle("hidden")
    smallNav.classList.toggle("flex")
}