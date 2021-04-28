const user = {
  name: 'Mango',
  age: 2,
};

const savedUserData = JSON.stringify(user);

console.log(savedUserData);

console.log(JSON.parse(savedUserData));

console.log(localStorage);

localStorage.setItem('user-data', savedUserData);

const a = localStorage.getItem('user-data');
console.log(JSON.parse(a));
