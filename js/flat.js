const n = [1, 2, [3, [4, 5]], [6, [7, [8]]]];

// console.log(n);
// console.log(n.flat());
// console.log(n.flat(3));

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

console.log(posts.map(post => post.tags).flat());

console.log(posts.flatMap(post => post.tags));
