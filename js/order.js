const makeOrder = dish => {
  const DELAY = 1000;

  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.3;
    setTimeout(() => {
      if (passed) {
        resolve(`here is your ${dish}`);
      }
      reject('sorry, were out of products');
    }, DELAY);
  });
};

makeOrder('apple pie')
  .then(onMakeOrderSuccess)
  .catch(onMakeOrderError)
  .finally(() => {
    console.log('anyway');
  });

function onMakeOrderSuccess(result) {
  console.log('succeed', result);
}
function onMakeOrderError(error) {
  console.log('sheet happens', error);
}
