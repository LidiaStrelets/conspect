// печатает четные числа из численного массива

const printEvenNumbers = numbers => {
  //   console.log([...numbers].filter(number => number % 2 === 0));
  //   numbers.forEach(number => {
  //     if (number % 2 === 0) {
  //       console.log(number);
  //     }
  //   });

  numbers
    .filter(num => num % 2 === 0)
    .forEach(number => {
      console.log(number);
    });
};

// printEvenNumbers([2, 3, 5, 6, 4, 87, 1, 22]);

// поиск элементов массива в заданном интервале

const findNumbersOfRange = (array, min, max) =>
  [...array].filter(number => min < number && max > number);

// console.log(findNumbersOfRange([2, 3, 5, 6, 4, 87, 1, 22], 2, 20));

// находит средннее арифм

const findAverage = array =>
  ([...array].reduce((acc, number) => acc + number, 0) / array.length).toFixed(
    1,
  );
// console.log(findAverage([2, 3, 5, 6, 4, 87, 1, 22]));

// поиск уникальных элементов

const findUnique = array =>
  array.filter((item, index, array) => {
    let a = [...array];
    a.splice(index, 1);
    if (a.includes(item)) {
      return false;
    }
    return true;
  });
// console.log(findUnique([1, 2, 3, 4, 5, 1, 3, 6, 5, 7]));

// рандомно перемешать массив

const input = [5, 9, 2, 1, 7];
const shuffle = array => [...array].sort(randomizer);

const randomizer = () => Math.random() - 0.5;

// console.log(shuffle(input));
// console.log(shuffle(input));
// console.log(shuffle(input));
// console.log(shuffle(input));
// console.log(input);

// определить массив содержащий только числа
// const defineOnlyNumbers = array => {
//   if (
//     [...array].filter(item => typeof item === 'number').length === array.length
//   ) {
//     return 'В заданном массиве только числа';
//   }
//   return 'В заданном массиве есть произвольные элементы';
// };

const defineOnlyNumbers = array => {
  if (array.every(item => typeof item === 'number')) {
    return 'В заданном массиве только числа';
  }
  return 'В заданном массиве есть произвольные элементы';
};

console.log(defineOnlyNumbers([1, 2, 2, 3, 3, 1, 5]));
