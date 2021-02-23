const playlist = {
    name: 'best songs',
    tracks: ['track-1', 'track-2', 'track-3'],
    rating: 5.7,
    duration: '157 minutes',
}
// const { name, tracks, rating: grade, duration } = playlist;


const { name, tracks, ...otherOfPlaylist } = playlist;
console.log(otherOfPlaylist);
// console.log(name, tracks, grade, duration);



// найти автора с самым высоким рейтингом

const authors = {
    Poll: 6,
    Tony: 11,
    Alex: 0,
    Jade: 7,
}
// let bestRate = 0;
// let bestAuthor;
// const entries = Object.entries(authors);
// for (const [name, rate] of entries) {
//     // const name = entry[0];
//     // const rate = entry[1];

//     // const [name, rate] = entry;

//     // console.log(name);
//     // console.log(rate);
//     if (rate > bestRate) {
//         bestAuthor = name;
//         bestRate = rate;
//     }
// }
// console.log(`Наивысший рейтинг у ${bestAuthor}, он составляет ${bestRate}`);