// for (let i = 1; i <= 5; i += 1){
//     console.log(`Шаг ${i}`);
// }
let sum=0;
const userNumber = prompt('Введите число:');
let number = Number(userNumber);
console.log(typeof number);
for (let i = 1; i <= number; i+= 1)
{
    sum += i;
}
console.log(`Сумма натуральных чисел от 1 до ${number} включительно равна `, sum);