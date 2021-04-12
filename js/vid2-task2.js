const refs = {
  text: document.querySelector('.hidden-text'),
  input: document.querySelector('.input'),
};
console.log(refs);
refs.input.addEventListener('blur', event => {
  refs.text.textContent = event.currentTarget.value;
});
