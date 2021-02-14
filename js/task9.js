const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];

const cardToRemove = 'card-4';
let index = cards.indexOf(cardToRemove);
console.log(index);

// cards.splice(3, 3);

// cards.splice(index, 0, 'new-card-1', 'new-card-2')

cards.splice(1,1,'card-2_modificated')
console.log(cards);