import countries from './countries.js';
const listRef = document.querySelector('.countries');

const createMarkup = array =>
  array
    .map(
      country =>
        `<li><h2 class="country-name">${country}</h2><p class="country-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quia id magnam. Ad est voluptatum nemo. Aperiam saepe voluptates mollitia facere ipsum natus quisquam, incidunt, voluptate rerum aliquam magni officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quia id magnam. Ad est voluptatum nemo. Aperiam saepe voluptates mollitia facere ipsum natus quisquam, incidunt, voluptate rerum aliquam magni officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quia id magnam. Ad est voluptatum nemo. Aperiam saepe voluptates mollitia facere ipsum natus quisquam, incidunt, voluptate rerum aliquam magni officiis.</p> </li>`,
    )
    .join('');

let markup = createMarkup(countries);
listRef.innerHTML = markup;

const inputRef = document.querySelector('.country-search');

let userInput = '';
const handleInput = event => {
  userInput = event.target.value.toLowerCase();
  const filteredCountries = [...countries].filter(country =>
    country.toLowerCase().includes(userInput),
  );
  markup = createMarkup(filteredCountries);
  listRef.innerHTML = markup;
};

inputRef.addEventListener('input', _.debounce(handleInput, 500));
