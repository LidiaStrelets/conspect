const numbers = [4, 7, 8, 98, 7, 1, 0, -7];
console.log(numbers);
const filteredNums = numbers.filter(number => number < 3 || number > 20);
console.log(filteredNums);

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

const onlinePlayers = players.filter(player => player.onlineStatus);
// console.table(onlinePlayers);

const offlinePlayers = players.filter(({ onlineStatus }) => !onlineStatus);
// console.table(offlinePlayers);

const hardcorePlayers = players.filter(
  ({ timeInGame, onlineStatus }) => timeInGame > 200 && !onlineStatus,
);
console.table(hardcorePlayers);

// поиск уникальных значений по массиву примитивов
// filter((genre, index, array) => array.indexOf(genre) === index);
