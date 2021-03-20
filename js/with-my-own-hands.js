function handMap(array, callback) {
  const result = [];

  for (const element of array) {
    result.push(callback(element));
  }
  return result;
}

const clients = [
  { name: 'lidia', age: 26, position: 'coach' },
  { name: 'anton', age: 26, position: 'teacher' },
  { name: 'alex', age: 27, position: 'manager' },
];

// console.log(handMap(clients, client => client.age * 2));

// console.log(clients.map(client => client.age));

function handFilter(array, callback) {
  const result = [];
  for (const item of array) {
    if (callback(item)) {
      result.push(item);
    }
  }
  return result;
}

// console.log(handFilter([1, 2, 4, 9, 8], value => value * 5));
// console.log([1, 2, 4, 9, 8].filter(item => item * 5));

function handFind(array, callback) {
  let result;
  for (const item of array) {
    console.log('before if', item);
    if (callback(item)) {
      result = item;
      break;
    }
    console.log('after if', item);
  }
  return result;
}

// console.log(
//   handFind(
//     [
//       { a: 10, b: 1 },
//       { a: 2, b: 9 },
//       { a: 5, b: 19 },
//     ],
//     value => value.b === 19,
//   ),
// );

function handEvery(array, callback) {
  for (var i = 0; i < array.length; i += 1) {
    if (!callback(array[i])) {
      break;
    }
  }
  if (i === array.length) {
    return true;
  }
  return false;
}

// console.log(
//   handEvery(
//     [
//       { a: 10, b: 1 },
//       { a: 2, b: 9 },
//       { a: 5, b: 19 },
//     ],
//     value => value.a > 2,
//   ),
// );

function handSome(array, callback) {
  for (var i = 0; i < array.length; i += 1) {
    if (callback(array[i])) {
      break;
    }
  }
  if (i < array.length) {
    return true;
  }
  return false;
}

// console.log(
//   handSome(
//     [
//       { a: 10, b: 1 },
//       { a: 2, b: 9 },
//       { a: 5, b: 19 },
//     ],
//     value => value.b < 9,
//   ),
// );

function handReduce(array, callback, initialValue) {
  for (const item of array) {
    initialValue = callback(item, initialValue);
  }
  return initialValue;
}

// console.log(
//   handReduce(
//     [
//       { a: 10, b: 1, c: ['fdghj', 'gfhj'] },
//       { a: 2, b: 9, c: ['fghj', 'awaw'] },
//       { a: 5, b: 19, c: ['wew', 'opi', 'hu'] },
//     ],
//     (value, initialValue) => {
//       //   return value.a + initialValue;
//       return [...initialValue, ...value.c];
//     },
//     [],
//   ),
// );

function bubble() {}

const array = [6, 3, 7, 2, 1];
console.log(array);
for (let j = 0; j < array.length - 1; j += 1) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`iteration=${i + 1}, el1=${array[i]}, el2=${array[i + 1]}`);
    if (array[i + 1] > array[i]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
}

console.log(array);
