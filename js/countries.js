import countries from './countrie-arrays.js';
// console.log(countries);

const galleryRef = document.querySelector('.countries-gallery');

const galleryItemsTemplate = Handlebars.compile(
  '{{#each this}}<li class="gallery__item"><div class="gallery__thumb"><img src="{{flag}}" alt="Country flag" width="320"></div><h2>{{country}}</h2><p><b>Main city:</b>{{capital}}</p><p><b>Currency:</b>{{currency}}</p><p><b>Official language:</b>{{language}}</p><p><b>Population:</b>{{population}}</p></li>{{#if infected}}<p>Everybody dies!!!</p>{{/if}}{{#unless infected}}<p>All right!</p>{{/unless}}{{/each}}',
);

const createMarkup = countries => galleryItemsTemplate(countries);
const markup = createMarkup(countries);
galleryRef.innerHTML = markup;
