// подсчитать сумму четных чисел
let summary = 0;

const numbers = [6, 9, 8, 7, 44, 90, 76, 4, 2];
for (const number of numbers) {
    if (number % 2 !== 0) {
        continue;
    }
    summary += number;
}
console.log(summary);