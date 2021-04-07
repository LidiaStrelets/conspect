const targetBtnRef = document.querySelector('.js-target-btn');
const addBtnRef = document.querySelector('.js-add-btn');
const removeBtnRef = document.querySelector('.js-remove-btn');
// console.log(removeBtnRef);

// const handleTargetBtnClick = () => {
//   console.log('Произошел клик по кнопке');
// };

// addBtnRef.addEventListener('click', event => {
//   console.log(event);
//   console.log('Добавил слушателя на целевую кнопку');
//   targetBtnRef.addEventListener('click', HandleTargetBtnClick);
// });
// removeBtnRef.addEventListener('click', () => {
//   console.log('Снял слушателя с целевой кнопки');
//   targetBtnRef.removeEventListener('click', HandleTargetBtnClick);
// });
////////////
// об объекте event
// const formRef = document.querySelector('.js-register-form');

// const handleFormSubmit = event => {
//   event.preventDefault();
//   //   const formElements = event.currentTarget.elements;
//   //   console.dir(.subscription.value);
//   //   console.log('hi');
//   //   console.log(formElements.email.value);
//   //   console.log(formElements.password.value);
//   //   console.log(formElements.subscription.value);
//   //   const email = formElements.email.value;
//   //   const password = formElements.password.value;
//   //   const subscription = formElements.subscription.value;

//   //   const userData = {
//   //     email,
//   //     password,
//   //     subscription,
//   //   };

//   //   console.log(userData);

//   const formData = new FormData(event.currentTarget);
//   //   console.log(formData);
//   formData.forEach((x, y) => {
//     console.log('x', x);
//     console.log('y', y);
//   });
// };

// formRef.addEventListener('submit', handleFormSubmit);
////////////////////
// события инпутов

// const inputRef = document.querySelector('.js-input');
// const nameRef = document.querySelector('.js-submit-btn>span');
// const submitRef = document.querySelector('.js-license');
// const buttonRef = document.querySelector('.js-submit-btn');

// const refs = {
//   input: document.querySelector('.js-input'),
//   name: document.querySelector('.js-submit-btn>span'),
//   submit: document.querySelector('.js-license'),
//   button: document.querySelector('.js-submit-btn'),
// };
// // console.log(refs);

// const handleInputFocus = event => {
//   console.log('Инпут получил фокус');
// };
// // refs.input.addEventListener('focus', handleInputFocus);

// const handleInputBlur = event => {
//   console.log('Инпут потерял фокус');
// };
// // refs.input.addEventListener('blur', handleInputBlur);

// const handleInputChange = event => {
//   console.log('Инпут измнен');
//   console.log(event);
// };
// // refs.input.addEventListener('change', handleInputChange);

// const handleInputText = event => {
//   //   console.log('Инпут изменен');
//   //   console.log(event.currentTarget.value);
//   refs.name.textContent = event.currentTarget.value;
// };
// refs.input.addEventListener('input', handleInputText);

// const handleLicenseChange = event => {
//   //   console.log('hello');
//   refs.button.disabled = !event.currentTarget.checked;
// };
// refs.submit.addEventListener('change', handleLicenseChange);
///////////
// события клавиатуры
// const refs = {
//   output: document.querySelector('.js-output'),
//   clearBtn: document.querySelector('.js-clear'),
// };

// const handleKeyDown = event => {
//   //   console.log('keydown', event.code);
//   if (event.code === 'Escape') {
//     refs.output.textContent = '';
//   }
//   if (event.code === 'ShiftLeft') {
//     refs.output.textContent = refs.output.textContent.toUpperCase();
//   }
// };
// window.addEventListener('keydown', handleKeyDown);

// const handleKeyPress = event => {
//   //   console.log(event);
//   //   console.log('key', event.key);
//   //   console.log('code', event.code);

//   refs.output.textContent += event.key;
// };
// window.addEventListener('keypress', handleKeyPress);

// const handleRemoveBtnClick = event => {};
// refs.clearBtn.addEventListener('click', handleRemoveBtnClick);
//////////
// события мышки
const boxRef = document.querySelector('.js-box');

boxRef.addEventListener('mouseover', event => {
  console.log('mouse in');
  const currentBox = event.currentTarget;
  boxRef.classList.add('box__active');
});
boxRef.addEventListener('mouseout', event => {
  console.log('mouse out');
  const currentBox = event.currentTarget;
  boxRef.classList.remove('box__active');
});
