const result = [];

for (let i = 0; i < 5; i += 1) {
  // console.log('before function', i, `step ${i}`);
  result[i] = function () {
    console.log(i);
  };
}
// console.log(result);
// console.log('after for', i);

// console.log(result[0]);
// console.log(result[1]);
// console.log(result[2]);
// console.log(result[3]);
// console.log(result[4]);
// console.log('hi');
result[0]();
// console.log('by');
result[1]();
result[2]();
result[3]();
result[4]();
