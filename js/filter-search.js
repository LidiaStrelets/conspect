const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

const populateList = markup => {
  refs.list.innerHTML = markup;
};

const createListItemsMarkup = items => {
  return items.map(item => `<li>${item.label}</li>`).join('');
};
const fullList = createListItemsMarkup(tech);
populateList(fullList);

// const handleInputChange = event =>
//   populateList(
//     createListItemsMarkup(
//       [...tech].filter(item =>
//         item.label.toLowerCase().includes(event.target.value.toLowerCase()),
//       ),
//     ),
//   );

const handleInputChange = event => {
  const userInput = event.target.value.toLowerCase();
  const filteredList = [...tech].filter(item =>
    item.label.toLowerCase().includes(userInput),
  );
  const actualMarkup = createListItemsMarkup(filteredList);
  populateList(actualMarkup);
};

refs.input.addEventListener('input', _.debounce(handleInputChange, 300));
