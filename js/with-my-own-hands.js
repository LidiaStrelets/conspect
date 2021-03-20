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

function bubble(array, callback) {
  let secondIterator = array.length - 1;

  for (let j = 0; j < array.length; j += 1) {
    for (let i = 0; i < secondIterator; i += 1) {
      if (callback(array[i], array[i + 1])) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }

    secondIterator -= 1;
  }

  return array;
}

const array = [6, 3, 7, 2, 1];

// console.log(
//   bubble(['valter', 'anna', 'kate', 'joe', 'helga', 'lidia'], (a, b) =>
//     a[0] < b[0] ? true : false,
//   ),
// );

// console.log(bubble(array, (a, b) => (a > b ? true : false)));
