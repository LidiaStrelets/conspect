function fn(...args) {
    // console.log(arguments);

    // const args = Array.from(arguments);
    console.log(args);
    // for (const argument of arguments) {
    //     console.log(argument);
    // }
}

// fn(1, 9, 8);

// fn(7, 78, 66, 1, -9)

// fn(1);

// написать функцию для сложения произвольного кол-ва чисел

function getSum(...args) {
    let sum = 0;

    for (const number of args) {
        sum += number;
    }

    return sum;
}

// console.log(getSum(1, 9, 11));
// console.log(getSum(7, 98, 10, 982, 9));


// написать функцию, которая принимает массив чисел а за ним произвольное кол-во чисел. Затем проверяет совпадения чисел и возвращает массив только из совпадающих

function getCommonNumbers(array, ...numbers) {
    const commonNumbers = [];
    // let i = 0;

    // for (const item of array) {
    //     for (const number of numbers) {
    //         if (item === number) {
    //             commonNumbers[i] = item;
    //             i += 1;
    //         }
    //     }  
    // }

for (const item of array) {
    if (numbers.includes(item)) {
        commonNumbers.push(item);
    }
}
    return commonNumbers;
}


console.log(getCommonNumbers([1, 9, 8, 6], 8, 5, 4, 1, 11, 91));
console.log(getCommonNumbers([7, -1, 98, 71, 16], -1, 0));