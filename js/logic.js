// console.log(Boolean(false));

// 

// const number = 59;
// const notPart = number < 10 || number > 30;
// console.log(notPart);
// console.log(`Число ${number} не лежит в промежутке от 10 до 30?`, notPart);

// console.log(!0);


// const isOnline = true;
// const isFriend = true;
// const hasDnd = true;

// const canOpenChat = isOnline && isFriend && !hasDnd;
// console.log('Я могу открыть чат?', canOpenChat);

const subscription = 'full';

const canGetAccess = subscription === 'vip' || subscription === 'full';
console.log('Я могу получить доступ к данным?', canGetAccess);