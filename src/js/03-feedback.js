import _ from 'lodash';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', _.throttle(onFormChenge, 500));
formEl.addEventListener('submit', onFormSubmit);

// console.dir(formEl.elements.email.value);
// console.dir(formEl.elements.message.value);

// Если лок. хранилище не пустое, то переносит данные в форму.
if (localStorage.getItem('feedback-form-state')) {
  const FormObject = JSON.parse(localStorage.getItem('feedback-form-state'));
  //   console.log(FormObject);

  formEl.elements.email.value = FormObject.email;
  formEl.elements.message.value = FormObject.message;
}

//Функция создает данные в локальном хранилище
function onFormChenge(event) {
  //   console.log(event.target.value);

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(createFormObject())
  );
}

// console.log(objectForm);
// Функция обработчик при отправке формы.
function onFormSubmit(event) {
  event.preventDefault();

  if (
    formEl.elements.email.value === '' ||
    formEl.elements.message.value === ''
  ) {
    return;
  }

  //   createFormObject();
  console.log(createFormObject());

  event.target.reset();

  localStorage.removeItem('feedback-form-state');
}

// Функция создает объект с данными из формы.
function createFormObject() {
  const formObject = { email: '', message: '' };

  formObject.email = formEl.elements.email.value;
  formObject.message = formEl.elements.message.value;

  //   console.log(formObject);

  return formObject;
}
