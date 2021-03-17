const numbers = [11, 2, 15, 24, 3];

// console.log(
//   numbers
//     .map(number => number * 2)
//     .filter(number => number > 10)
//     .sort((a, b) => a - b),
// );

const n = [1, 5, 2, 4, 3];

console.log(
  [...n]
    .filter(el => el > 2)
    .map(el => el * 3)
    .sort((a, b) => a - b),
);
