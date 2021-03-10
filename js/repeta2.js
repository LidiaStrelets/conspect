// class Car {
//   constructor({ brand = 'bmw', model = 'x5', price = 211000 } = {}) {
//     this.brand = brand;
//     this._model = model;
//     this.price = price;
//   }

//   get model() {
//     return this._model;
//   }
//   set model(newModel) {
//     this._model = newModel;
//   }
// }

// console.dir(Car);

// const audi = new Car({ brand: 'audi', model: 'TT', price: 132000 });

// console.log(audi);

// console.log(audi.model);
// audi.model = 'R5';
// console.log(audi.model);

// пример с игрой

class Hero {
  constructor({ name = 'hero', xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    const { name } = this;
    console.log(`${name} gains ${amount} of expirience`);
    this.xp += amount;
  }
}
const richard = new Hero({ name: 'rick', xp: 150 });

console.log(richard);

richard.gainXp(500);

class Wizard extends Hero {
  constructor({ spell, ...restProps }) {
    super(restProps);
    this.spell = spell;
  }
}
const jade = new Wizard({ xp: 5000, spell: 'fireball', name: 'J' });
console.log(jade);
jade.gainXp(100);
