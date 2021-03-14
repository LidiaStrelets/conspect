const result = [];

for (var i = 0; i < 5; i++) {
  // console.log('before function', i);
  result[i] = function () {
    // console.log(i);
    return i;
  };
}
// console.log(i);
// for (let i = 0; i < 5; i += 1) {
//   console.log(result[i]);
// }

console.log(result[0]());
// ;
// result[1]();
// result[2]();
// result[3]();
// result[4]();

// var declaration;
// console.log(declaration);

// declaration = 'Here is my initialization';
// console.log(declaration);
