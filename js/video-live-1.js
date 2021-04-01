// спросить имя пользователя и приветствовать его

const greeting = callback => {
  const name = callback();
  if (name === null || name === '') {
    return 'Incorrect input, please, try again!';
  }
  return `Hello, dear ${name}!`;
};
const getName = () => prompt('Enter your name, please:');

// console.log(greeting(getName));

/////////////////

const makeProduct = () => {
  const allId = [0];
  return (
    name,
    price,
    callback = good => {
      console.log(good);
    },
  ) => {
    const newProduct = {
      name,
      price,
      id: allId[allId.length - 1] + 1,
    };
    allId.push(newProduct.id);
    callback(newProduct);
  };
};

const productFactory = makeProduct();

// productFactory('choko', 50);
// productFactory('spoon', 150);

//////////////
const product = {
  price: 5000,
  showPrice() {
    console.log(this.price);
  },
};

// product.showPrice();

function callAction(action) {
  action();
}

// callAction(product.showPrice.bind(product));
//////////

function add() {
  var counter = 0;
  return () => {
    counter += 1;
    return counter;
  };
}
const getCounter = add();
getCounter();
getCounter();
console.log(getCounter());
