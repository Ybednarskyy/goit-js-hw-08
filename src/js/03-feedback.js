import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

const formData = {};

// Заповняє поля форми збереженими даними
populateTextArea();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextInput, 500));

// Зберігає в local storage введені дані
function onTextInput(evt) {
  formData[evt.target.name] = evt.target.value;
  console.log(formData);
  localStorage.setItem('formData', JSON.stringify(formData));
}

// Надсилає дані, очищає форму і сховище
function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Send form');
  console.log(localStorage.getItem('formData'));

  evt.currentTarget.reset();
  localStorage.removeItem('formData');
}

// Присвоює полям форми збережжені дані, якщо такі є
function populateTextArea() {
  const savedData = JSON.parse(localStorage.getItem('formData'));

  try {
    if (savedData.email) {
      refs.email.value = savedData.email;
    }

    if (savedData.message) {
      refs.message.value = savedData.message;
    }
  } catch (e) {
    console.log(e.message);
  }
}
