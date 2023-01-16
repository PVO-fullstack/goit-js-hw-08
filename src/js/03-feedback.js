const formSubmit = document.querySelector('.feedback-form');
const emailForm = document.querySelector('.feedback-form input');
const textareaForm = document.querySelector('.feedback-form textarea');

formSubmit.addEventListener('submit', handleSubmit);
formSubmit.addEventListener('input', onInputData);

onFormReload();

const formData = {}

function onInputData(event) {
 formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


function handleSubmit(event) {
    event.preventDefault();
  event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');

      }

function onFormReload() {
const savedData = localStorage.getItem('feedback-form-state');
const parsedData = JSON.parse(savedData);  
  if (parsedData) {
emailForm.value = parsedData.email;
textareaForm.value = parsedData.message;
        }
      }


