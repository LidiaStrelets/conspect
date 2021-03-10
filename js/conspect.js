// const School = function (number, pupils, street) {
//     this.number = number;
//     this.pupils = pupils;
//     this.street = street;
// };

// const mySchool = new School(46, 1500, 'Derzhavinskaya');

// console.log(mySchool);


const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;

console.log(dog.barks); // true
console.log(dog.eats); // true

console.log(dog);