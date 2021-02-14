// считает сумму для двух массивов

const firstArray = [3, 7, 8, 67, 5, 44];
const secondArray = [-9, -6, 55, 40, 91];

const commonArray = firstArray.concat(secondArray);
let sum = 0;
for (const number of commonArray) {
    sum += number;
}
console.log(commonArray);
console.log(sum);

