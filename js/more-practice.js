const objC = {
  z: 5,
};
// console.log(objC);

const objB = Object.create(objC);
// console.log(objB);
objB.y = 2;
// console.log(objB);

const objA = Object.create(objB);
// console.log(objA);
objA.x = 7;
// console.log(objA);

const Car = function () {
  this.options = {
    rul: 1,
    kolesa: 4,
  };
  //   console.log('this in constructor function', this);
};
// const makeCar = function () {};

// console.log(Car);
// console.log(makeCar);

const audi = new Car();
// console.log(audi);

class Cars {}
const carInstance = new Cars();
// console.log(carInstance);
const a = [9, 8, 7];
console.log(Array.isArray(audi));
