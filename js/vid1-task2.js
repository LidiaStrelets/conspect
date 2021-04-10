const listRef = document.querySelector('ul');
// console.log(listRef);
//
for (const item of listRef.children) {
  if (Number(item.textContent) % 2 === 0) {
    item.remove();
  }
}
// console.log(listRef.children);

for (const item of listRef.children) {
  item.textContent = '';
  item.insertAdjacentHTML(
    'afterbegin',
    '<img src="./images/cat1.jpeg" alt="Cat" width="100"/>',
  );
}
