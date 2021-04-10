const refs = {
  list: document.querySelector('ul'),
};
// console.log(refs);
// console.log(refs.list.children);
// refs.list.children.forEach(item => {
//   console.log(item.textContent);
// });
for (const item of refs.list.children) {
  console.log(item.textContent);
  item.classList.add('list-item');
}
const newListItem = document.createElement('li');
newListItem.textContent = 'Cake';
newListItem.classList.add('list-item');
refs.list.appendChild(newListItem);

// refs.list.style.color = 'red';
// for (const item of refs.list.children) {
//   item.
// }
