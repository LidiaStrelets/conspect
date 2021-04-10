const scoreRef = document.querySelectorAll('td');
// console.log(scoreRef);
scoreRef.forEach(item => {
  if (Number(item.textContent) < 10) {
    console.log(item);
    item.classList.add('red-score');
  }
  if (Number(item.textContent) >= 10) {
    console.log(item);
    item.classList.add('green-score');
  }
});
