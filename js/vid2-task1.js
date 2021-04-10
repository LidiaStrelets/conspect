const sources = [
  'https://i.pinimg.com/originals/b6/cd/f6/b6cdf6a4084e4d3e54281e91a8749726.png',
  'https://ichef.bbci.co.uk/news/640/cpsprodpb/14A82/production/_116301648_gettyimages-1071204136.jpg',
  'https://www.sostav.ru/images/news/2019/04/01/9iithyjt_md.jpg',
  'https://18000.com.ua/wp-content/uploads/2019/02/котики.jpg',
];

const openGalleryBtnRef = document.querySelector(
  '[data-action="open-gallery"]',
);
// console.log(openGalleryBtnRef);
openGalleryBtnRef.addEventListener('click', () => {
  //   console.log('hi');
  document.body.classList.add('gallery-opened');
});
const closeGalleryBtnRef = document.querySelector(
  '[data-action="close-gallery"]',
);
// console.log(openGalleryBtnRef);
closeGalleryBtnRef.addEventListener('click', () => {
  //   console.log('hi');
  document.body.classList.remove('gallery-opened');
});
const toRightBtnRef = document.querySelector('.to-right');
const toLeftBtnRef = document.querySelector('.to-left');
const currentImgRef = document.querySelector('img');
console.log(toRightBtnRef);
toRightBtnRef.addEventListener('click', () => {
  const currentSrc = sources.indexOf(currentImgRef.src);
  console.log(currentSrc);
  if (currentSrc + 1 < sources.length) {
    currentImgRef.src = sources[currentSrc + 1];
  } else {
    currentImgRef.src = sources[0];
  }
});
toLeftBtnRef.addEventListener('click', () => {
  let currentSrc = sources.indexOf(currentImgRef.src);
  console.log('Открыта картинка номер ', currentSrc);
  if (currentSrc === 0) {
    currentImgRef.src = sources[sources.length - 1];
    currentSrc = sources.length - 1;
    console.log(currentSrc);
  } else {
    if (currentSrc === -1) {
      currentSrc = sources.length - 1;
    }
    console.log('else: ', currentSrc);
    currentImgRef.src = sources[currentSrc - 1];
  }
  console.log(currentSrc);
});
