// console.log(7 < 3);
// console.log(1 == '1');
// console.log(1 === true);

let number = prompt('Enter a number');
console.log('User entered:', number);
console.log('type of entered info is', typeof number);
number = Number(number);

let power = prompt('Enter a power for your number');

console.log('User entered:', power);
console.log('type of entered info is', typeof power);
power = Number(power);

console.log(typeof power);

const result = Math.pow(number, power);
console.log(result);