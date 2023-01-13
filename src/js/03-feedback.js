const loginForm = document.querySelector('.feedback-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, message }
      } = event.currentTarget;
      if (email.value === '' || message.value === '') {
        alert('Bсі поля повинні бути заповнені');
      } else {
      const data = {
        email: email.value,
        message: message.value,
      }
      console.log(data);
      localStorage.setItem('feedback-form-state', JSON.stringify(data));
      event.currentTarget.reset();    
      }
}

const savedData = localStorage.getItem('feedback-form-state');
const parsedData = JSON.parse(savedData);
console.log(parsedData);