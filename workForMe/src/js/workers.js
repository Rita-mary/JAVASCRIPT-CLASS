const workerSection = document.getElementById('workerSection');
const searchBar = document.getElementById('searchBar');
const numArtisans = document.getElementById('numArtisans');

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

numArtisans.textContent = `Showing ${artisanData.length} artisans`;


function display(worker) {
  workerSection.innerHTML = worker
  .map((data) => {
      return `<div class="rounded-lg border border-gray-100 p-5 flex items-center flex-col gap-5 shadow-sm hover:shadow-md">
      <img src="${data.image}" alt="" class="w-15 h-15 rounded-full">
      <h1>${data.name}</h1>
      <p class="rounded-full px-2 py-1 bg-red-50 text-red-500 font-semibold">${data.job}</p>
      </div>
      `;
    })
    .join('');
}

display(artisanData)

searchBar.addEventListener('input', filterData);

function filterData() {
  const inputValue = searchBar.value.trim();
  const searchTerm = inputValue.toLowerCase();
  let filteredWorkers = artisanData.filter((data) => {
    return data.name.toLowerCase().includes(searchTerm);
  });
  display(filteredWorkers);
  numArtisans.textContent = `Showing ${filteredWorkers.length} artisans`;
}


