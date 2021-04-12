const refs = {
  images: document.querySelectorAll('.image'),
  backdrop: document.querySelector('.backdrop'),
  bigImage: document.querySelector('.big-image'),
};

const imageRefs = [];
refs.images.forEach(img => {
  imageRefs.push(img.src);
});

const closeGallery = () => {
  document.body.classList.remove('gallery-opened');
  refs.bigImage.src = '';
};

refs.images.forEach((img, index, ar) => {
  img.addEventListener('click', event => {
    document.body.classList.add('gallery-opened');
    refs.bigImage.src = img.src;

    window.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        closeGallery();
      }
      if (event.code === 'ArrowLeft') {
        if (imageRefs.indexOf(refs.bigImage.src) === 0) {
          refs.bigImage.src = imageRefs[imageRefs.length - 1];
        } else {
          refs.bigImage.src =
            imageRefs[imageRefs.indexOf(refs.bigImage.src) - 1];
        }
      } else if (event.code === 'ArrowRight') {
        if (imageRefs.indexOf(refs.bigImage.src) === imageRefs.length - 1) {
          refs.bigImage.src = imageRefs[0];
        } else {
          refs.bigImage.src =
            imageRefs[imageRefs.indexOf(refs.bigImage.src) + 1];
        }
      }
    });
    refs.backdrop.addEventListener('click', event => {
      if (event.target === event.currentTarget) {
        closeGallery();
      }
    });
  });
});
