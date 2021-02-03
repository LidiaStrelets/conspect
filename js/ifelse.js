// console.log('Before');
// if (5>10) {
//     console.log('body');
// }
// console.log('After');

// let money = 100;
// const price = 2000;

// console.log(`Общая стоимость заказа ${price} кредитов.`);

// if (money >= price) {
//     money -= price;
//     console.log(`После совершения покупки у Вас останется ${price} кредитов`);
// }
// else{console.log(`У Вас недостаточно средств для покупки`);}
//  console.log('Хотите продолжить покупки?');

const totalExpenses = 100;
let discount=0;

if (totalExpenses >= 500 && totalExpenses < 1000) {
    discount = 2;
    console.log(`Вы бронзовый клиент, скидка составляет ${discount}%` );
}
else if (totalExpenses >= 1000 && totalExpenses < 5000) {
     discount = 5;
    console.log(`Вы серебряный клиент, скидка составляет ${discount}%` );
}
else if (totalExpenses >= 5000) {
     discount = 20;
    console.log(`Вы золотой клиент, скидка составляет ${discount}%` );
}
else {
    console.log('Общая сумма покупок недостаточна, Вы не попадаете в программу лояльности');
}