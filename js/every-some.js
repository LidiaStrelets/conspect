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
    onlineStatus: false,
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
    onlineStatus: false,
  },
];

// console.log(players.every(person => pe rson.onlineStatus));

const isEverybodyOnline = people =>
  people.every(person => person.onlineStatus)
    ? 'да, все в сети'
    : 'Увы, не все в сети';
// console.log(isEverybodyOnline(players));

const isAnybodyOnline = people =>
  people.some(person => person.onlineStatus)
    ? 'да, кто-то в сети'
    : 'Увы, здесь никого';
// console.log(isAnybodyOnline(players));

const isProOnline = people =>
  people.some(
    ({ onlineStatus, timeInGame }) => timeInGame > 500 && onlineStatus,
  )
    ? 'Будь на чеку, профессионалы в деле!'
    : 'Увы, здесь только нубы';

if (players.some(player => player.onlineStatus)) {
  console.log(isProOnline(players));
} else {
  console.log('Увы, здесь никого');
}
