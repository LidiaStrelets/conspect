import countries from './countries.js';

const refs = {
  list: document.querySelector('.countries'),
  anchor: document.querySelector('.anchor'),
};

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
  refs.list.insertAdjacentHTML('beforeend', string);
};

const populatePage = () => {
  renderMarkup(createMarkup(makePartOfData(dataCopy)));
};

// populatePage();

const observer = new IntersectionObserver(observerCallback, { threshold: 0 });
observer.observe(refs.anchor);
function observerCallback([entrie], observerRef) {
  if (!entrie.isIntersecting) {
    return;
  }
  populatePage();
  if (currentPosition > dataCopy.length) {
    console.log('no mare countries');
    observerRef.unobserve(refs.anchor);
  }
}
