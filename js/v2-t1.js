import countries from './countries.js';

const listRef = document.querySelector('.countries');

let currentPosition = 0;
const length = 8;
const dataCopy = [...countries];
let counter = 0;

const makePartOfData = data => {
  const currentData = data.slice(currentPosition, currentPosition + length);
  currentPosition += length;
  return currentData;
};

const createMarkup = array =>
  array
    .map(
      country =>
        `<li><h2 class="country-name">${country}</h2><p class="country-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quia id magnam. Ad est voluptatum nemo. Aperiam saepe voluptates mollitia facere ipsum natus quisquam, incidunt, voluptate rerum aliquam magni officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quia id magnam. Ad est voluptatum nemo. Aperiam saepe voluptates mollitia facere ipsum natus quisquam, incidunt, voluptate rerum aliquam magni officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quia id magnam. Ad est voluptatum nemo. Aperiam saepe voluptates mollitia facere ipsum natus quisquam, incidunt, voluptate rerum aliquam magni officiis.</p> </li>`,
    )
    .join('');

const renderMarkup = string => {
  listRef.insertAdjacentHTML('beforeend', string);
};

const populatePage = () => {
  renderMarkup(createMarkup(makePartOfData(dataCopy)));
};

const handleScroll = () => {
  console.log(counter);
  counter += 1;
  if (!isBottom()) {
    return;
  }
  populatePage();
  const liRef = document.querySelectorAll('li');
  console.log(`На странице в данный момент ${liRef.length} стран`);
  if (currentPosition > dataCopy.length) {
    console.log('Данных больше нет');
    window.removeEventListener('scroll', handleScroll);
  }
};

populatePage();

const isBottom = () =>
  window.innerHeight + window.scrollY >= document.body.offsetHeight;

window.addEventListener('scroll', _.throttle(handleScroll, 300));
