const numbers = [3, 111, 8, 1, -9, 7, 11, -6, -2, 1];
const copy = [...numbers];
console.log(numbers === copy);
console.log(copy.sort((a, b) => b - a));

////////
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
console.table(posts);
// console.table(
//   [...posts].sort((pers1, pers2) => Number(pers1.name[0] >= pers2.name[0]) - 1),
// );

// const byName = [...posts].sort((a, b) => {
//     if (a.name[0] > b.name[0]) { return -1; }
//     else {
//         const sameFirstLetter = [a, b];
//         return [...sameFirstLetter].sort((a, b) =>
//           Number(a.name[1] > b.name[1])-1,
//         );
//     }
// })
