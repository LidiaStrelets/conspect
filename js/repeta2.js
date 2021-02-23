const temps = [19, 17, 21, 15, 20];

const lastWeekTemps = [11, 12, 16, 10];
const currentTemps = [10, 9, 11];
const nextWeekTemps = [22, 25, 20];

// let allTemps = temps.concat(lastWeekTemps, currentTemps, nextWeekTemps);
// console.log(allTemps);

// allTemps = [...lastWeekTemps, ...nextWeekTemps];
// console.log(allTemps);
// allTemps[2] = 160;
// console.log(allTemps);
// console.log(lastWeekTemps);

// console.log(lastWeekTemps);

// console.log(Math.max(...nextWeekTemps));

// const a = [{ x: 100 }, { y: 10 }, { z: 1 }];
// console.log(a);
// const b = [...a];
// console.log(b);
// b[0].x = 200;
// console.log(b);
// console.log(a);

const a = { x: 8, y: 11 };
const b = { x: 1, z: 7 };
// const c = Object.assign({}, a, b);
const c = {...a, ...b}
console.log(c);