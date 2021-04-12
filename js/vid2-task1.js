const sources = [
  'https://i.pinimg.com/originals/b6/cd/f6/b6cdf6a4084e4d3e54281e91a8749726.png',
  'https://ichef.bbci.co.uk/news/640/cpsprodpb/14A82/production/_116301648_gettyimages-1071204136.jpg',
  'https://www.sostav.ru/images/news/2019/04/01/9iithyjt_md.jpg',
  'https://18000.com.ua/wp-content/uploads/2019/02/котики.jpg',
];

const refs = {
  openGalleryBtn: document.querySelector('[data-action="open-gallery"]'),
  closeGalleryBtn: document.querySelector('[data-action="close-gallery"]'),
  toRightBtn: document.querySelector('.to-right'),
  toLeftBtn: document.querySelector('.to-left'),
  currentImg: document.querySelector('img'),
};

const showNextImg = () => {
  const currentSrc = sources.indexOf(refs.currentImg.src);
  if (currentSrc + 1 < sources.length) {
    refs.currentImg.src = sources[currentSrc + 1];
  } else {
    refs.currentImg.src = sources[0];
  }
};

const showPreviousImg = () => {
  let currentSrc = sources.indexOf(refs.currentImg.src);
  if (currentSrc === 0) {
    refs.currentImg.src = sources[sources.length - 1];
    currentSrc = sources.length - 1;
  } else {
    if (currentSrc === -1) {
      currentSrc = sources.length - 1;
    }
    refs.currentImg.src = sources[currentSrc - 1];
  }
};

refs.openGalleryBtn.addEventListener('click', () => {
  document.body.classList.add('gallery-opened');
  window.addEventListener('keydown', event => {
    console.log();
    if (event.code === 'ArrowLeft') {
      showPreviousImg();
    } else if (event.code === 'ArrowRight') {
      showNextImg();
    }
  });
});

refs.closeGalleryBtn.addEventListener('click', () => {
  document.body.classList.remove('gallery-opened');
});

refs.toRightBtn.addEventListener('click', () => showNextImg());

refs.toLeftBtn.addEventListener('click', () => showPreviousImg());
