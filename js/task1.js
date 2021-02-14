// посчитать общую сумму

function totalPrice(prices) {
   let total=0;
for (const price of prices) {
    total += price;
    } 
    return (`Вы скупились на ${total}`);   
}



const prices = [5, 9, 87, 6, 41, 23];

// console.log(' ', total);

// добавить каждой цене налог и затем посчитать
// total = 0;

// for (let i = 0; i < prices.length; i += 1) {
//     prices[i] += 0.2 * prices[i];
//     total += prices[i];
// }
// console.log('Вы скупились на ', total.toFixed(2));
// console.log(typeof total);

console.log(totalPrice(prices));

const userPrices = [6, 9, 87, 777, 90, 18];

console.log(totalPrice(userPrices));

console.log(totalPrice([9, 8, 5]));