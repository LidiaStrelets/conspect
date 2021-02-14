// найти минимум в массиве, где числа не повторяются
function findSmallest(array) {
let minimum = array[0];
// let maximum = numbers[0];
for (number of array) {
    if (number > minimum) {
        continue;
    }
    minimum = number;
    
    // if (number > maximum) {
    //     maximum = number;
    // }
}
    return minimum;
}
const numbers = [7, 9, 5, 8, -11, 2, 0, 17, -6];

// console.log(minimum);
console.log(findSmallest(numbers));