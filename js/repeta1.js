// const objC = {
//     z: 5,
// }

// console.log(objC);

// const objB = Object.create(objC);
// objB.y = 15;

// console.log(objB);

// console.log(objB.y);
// console.log(objB.z);

// const objA = Object.create(objB);
// objA.x = 67;

// console.log(objA);

// функция конструктор для машинок

// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.greeteMe = function () {
//   console.log(this);
//   console.log('hi, ', this.brand, '!');
// };

// const audi = new Car({
//   brand: 'audi',
//   model: 'TT',
//   price: 198000,
// });
// console.log(audi);
// audi.greeteMe();

// const toyota = new Car({
//   brand: 'toyota',
//   model: 'R8',
//   price: 135000,
// });
// console.log(toyota);
// toyota.greeteMe();

// конструктор для юзера

const User = function ({ email, nik, password } = {}) {
  this.email = email;
  this.nik = nik;
  this.password = password;
};

User.prototype.changeNik = function (newNik) {
  this.nik = newNik;
};

User.message = 'Hello, my friend!';

// console.dir(User);
// console.log(User.message);

const user1 = new User({
  email: 'milo@gmail.com',
  nik: 'superanton',
  password: 123123,
});
console.log(user1);

user1.changeNik('mango');
console.log(user1);
