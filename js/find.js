const numbers = [4, 7, 8, 98, 71, 1, 0, -7];

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
    onlineStatus: false,
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

const findPlayerById = (players, idToFind) =>
  players.find(player => player.id === idToFind);

// console.log(findPlayerById(players, '005'));
// console.log(findPlayerById(players, '002'));

const findPlayerByName = (players, nameToFind) =>
  players.find(player => player.nik === nameToFind);

console.log(findPlayerByName(players, '002'));
console.log(findPlayerByName(players, 'lidia'));
