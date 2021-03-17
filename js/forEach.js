const numbers = [4, 7, 8, 98, 7, 1, 0, -7];

numbers.forEach((number, index, array) => {
  // console.log(`this is a number ${number}`);
  //   console.log(`number ${number} has index ${index}`);
  array[index] = 'hello';
  console.log(array[index]);
});

///два аргумента: колбэк и объект, в контексте которого будет вызван этот колбэк
