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

const createEl = (tag, cl) => {
  const element = document.createElement(tag);
  element.classList.add(cl);
  return element;
};

const createMarkup = colors => {
  return colors.map(({ hex, rgb }) => {
    const card = createEl('div', 'color-card');

    const swatch = createEl('div', 'color-swatch');
    swatch.dataset.hex = `${hex}`;
    swatch.dataset.rgb = rgb;
    swatch.style.backgroundColor = hex;

    const meta = createEl('div', 'color-meta');

    const hexText = createEl('p', 'color-hex');
    hexText.textContent = `HEX: ${hex}`;
    const rgbText = createEl('p', 'color-rgb');
    rgbText.textContent = `RGB: ${rgb}`;

    meta.append(hexText, rgbText);

    card.append(swatch, meta);

    return card;
  });
};

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
palette.prepend(...markup);

box.addEventListener('click', event => {
  if (!event.target.classList.contains('color-swatch')) {
    return;
  }

  removeActiveClass();

  activateCurrentColor(event);
});
