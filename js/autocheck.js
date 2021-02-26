const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },
    removePotion(potionName) {
        const { potions } = this;
        const names = [];
        for (const {name} of potions) {
            names.push(name);
        }
    const potionIndex = names.indexOf(potionName);

    if (potionIndex === -1) {
      return `Зелья ${potionName} нет в инвентаре!`;
    }

    this.potions.splice(potionIndex, 1);
  },
    updatePotionName(oldName, newName) {
      
const { potions } = this;
        const names = [];
        for (const {name} of potions) {
            names.push(name);
        }
    const potionIndex = names.indexOf(oldName);

    if (potionIndex === -1) {
      return `Зелья ${oldName} нет в инвентаре!`;
    }
        potions[potionIndex].name = newName;
  },
  // Пиши код выше этой строки
};

atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');

console.log(atTheOldToad.getPotions());