// сшить массив в одну строку

const fruits = ['mango', 'kiwi', 'apple', 'orange', 'pear'];
// let string = '';
// for (fruit of fruits) {
//     string += fruit;
//     string += ', ';
// }

// console.log(string.slice(0, -2));

const string = fruits.join(', ');
console.log(string);