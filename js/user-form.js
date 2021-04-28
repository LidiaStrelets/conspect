const refs = {
  form: document.querySelector('.user-form'),
  textarea: document.querySelector('.user-form__textarea'),
  input: document.querySelector('.user-form__input'),
};
const STORAGE_KEY = 'user-data';
const formData = {};

const populateForm = () => {
  const currentData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (currentData) {
    console.log(currentData);
    refs.input.value = currentData.name;
    refs.textarea.value = currentData.message;
  }
};
populateForm();

const handleFormSubmit = event => {
  event.preventDefault();

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

// const handleMessageInput = event => {
//   const userMessage = event.target.value;
//   localStorage.setItem(STORAGE_KEY, userMessage);
//   console.log(localStorage);
// };

const handleFormInput = event => {
  formData[event.target.name] = event.target.value;
  console.log(formData);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

refs.form.addEventListener('submit', handleFormSubmit);
// refs.textarea.addEventListener('input', _.debounce(handleMessageInput, 1000));

refs.form.addEventListener('input', _.debounce(handleFormInput, 500));
