const refs = {
  start: document.querySelector('.game-start'),
  path: document.querySelectorAll('.game-path'),
  end: document.querySelector('.game-finish'),
  gameOver: document.querySelector('.game-field'),
  status: document.querySelector('.game-status'),
};

const handlePathLeaving = event => {
  if (!event.target.classList.contains('game-field')) {
    return;
  }
  refs.status.textContent = 'Вы проиграли! Начните с начала!';
  event.currentTarget.classList.add('loose');
  event.currentTarget.removeEventListener('mouseover', handlePathLeaving);
  event.currentTarget.removeEventListener('mouseover', handleFinishCrossing);
};
const handleFinishCrossing = event => {
  if (!event.target.classList.contains('game-finish')) {
    return;
  }
  refs.gameOver.removeEventListener('mouseleave', handleGameFieldLeaving);
  refs.status.textContent = 'Вы победили!!! Хотите сыграть еще?';
  event.currentTarget.removeEventListener('mouseover', handleFinishCrossing);
  event.currentTarget.removeEventListener('mouseover', handlePathLeaving);
};
const handleGameFieldLeaving = event => {
  event.currentTarget.classList.remove('loose');
  refs.status.textContent = 'Ожидаю начала игры...';
};

refs.gameOver.addEventListener('mouseover', event => {
  refs.gameOver.addEventListener('mouseleave', handleGameFieldLeaving);
  if (event.target.classList.contains('game-start')) {
    refs.status.textContent = 'Игра началась!';
    event.currentTarget.addEventListener('mouseover', handlePathLeaving);
    event.currentTarget.addEventListener('mouseover', handleFinishCrossing);
  }
  return;
});
