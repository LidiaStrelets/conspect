// отложенный вызов

// function callback(){
// console.log('I am callback function');

// }

// console.log('before timeout');
// setTimeout(callback, 5000);
// console.log('after timeout');

// фильтрация массива


// function filter(array, callback) {
//     const filtredArray = [];

//     for (const el of array) {
//         if (callback(el)) {
//             filtredArray.push(el);
//         }
//     }

//     return filtredArray;
// }

// function findBiggerThanThree(element) {
//     return (element >= 3);
// }

// function findSmallerThanFour(element) {
//     return (element <=4);
// }

// console.log(filter([1, 2, 3, 4, 5], findBiggerThanThree));

// console.log(filter([1, 2, 3, 4, 5], findSmallerThanFour));

// const fruits = [
//     {name: 'apple', quantity: 200},
//     {name: 'pear', quantity: 106},
//     {name: 'orange', quantity: 211},
//     {name: 'mango', quantity: 154},
//     {name: 'grape', quantity: 287},
// ]

// function findMoreThanQuantityFruits(fruit) {
//     const { quantity } = fruit;
   
//         return (quantity > 250);
    
// };

// console.log(filter(fruits, findMoreThanQuantityFruits));

// замыкание

// function firstFunction() {
//     const innerVar = 'I am inside';

//     function innerFunction() { 
//         console.log(innerVar);
//     }

//     return innerFunction;
// }

// const secondFunction = firstFunction();

// // console.log(secondFunction);

// secondFunction();

// пример на замыкание

// function makeDish(shef, dish) {
//     console.log(`${shef} will cook ${dish}`);
// }

// makeDish('Mango', 'cheesecake');
// makeDish('Mango', 'soup');
// makeDish('Mango', 'eggs');

// makeDish('Karl', 'applepie');
// makeDish('Karl', 'pancakes');
// makeDish('Karl', 'cereals');

// function makeShef(name) {
//     function makeDish(dish) {
//     console.log(`${name} will cook ${dish}`);
//     }
    
//     return makeDish;
// }

// const alex = makeShef('Alex');

// alex('applepie');
// alex('meatballs')

// еще пример на замыкание

// function rounder(afterPoint) {
//     function roundedNumber(number) {
//         return Number(number.toFixed(afterPoint));
//     };
//     return roundedNumber;
// }

// const roundTo2 = rounder(2);

// console.log(roundTo2(1.67859));
// console.log(roundTo2(3.986758));

// const roundTo3 = rounder(3);

// console.log(roundTo3(6.93745));


// стрелочные функции

// function add(a, b, c) {
//     return a + b + c;
// }

// console.log(add(6, 9, 8));

// addArrow = (a, b, c) => a + b + c;
// console.log(addArrow(1, 5, 7));



// фильтрация массива со стрелочной функцией


 filter= (array, callback) => {
    const filtredArray = [];

    for (const el of array) {
        if (callback(el)) {
            filtredArray.push(el);
        }
    }

    return filtredArray;
}

// findBiggerThanThree = (element) => (element >= 3);
// console.log(filter([1, 2, 3, 4, 5], findBiggerThanThree));

console.log(filter([1, 2, 3, 4, 5], element => element >= 3));


// findSmallerThanFour = (element) => (element <=4);
// console.log(filter([1, 2, 3, 4, 5], findSmallerThanFour));

console.log(filter([1, 2, 3, 4, 5], element => element <= 3));

const fruits = [
    {name: 'apple', quantity: 200},
    {name: 'pear', quantity: 106},
    {name: 'orange', quantity: 211},
    {name: 'mango', quantity: 154},
    {name: 'grape', quantity: 287},
]

// findMoreThanQuantityFruits = (fruit) =>(fruit.quantity > 150);
// console.log(filter(fruits, findMoreThanQuantityFruits));

console.log(filter(fruits, fruit =>fruit.quantity > 150));