const refs = {
  input: document.querySelector('#user-input'),
  addBtn: document.querySelector('[data-action="add-item"]'),
  list: document.querySelector('.todo-list'),
  arrorMessage: document.querySelector('.arror'),
  backdrop: document.querySelector('.backdrop'),
};
// console.log(refs);
const handleEscClick = event => {
  if (event.code === 'Escape') {
    document.body.classList.remove('message-shown');
  }
};

const createListItem = value => {
  const li = document.createElement('li');
  li.classList.add('list-item');

  const done = document.createElement('span');
  done.classList.add('done-circle');

  const notActual = document.createElement('span');
  notActual.classList.add('notactual-circle');

  const doneText = document.createElement('span');
  doneText.classList.add('done-label');
  doneText.textContent = 'Done!';

  const notActualText = document.createElement('span');
  notActualText.classList.add('notactual-label');
  notActualText.textContent = 'Cross off!';

  const p = document.createElement('p');
  p.classList.add('task');
  p.textContent = value;

  li.append(done, doneText, notActual, notActualText, p);
  refs.list.append(li);
  refs.input.value = '';

  const itemRefs = {
    greenCircle: li.querySelector('.done-circle'),
    greyCircle: li.querySelector('.notactual-circle'),
    text: li.querySelector('.task'),
  };

  itemRefs.greenCircle.addEventListener('click', event => {
    event.currentTarget.classList.toggle('focused');
    itemRefs.text.classList.toggle('done');
    itemRefs.greyCircle.classList.toggle('hidden');
  });
  itemRefs.greyCircle.addEventListener('click', () => {
    event.currentTarget.classList.toggle('focused');
    itemRefs.text.classList.toggle('off');
    itemRefs.greenCircle.classList.toggle('hidden');
  });
};

let userString = [];

refs.addBtn.addEventListener('click', () => {
  userString.push(...refs.input.value);
  if (
    userString
      .slice(0, userString.length / 2)
      .every(symbol => symbol === 'Space')
  ) {
    document.body.classList.add('message-shown');
    window.addEventListener('keydown', handleEscClick);
    userString = [];
    refs.input.value = '';
  } else {
    createListItem(refs.input.value);
    userString = [];
  }
});

refs.input.addEventListener('keypress', event => {
  userString.push(event.code);

  if (event.code === 'Enter') {
    if (
      userString
        .slice(0, userString.length - 1)
        .every(symbol => symbol === 'Space')
    ) {
      document.body.classList.add('message-shown');
      window.addEventListener('keydown', handleEscClick);
      event.currentTarget.value = '';
      userString = [];
    } else {
      createListItem(event.currentTarget.value);
      userString = [];
    }
  }
});

refs.backdrop.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    document.body.classList.remove('message-shown');
  }
  window.removeEventListener('keydown', handleEscClick);
});
