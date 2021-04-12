const refs = {
  input: document.querySelector('#user-input'),
  addBtn: document.querySelector('[data-action="add-item"]'),
  createBtn: document.querySelector('[data-action="create-list"]'),
};

const items = [];
refs.addBtn.addEventListener('click', () => {
  items.push(refs.input.value);
  refs.input.value = '';
});

refs.input.addEventListener('keypress', event => {
  if (event.code === 'Enter') {
    items.push(refs.input.value);
    refs.input.value = '';
  }
});

refs.createBtn.addEventListener('click', () => {
  const markup = [];
  items.forEach(item => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('check__input');

    const span = document.createElement('span');
    span.classList.add('custom-checkbox');

    const label = document.createElement('label');
    label.textContent = item;
    label.classList.add('list-item');

    label.prepend(checkbox, span);

    li.append(label);
    markup.push(li);
  });
  const toDoList = document.createElement('ul');
  toDoList.append(...markup);
  refs.createBtn.after(toDoList);

  const checkboxesRefs = document.querySelectorAll('[type = "checkbox"]');
  console.log(checkboxesRefs);

  checkboxesRefs.forEach(checkbox => {
    checkbox.addEventListener('focus', event => {
      if (!event.currentTarget.checked) {
        console.log(checkbox.parentNode);
        checkbox.parentNode.style.color = 'green';
      } else {
        checkbox.parentNode.style.color = 'black';
      }
    });
  });
});
