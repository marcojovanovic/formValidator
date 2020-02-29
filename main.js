// posmatras svako polje pojedinacno da promenis boju bordera i prikazes gresku ako je ima +
// small za poruku ispod svakog polja +
// prikaz poruke +
// za email uradi regex +
// refaktor koliko umes // svi inputi u arr +
// neka svaki input pokaze svoje ime u gresci, naziv inputa UpperCase +
// funkcija koja proverava duzinu lengtha za username i password izmedju 3 i 9 karaktera
// funkcija poja proverava da li je password1 i password2 da su jednaki +

const form = document.querySelector('.form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#confirmPassword');
const inputs = document.querySelectorAll('.input');

form.addEventListener('submit', e => {
  e.preventDefault();

  isValid(inputs);
  matchPassword(password, password2);
  checkLength(username, password);
});

function displayError(input, message) {
  const small = input.nextElementSibling;
  input.style.borderColor = 'red';
  small.innerHTML = message;
  small.classList.add('red');
}

function showSuccess(input) {
  input.style.borderColor = 'green';
}

email.addEventListener('blur', () => {
  let emailValue = email.value;

  let regex = /'^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'/;

  if (regex.test(emailValue) === false) {
    displayError(email, 'must enter valid email');
  }
});

function checkLength(username, password) {
  if (username.value.length < 3 || username.value.length > 9) {
    displayError(username, 'enter length between 3 and 9');
  }

  if (password.value.length < 3 || password.value.length > 9) {
    displayError(password, 'enter length between 3 and 9');
  }
}

function matchPassword(password, password2) {
  if (password.value !== password2.value) {
    displayError(password2, 'Password do not match ');
  }
}

function isValid(inputs) {
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      displayError(input, `${input.id} is required`);
    } else {
      showSuccess(input);
    }
  });
}
