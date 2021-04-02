const createInitials = (firstName, lastName) => ({
  firstName,
  lastName,
  getInitials() {
    console.log(this.firstName[0] + this.lastName[0]);
  },
});

const user1 = createInitials('Lidia', 'Strelets');
// user1.getInitials();
///////////

const person1 = {
  name: 'Lidia',
  getName() {
    console.log(this.name);
  },
};
const person2 = {
  name: 'Tony',
  //   getName: person1.getName,
};
person2.getName = person1.getName;

// person1.getName();
// person2.getName();
////////////

const aboutMeInfo = {
  name: 'Lidia',
  nicks: ['redheaded', 'raspberry'],
  printNicks: function () {
    'use strict';
    this.nicks.forEach(function (nik) {
      console.log(aboutMeInfo.name, 'is also known as', nik);
    });
  },
};
// aboutMeInfo.printNicks();
/////////

const createCounter = function () {
  return function () {
    return (this.i += 1);
  };
};
const firstCounter = createCounter().bind({ i: 5 });

// console.log(firstCounter());
//////////

const hostGuests = function (...guests) {
  console.log(`${guests.join(' and ')} live in ${this.house}`);
};
// hostGuests.call({ house: 'Ovis-hotel' }, 'Lidia', 'Oksy');

////////////

const myPassword = password => {
  //   const savedPassword = password;
  return {
    guessPassword: testPassword => testPassword === password,
  };
};
const pw1 = myPassword('lenin');
console.log(pw1.guessPassword('lein'));
