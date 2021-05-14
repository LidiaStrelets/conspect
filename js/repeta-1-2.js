const logger = time => {
  console.log(`Each ${time}ms - ${Date.now()}`);
};
console.log('before setInterval');
const intervalId = setInterval(logger, 2000, 2000);
console.log('after setInterval');

const shouldCancel = Math.random() > 0.3;
console.log(shouldCancel);
if (shouldCancel) {
  clearInterval(intervalId);
}
