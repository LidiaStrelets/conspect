const players = [
  {
    nik: 'lidia',
    id: '001',
    score: 516,
    timeInGame: 11,
    onlineStatus: false,
  },
  {
    nik: 'tosky',
    id: '002',
    score: 768,
    timeInGame: 231,
    onlineStatus: true,
  },
  {
    nik: 'alex',
    id: '003',
    score: 874,
    timeInGame: 976,
    onlineStatus: true,
  },
  {
    nik: 'gorstka',
    id: '004',
    score: 376,
    timeInGame: 21,
    onlineStatus: false,
  },
  {
    nik: 'rzha',
    id: '005',
    score: 7,
    timeInGame: 64,
    onlineStatus: true,
  },
];

console.table(
  [...players]
    .filter(player => player.onlineStatus)
    .sort((a, b) => a.score - b.score),
);
