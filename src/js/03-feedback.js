const formSubmit = document.querySelector('.feedback-form');
const emailForm = document.querySelector('.feedback-form input');
const textareaForm = document.querySelector('.feedback-form textarea');
const throttle = require('lodash.throttle');

formSubmit.addEventListener('submit', handleSubmit);
formSubmit.addEventListener('input', throttle(onInputData, 500));

onFormReload();

const formData = {}

function onInputData(event) {
  if (emailForm) {
    formData.email = emailForm.value;
  }
  if (textareaForm) {
    formData.message = textareaForm.value;
  }
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


function handleSubmit(event) {
  event.preventDefault();
  if (emailForm.value && textareaForm.value) {
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(formData);
  }
}

function onFormReload() {
  const savedData = localStorage.getItem('feedback-form-state');
  const parsedData = JSON.parse(savedData);
  if (parsedData) {
    const { email, message } = parsedData;
    if (email) {
      emailForm.value = email;
    } if (message) {
      textareaForm.value = message;
    }
  }
}


