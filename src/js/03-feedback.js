const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

filling();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput() {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: form.email.value, message: form.message.value })
  );
}

function filling() {
  if (localStorage.getItem('feedback-form-state')) {
    const memory = JSON.parse(localStorage.getItem('feedback-form-state'));
    form.email.value = memory.email;
    form.message.value = memory.message;
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log({ email: form.email.value, message: form.message.value });
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
