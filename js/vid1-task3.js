const backLinkRef = document.querySelector('a');
console.log(backLinkRef);
const newNumeratedList = document.createElement('ol');
// console.log(newNumeratedList);
const images = [
  'https://ichef.bbci.co.uk/news/640/cpsprodpb/14A82/production/_116301648_gettyimages-1071204136.jpg',
  'https://www.sostav.ru/images/news/2019/04/01/9iithyjt_md.jpg',
  'https://18000.com.ua/wp-content/uploads/2019/02/котики.jpg',
];
const listItems = [];
images.forEach(image => {
  const newlistItem = document.createElement('li');
  const newImage = document.createElement('img');
  newImage.src = image;
  newImage.alt = 'Cat';
  newImage.width = '200';
  //   newImage.height = '150';
  // console.log(newImage);
  newlistItem.appendChild(newImage);
  // console.log(newlistItem);
  listItems.push(newlistItem);
});
newNumeratedList.append(...listItems);
// console.log(newNumeratedList);
// document.body.appendChild(newNumeratedList);
backLinkRef.before(newNumeratedList);
