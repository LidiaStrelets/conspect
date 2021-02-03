// const firstName = 'Lidia';
// const lastName = 'Strelets';
// const room = 106;
// const type = 'single';

// const fullName = firstName+' ' + lastName;
// console.log(fullName);

// let message = 'Гость ' + fullName + ' поселяется в ' + room + ' номер ' + type;
// console.log(message);

// message = `Гость ${fullName} поселился в ${room} номер ${type}`;
// console.log(message);
// console.log(message.length);


const compare = 'mypassword';
const input = prompt('Enter your password');
console.log("You've entered: ", input);
const normInput = input.toLowerCase();
console.log('After normalizing', input);
console.log('normalized value', normInput);

console.log(compare === normInput);