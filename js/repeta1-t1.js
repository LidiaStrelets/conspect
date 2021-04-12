const refs = {
  parent: document.querySelector('.parent'),
  child: document.querySelector('.child'),
  innerChild: document.querySelector('.inner-child'),
};
const handleParentClick = e => {
  console.log('handle parent click');
  console.log('target: ', e.target);
  console.log('current target: ', e.currentTarget);
};
const handleChildClick = e => {
  console.log('handle child click');
  console.log('target: ', e.target);
  console.log('current target: ', e.currentTarget);
};
const handleInnerChildClick = e => {
  console.log('handle inner child click');
  console.log('target: ', e.target);
  console.log('current target: ', e.currentTarget);
};

refs.parent.addEventListener('click', handleParentClick);
refs.child.addEventListener('click', handleChildClick);
refs.innerChild.addEventListener('click', handleInnerChildClick);
