const obj1 = { a: 10, b: { c: 20, d: 30 } };

const obj2 = { ...obj1, b: { ...obj1.b } };
// obj2.b = ;

console.log(obj1);
console.log(obj2);
console.log(obj1.b === obj2.b);
