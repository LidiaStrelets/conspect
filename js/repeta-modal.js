const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

const handleEscPress = event => {
  if (event.code === 'Escape') {
    handleModalClosing();
  }
};
const handleModalOpening = event => {
  document.body.classList.add('show-modal');
  window.addEventListener('keydown', handleEscPress);
};
const handleModalClosing = event => {
  document.body.classList.remove('show-modal');
  window.removeEventListener('keydown', handleEscPress);
};
refs.openModalBtn.addEventListener('click', handleModalOpening);

refs.closeModalBtn.addEventListener('click', handleModalClosing);

refs.backdrop.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    handleModalClosing();
  }
});
