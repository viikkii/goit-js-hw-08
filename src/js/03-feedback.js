// import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const formFilter = {};

form.addEventListener("change", evt => {
    formFilter[evt.target.name] = evt.target.value;
    console.log(formFilter);
    localStorage.setItem('formFilter', JSON.stringify(formFilter));
});

form.addEventListener("submit", saveEmail);

function saveEmail(evt) {
  evt.preventDefault();
    console.log(`email :`, form.elements.email.value);
    console.log(`message :`, form.elements.message.value);
}

localStorage.removeItem("formFilter"); 
