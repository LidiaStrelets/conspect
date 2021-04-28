var template = Handlebars.compile('Handlebars <b>{{doesWhat}}</b>');
// execute the compiled template and print the output to the console
console.log(template({ doesWhat: 'rocks!' }));

const colors = [
  { hex: '#008080', rgb: '(0,128,128)' },
  { hex: '#d8bfd8', rgb: '(216,191,216)' },
  { hex: '#ff6347', rgb: '(255,99,71)' },
  { hex: '#40e0d0', rgb: '(64,224,208)' },
  { hex: '#ee82ee', rgb: '(238,130,238)' },
  { hex: '#f5deb3', rgb: '(245,222, 179)' },
  { hex: '#f5f5f5', rgb: '(245,245,245)' },
  { hex: '#ffff00', rgb: '(255,255,0)' },
  { hex: '#9acd32', rgb: '(154,205,50)' },
  { hex: '#a52a2a', rgb: '(165,42,42)' },
  { hex: '#5f9ea0', rgb: '(95,158,160)' },
  { hex: '#dc143c', rgb: '(220,20,60)' },
  { hex: '#556b2f', rgb: '(85,107,47)' },
];

const box = document.querySelector('.box');
const palette = document.querySelector('.palette');

// const colorCardTemplate = Handlebars.compile(
//   '<div class="color-card"><div class="color-swatch" data-hex="{{hex}}" data-rgb="{{rgb}}" style="background-color: {{hex}}"></div><div class="color-meta"><p>HEX: {{hex}}</p><p>RGB: {{rgb}}</p></div></div>',
// );
const colorCardsTemplate = Handlebars.compile(
  '{{#each this}}<div class="color-card"><div class="color-swatch" data-hex="{{hex}}" data-rgb="{{rgb}}" style="background-color: {{hex}}"></div><div class="color-meta"><p>HEX: {{hex}}</p><p>RGB: {{rgb}}</p></div></div>{{/each}}',
);

// const createMarkup = colors => colors.map(colorCardTemplate).join('');

const createMarkup = colors => colorCardsTemplate(colors);

const removeActiveClass = () => {
  const currentActiveCard = box.querySelector('.is-active');

  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
};

const activateCurrentColor = event => {
  event.target.closest('.color-card').classList.add('is-active');
  document.body.style.backgroundColor = event.target.dataset.hex;
};

const markup = createMarkup(colors);
console.log(markup);
palette.innerHTML = markup;

box.addEventListener('click', event => {
  if (!event.target.classList.contains('color-swatch')) {
    return;
  }

  removeActiveClass();

  activateCurrentColor(event);
});
