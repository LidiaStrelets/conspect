const listRef = document.querySelector('.tags');

// для выбора одного из многих
// let selectedTag = '';
// const handleBtnClick = event => {
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   const currentActiveBtn = listRef.querySelector('.chosen');

//   // if (currentActiveBtn) {
//   //   currentActiveBtn.classList.remove('chosen');
//   // }
//   // проверяет, стоит ли слева от вопроса объект и только в этом случае выполнит код справа
//   currentActiveBtn?.classList.remove('chosen');
//   if (currentActiveBtn === event.target) {
//     event.target.classList.remove('chosen');
//     selectedTag = '';
//     return;
//     // console.log('the same');
//   }
//   event.target.classList.add('chosen');
//   selectedTag = event.target.dataset.value;
//   console.log(selectedTag);
// };

// let selected = [];
const selected = new Set();
const handleBtnClick = event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  event.target.classList.toggle('chosen');
  // if (selected.includes(event.target.dataset.value)) {
  //   selected.splice(selected.indexOf(event.target.dataset.value), 1);
  // } else {
  //   selected.push(event.target.dataset.value);
  // }
  if (event.target.classList.contains('chosen')) {
    selected.add(event.target.dataset.value);
  } else {
    selected.delete(event.target.dataset.value);
  }
  // console.log(event.target.classList.contains('chosen'));
  console.log(selected);
};
// console.log(selected);

listRef.addEventListener('click', handleBtnClick);
