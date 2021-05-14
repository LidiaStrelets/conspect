const PROMPT_DELAY = 5000;
const MAX_PROMPT_ATTEMPTS = 3;

let wantsShowing = true;
let promptCounter = 0;
let hasSubscribed = false;
let intervalId = null;

const refs = {
  subscribeBtn: document.querySelector('.subs-btn'),
  closeBtn: document.querySelector('.close-btn'),
  stopShowingBtn: document.querySelector('.stop-btn'),
};

const openModal = () => {
  document.body.classList.add('show-modal');
  promptCounter += 1;
};

setTimeout(openModal, PROMPT_DELAY);

refs.closeBtn.addEventListener('click', () => {
  document.body.classList.remove('show-modal');

  if (promptCounter === MAX_PROMPT_ATTEMPTS) {
    console.log('wont show any more');
    return;
  }

  setTimeout(openModal, PROMPT_DELAY);
});

refs.subscribeBtn.addEventListener('click', () => {
  hasSubscribed = true;
  document.body.classList.remove('show-modal');
});
