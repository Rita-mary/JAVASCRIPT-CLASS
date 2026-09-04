// let day = 'Monday';

const day = document.getElementById('dayin');
const daycheck = document.getElementById('daycheckbtn');

function titleCase(x){
    let splitted = x.toLowerCase().split("")
    splitted[0] = splitted[0].toUpperCase()

    let joined = splitted.join("")
    return joined
}


daycheck.addEventListener('click', () => {
  dayVal = day.value;
  dayVal = titleCase(dayVal)

  switch (dayVal) {
    case 'Sunday':
      console.log('This is a holy day!');
      break;
    case 'Monday':
      console.log('This is the first working day!');
      break;
    case 'Tuesday':
      console.log('This is the second working day!');
      break;
    case 'Wednesday':
      console.log('This is mid week!');
      break;
    case 'Thursday':
      console.log('A day after the mid week!');
      break;
    case 'Friday':
      console.log('Almost weekend!');
      break;
    case 'Saturday':
      console.log('This is weekend!');
      break;

    default:
      console.log('Enter a correct day of the week');
      break;
  }
});


let grade = 'B';

switch (grade) {
  case 'A':
    console.log('EXCELLENT');
    break;

  case 'B':
    console.log('VERY GOOD');
    break;

  case 'C':
    console.log('GOOD');
    break;

  case 'D':
    console.log('POOR');
    break;

  case 'F':
    console.log('FAILED');
    break;

  default:
    console.log('Enter the correct grade');
    break;
}
