import throttle from 'lodash.throttle';

// Обьявляемый переменные
const LOCALSTORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
let formFilter = {};

// вешаем слушателя на форму
form.addEventListener("input", throttle(inputForm, 500))
function inputForm(evt) {
    formFilter[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formFilter)); 
}

// получение данных из локального хранилище
initForm()
function initForm() {
  let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
  if (persistedFilters) {
    persistedFilters = JSON.parse(persistedFilters)
    Object.entries(persistedFilters).forEach(([name, value]) => {
      form.elements[name].value = value;
    })
  }
}

// получение данных  и очистка локального хранилища
form.addEventListener("submit", saveEmail);
function saveEmail(evt) {
  evt.preventDefault();

  const inputEmail = form.elements.email.value;
  const inputMessage = form.elements.message.value;
  if (inputEmail && inputMessage !== "") {
    let userForm = localStorage.getItem(LOCALSTORAGE_KEY);
    userForm = JSON.parse(userForm);
    console.log(userForm);
    localStorage.removeItem(LOCALSTORAGE_KEY);
  evt.currentTarget.reset();  
  } 
  }
