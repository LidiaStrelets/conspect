const numbers = [2, 4, 5, 6, 8, 9, 10, 34, 57];

const total = numbers.reduce((accum, number) => {
  //   console.log(`accum = ${accum}, number = ${number}`);
  return (accum += number);
}, 0);
// console.log(total);

const multiplication = [2, 4, 5].reduce((acc, number) => acc * number, 1);
// console.log(multiplication);

// посчитать общую ЗП

const employees = {
  lidia: 1000,
  luba: 3000,
  lena: 2000,
  marina: 2000,
  stasya: 500,
};

const totaSalary = Object.values(employees).reduce((acc, val) => acc + val, 0);
// console.log(totaSalary);

// собрать все теги из втитов

const posts = [
  {
    name: 'lidia',
    id: '001',
    likes: 200,
    tags: ['exotic', 'strip', 'stretching'],
  },
  {
    name: 'elena',
    id: '002',
    likes: 520,
    tags: ['exotic', 'strip', 'stretching', 'privat'],
  },
  { name: 'liubov', id: '003', likes: 1100, tags: ['hard', 'personal'] },
  {
    name: 'marina',
    id: '004',
    likes: 890,
    tags: ['stretching', 'flow'],
  },
  { name: 'stasya', id: '005', likes: 150, tags: ['management'] },
];

const allTags = posts.reduce((tags, post) => [...tags, ...post.tags], []);

console.log(allTags);

// const stats = allTags.reduce(
//   (obj, tag) =>
//     obj[tag] ? { ...obj, [tag]: (obj[tag] += 1) } : { ...obj, [tag]: 1 },
//   {},
// );

const stats = allTags.reduce(
  (obj, tag) => ({
    ...obj,
    [tag]: obj[tag] ? obj[tag] + 1 : 1,
  }),
  {},
);

console.log(stats);
