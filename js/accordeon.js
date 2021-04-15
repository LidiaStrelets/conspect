const menuTitleRef = document.querySelector('.menu-title');
const menuRef = document.querySelector('.restaurant-menu');

menuTitleRef.addEventListener('click', () => {
  menuRef.classList.toggle('opened');
});

let currentOpenedList = '';
let currentOpenedSublist = '';

menuRef.addEventListener('click', event => {
  if (event.target.classList.contains('dish-subgroup')) {
    if (currentOpenedSublist) {
      if (currentOpenedSublist === event.target) {
        currentOpenedSublist.nextElementSibling.classList.remove('opened');
        currentOpenedSublist = '';
        return;
      }
      currentOpenedSublist.nextElementSibling.classList.remove('opened');
    }

    event.target.nextElementSibling.classList.toggle('opened');
    currentOpenedSublist = event.target;
  }
  if (event.target.classList.contains('dish-group')) {
    if (currentOpenedList) {
      if (currentOpenedList === event.target) {
        currentOpenedList.nextElementSibling.classList.remove('opened');
        currentOpenedList = '';
        return;
      }
      currentOpenedList.nextElementSibling.classList.remove('opened');
    }

    event.target.nextElementSibling.classList.toggle('opened');
    currentOpenedList = event.target;
  }
});
