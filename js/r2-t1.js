const refs = {
  coords: document.querySelector('.js-coords'),
  input: document.querySelector('.js-input'),
  output: document.querySelector('.js-output'),
  mouseQuantity: document.querySelector('.mouse-quantity'),
  inputQuantity: document.querySelector('.input-quantity'),
};
console.log(refs);

let mouseMoovesCounter = 0;
refs.mouseQuantity.textContent = mouseMoovesCounter;

const handleMouseMoove = event => {
  mouseMoovesCounter += 1;
  refs.mouseQuantity.textContent = `${mouseMoovesCounter}, X: ${event.clientX}, Y: ${event.clientY}`;
};

window.addEventListener('mousemove', _.debounce(handleMouseMoove, 500));

let inputCounter = 0;
refs.inputQuantity.textContent = inputCounter;

const handleInputChange = event => {
  inputCounter += 1;
  refs.inputQuantity.textContent = `${inputCounter}, значение инпута: ${event.target.value}`;
};

// refs.input.addEventListener('input', _.debounce(handleInputChange, 2000));
