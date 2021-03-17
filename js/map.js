const numbers = [4, 7, 8, 98, 7, 1, 0, -7];

const doubledNums = numbers.map(number => number * 2);

// console.log('input', numbers);
// console.log('result', doubledNums);

const players = [
  {
    nik: 'lidia',
    id: '001',
    score: 516,
    timeInGame: 11,
    onlineStatus: 'false',
  },
  {
    nik: 'tosky',
    id: '002',
    score: 768,
    timeInGame: 231,
    onlineStatus: 'true',
  },
  {
    nik: 'alex',
    id: '003',
    score: 874,
    timeInGame: 976,
    onlineStatus: 'true',
  },
  {
    nik: 'gorstka',
    id: '004',
    score: 376,
    timeInGame: 21,
    onlineStatus: 'false',
  },
  {
    nik: 'rzha',
    id: '005',
    score: 7,
    timeInGame: 64,
    onlineStatus: 'true',
  },
];

const score = players.map(player => player.score);
// console.log(score);

const increasedScore = players.map(player =>
  Number((player.score * 1.1).toFixed(1)),
);
// console.log(increasedScore);

const increasedScoreObj = players.map(player => ({
  ...player,
  score: Number((player.score * 1.1).toFixed(1)),
}));

// console.log(increasedScoreObj);

// const modifiedId = players.map(player => {
//   if (player.id === '003') {
//     return { ...player, score: player.score + 100 };
//   }
//   return { ...player };
// });
console.log(players);
// console.log(modifiedId);

// const modifyPlayerId = (players, idToModify) => {
//   const modifiedId = players.map(player => {
//     if (player.id === idToModify) {
//       return { ...player, score: player.score + 100 };
//     }
//     return player;
//   });
//   return modifiedId;
// };

const modifyPlayerId = (players, idToModify) => {
  const modifiedId = players.map(player =>
    player.id === idToModify
      ? { ...player, score: player.score + 100 }
      : player,
  );
  return modifiedId;
};

console.log(modifyPlayerId(players, '001'));
