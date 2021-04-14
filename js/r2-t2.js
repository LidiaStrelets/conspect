const images = [
  {
    src: './images/fish/1.jpg',
    alt: 'Grilled salmon',
    width: '1200',
    height: '675',
  },
  {
    src: './images/fish/2.jpg',
    alt: 'Salmon with salad',
    width: '3000',
    height: '2008',
  },
  {
    src: './images/fish/3.jpg',
    alt: 'Salmon with asparagus',
    width: '600',
    height: '400',
  },
  {
    src: './images/fish/4.jpg',
    alt: 'Bass with vegetables',
    width: '1024',
    height: '768',
  },
  {
    src: './images/fish/5.jpg',
    alt: 'Big salmon roll',
    width: '640',
    height: '426',
  },
  {
    src: './images/fish/6.jpg',
    alt: 'Salmon wis peas',
    width: '660',
    height: '465',
  },
  {
    src: './images/fish/7.jpg',
    alt: 'Bass with potatoes',
    width: '700',
    height: '470',
  },
  {
    src: './images/fish/8.jpg',
    alt: 'Fish fries',
    width: '870',
    height: '480',
  },
];

if ('loading' in HTMLImageElement.prototype) {
  console.log('I support!');
} else {
  console.log('And me dont');
}

// const createMenu = dishes =>
//   dishes
//     .map(
//       ({ src, alt, width, height }) => `<li class="dish">
//   <img loading="lazy"
//   src="${src}" alt="${alt}" width=${width} height=${height} />
//   <p class="dish__description">
//     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quod
//     pariatur, maxime ut error aperiam cupiditate provident adipisci, vel
//     deserunt enim doloremque qui laudantium optio est magni id mollitia eum!
//   </p>
// </li>`,
//     )
//     .join('');

// const refs = {
//   list: document.querySelector('.menu'),
// };

// const menu = createMenu(images);
// refs.list.innerHTML = menu;

// const imagesRef = document.querySelectorAll('[loading="lazy"]');

// const handleImageLoading = event => {
//   console.log('Loaded image', event.target);
//   event.target.classList.add('loaded');
// };

// imagesRef.forEach(img => {
//   img.addEventListener('load', handleImageLoading, { once: true });
// });
