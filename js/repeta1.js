const listItemsRef = document.querySelectorAll('li');
// console.log(listItemsRef);

const btnRef = document.querySelector('button');

btnRef.addEventListener('click', () => {
  //   const imgRef = document.querySelector('img');
  //   imgRef.src = './images/cat2.jpeg';
  //   imgRef.alt = 'my new cat';
  const ulRef = document.querySelector('.nav');
  //   console.log(ulRef);
  ulRef.classList.toggle('true');
});

const currentPage = '/portfolio';
// console.log(listItemsRef);
// console.log(listItemsRef[0].querySelector('a').href);
listItemsRef.forEach(listItem => {
  const linkRef = listItem.querySelector('a');
  if (linkRef.href.includes(currentPage)) {
    // console.log(listItem);
    listItem.classList.add('current');
  }
});

const titleRef = document.querySelector('h1');
// console.log(titleRef.textContent);

titleRef.textContent = 'Now here appeares a new title';

const buttonsRef = document.querySelectorAll('.js-actions button');
// console.log(buttonsRef[0].dataset.action);

/////////
// creating elements

// const mainTitle = document.createElement('h2');
// console.log(mainTitle);
// mainTitle.classList.add('main-pagetitle');
// mainTitle.textContent = 'this is a big title';
// document.body.appendChild(mainTitle);

// const prettyPicture = document.createElement('img');
// console.log(prettyPicture);
// prettyPicture.src =
//   'https://ichef.bbci.co.uk/news/640/cpsprodpb/14236/production/_104368428_gettyimages-543560762.jpg';
// prettyPicture.alt = 'insearted cat';
// prettyPicture.width = '300';
// document.body.appendChild(prettyPicture);

const navItemEl = document.createElement('li');
navItemEl.classList.add('nav-item');
// console.log(navItemEl);
const navLinkEl = document.createElement('a');
navLinkEl.classList.add('nav-link');
navLinkEl.href = '/profile';
navLinkEl.textContent = 'Personal room';
// console.log(navLinkEl);

navItemEl.appendChild(navLinkEl);
const listRef = document.querySelector('.nav');
// listRef.appendChild(navItemEl);
listRef.insertBefore(navItemEl, listRef.firstElementChild);
/////////
// creating collection of elements

const colorPickerOptions = [
  { label: 'red', color: 'red' },
  { label: 'blue', color: 'blue' },
  { label: 'yellow', color: 'yellow' },
  { label: 'green', color: 'green' },
  { label: 'pink', color: 'pink' },
  { label: 'tomato', color: 'tomato' },
];

const newButtons = [];
colorPickerOptions.forEach(color => {
  const newBtnEl = document.createElement('button');
  newBtnEl.textContent = color.label;
  newBtnEl.style.backgroundColor = color.color;
  //   console.log(newBtnEl);
  newButtons.push(newBtnEl);
});
const allBtnsRef = document.querySelector('.buttons-block');
allBtnsRef.append(...newButtons);
