const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.4;

  setTimeout(() => {
    if (canFulfill) {
      resolve('promise successfully executed');
    }

    reject('promise executed with error');
  }, 3000);
});

promise
  .then(
    result => {
      console.log(result);
    },
    error => {
      console.log(error);
    },
  )
  .then(x => {
    console.log(x);
  });
