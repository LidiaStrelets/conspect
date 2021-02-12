// const empty = [];
// console.log('Пустой массив: ', empty);
const clients = ['Mango', 'Poly', 'Ajax'];
// console.log('Имена клиентов: ', clients);

// console.log(clients[2]);

clients[0] = 'Apple';
clients[7] ='Pear';

// console.log(clients.length);
// clients.length = 12;
// console.log(clients);
// for (let i = 0; i < clients.length; i += 1) { 
//     console.log('Client name is ', clients[i]);
// }



// const listItems = [];
// for (let i = 0; i < 10; i += 1) {
//     listItems[i] = `Пункт ${i + 1}`
//     console.log(listItems[i]);
// }


// for (const person of clients) {
//     console.log(person);
// }

// const phrase = 'My name is Lidia'
// for (const letter of phrase) {
//     console.log(letter);
// }
// console.log(clients);
// const searching = 'r';
// let message;
// for (let i = 0; i < clients.length; i += 1)
// {
//     if (clients[i] === searching) {
//         message = `Client ${clients[i]} has number ${i + 1}`
        
//         break;
//     }
//     else {
//         message = 'No such client in a list'
//    }
       
    
// }
// console.log(message);


// const numbers = [1, 5, 76, 98, 999, 8, 7];
// const maxValue = 1;
// let summary=0;
// const requieredNumbers = [];
// let j = 0;

// for (let i = 0; i < numbers.length; i += 1){
    
//     if (numbers[i] <= maxValue) {
//         // console.log(`Element number ${i+1} doesn't go`);
//         continue;
//     }
//     else {
//         summary += numbers[i];
//         // console.log('Сумма равна ', summary);
//         requieredNumbers[j] = i + 1;
//         // console.log('Номер элемента в исходном массиве ', requieredNumbers[j], 'Значение счетчика j ', j);
//         j += 1;
//         // console.log('Новое значение счетчика j ', j);
//     }
// }
// console.log(`Сумма больших чисел составляет ${summary}; их позиции ${requieredNumbers}`);


const myMatrix = [
    [1, 5, 7],
    [2, 11, 9],
    [0, -1, 9],
    [-2, -3, 0]
];
// console.log(myMatrix[0][2]);
// console.log(myMatrix[1][4]);
// console.log(myMatrix[2][1]);
// console.log(myMatrix[3][0]);
for (let i = 0; i < myMatrix.length; i += 1){
    for (let j = 0; j < myMatrix[i].length; j += 1){
        console.log(`Element in ${i+1} line number ${j+1} is ${myMatrix[i][j]}`);
    }
}