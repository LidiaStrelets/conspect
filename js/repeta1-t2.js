const containerRef = document.querySelector('.container');
const addBtn = document.querySelector('.add-btn');

const handleBtnClick = event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log(event.target.nodeName);
};

containerRef.addEventListener('click', handleBtnClick);

let counter = 1;
addBtn.addEventListener('click', () => {
  const newBtn = document.createElement('button');
  newBtn.type = 'button';
  newBtn.classList.add('btn-collection');
  newBtn.textContent = `Кнопка ${counter}`;
  counter += 1;
  // console.log(newBtn);
  containerRef.append(newBtn);
});
