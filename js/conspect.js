// const numbers = [1, 2, 3];

// Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// numbers.forEach(num => {
//   num += 1;
//   //   console.log(num, 'forEach was here');
// });
// console.log(numbers);
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

//////////////////////
// const numbers = [1, 2, 3];

// const doubledNumbers = numbers.map(foo => foo * 2 + 5);
// console.log(doubledNumbers); // [2, 4, 6]

/////////////

// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
//   { name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно true, то текущий элемент (user) будет записан в результирующий массив.
// const activeUsers = users.filter(user => user.isActive);
// const noActiveUsers = users.filter(user => !user.isActive);

// console.log(activeUsers);
// console.log(noActiveUsers);

// const names = activeUsers.map(user => user.name);
// console.log(names);

// const noActive = noActiveUsers.map(user => user.name);
// console.log(noActive);

////////////////

const users = [
  { id: '000', name: 'Mango', isActive: true },
  { id: '001', name: 'Poly', isActive: false },
  { id: '002', name: 'Ajax', isActive: true },
  { id: '003', name: 'Chelsey', isActive: false },
];

// Для каждого элемента коллекции (user) проверим поле id.
// Если оно совпадает с искомым идентификатором, то find прекратит
// выполнение и вернет текущий элемент (user) как результат выполнения
const user = users.find(user => user.id === '002');
console.log(user);

// Создадим функцию которая будет возвращать нам пользователя по id
const getUserById = (arr, id) => arr.find(userBla => userBla.id === id);

console.log(getUserById(users, '001'));
console.log(getUserById(users, '003'));
