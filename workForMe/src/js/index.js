const menuBtn = document.getElementById('menuBtn');
const smallNav = document.getElementById('smallNav');
const artisanSection = document.getElementById('artisanSection');

const artisanData = [
  {
    id: 1,
    name: 'Daniel Osei',
    job: ' Woodworker',
    image: './image/pic1.jpg',
  },
  {
    id: 2,
    name: 'Amara Chukwu',
    job: ' Electrician',
    image: './image/pic2.jpg',
  },
  {
    id: 3,
    name: 'Tunde Bakare',
    job: ' Mechanic',
    image: './image/pic3.jpg',
  },
  {
    id: 4,
    name: 'Ngozi Eze',
    job: ' Plumber',
    image: './image/pic4.jpg',
  },
  {
    id: 5,
    name: 'Kwame Mensah',
    job: ' Woodworker',
    image: './image/pic5.jpg',
  },
  {
    id: 6,
    name: 'Adaeze Obi',
    job: ' Electrician',
    image: './image/pic6.jpg',
  },
];

artisanSection.innerHTML = artisanData.map((data) => {
  return `<div class="rounded-md border border-gray-100 p-5 flex items-center flex-col gap-5 shadow-sm hover:shadow-md">
                    <img src="${data.image}" alt="" class="w-15 h-15 rounded-full">
                    <h1>${data.name}</h1>
                    <p class="rounded-full px-2 py-1 bg-red-50 text-red-500 font-semibold">${data.job}</p>
                </div>
    `;
}).join("");

menuBtn.addEventListener('click', toggleNav);

function toggleNav() {
  smallNav.classList.toggle('hidden');
  smallNav.classList.toggle('flex');
}
