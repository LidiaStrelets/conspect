refs = {
  girlsList: document.querySelector('.girls-list'),
  studentsList: document.querySelector('.students-list'),
  listItems: document.querySelectorAll('li'),
  p1: document.querySelector('.list-title'),
  p2: document.querySelector('.list-title2'),
};
// console.log(refs.listItems);
const allItems = [];
for (const item of refs.listItems) {
  allItems.push(item.textContent);
}

// console.log(allItems);
const newItems = allItems.filter(
  (item, index, array) => array.indexOf(item) === index,
);
// console.log(newItems);
refs.p1.remove();
refs.p2.remove();
refs.girlsList.remove();
refs.studentsList.remove();

const newItemsMarkup = [];
const newTitle = document.createElement('p');
newTitle.textContent = 'Without matches';
const newList = document.createElement('ul');

newItems.map(item => {
  const newItem = document.createElement('li');
  newItem.textContent = item;
  newItemsMarkup.push(newItem);
});

newList.append(...newItemsMarkup);
document.body.prepend(newTitle, newList);
