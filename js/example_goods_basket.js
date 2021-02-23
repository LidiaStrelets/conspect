const basket = {
    items: [],
    getItems() {
        if (this.items.length === 0) {
            console.log('Корзина пуста');
            return
        }
        console.table(this.items);
     },
    addItem(product) { 
        const modificatedItem = {
            ...product,
            quantity: 1,
        }
        // console.log(modificatedItem);
        const { items } = this;
        for (const item of items) {
            if (item.name === modificatedItem.name) {
                item.quantity += 1;
                return;
            }
        }
        items.push(modificatedItem);
        modificatedItem.quantity = 1;
    },
    removeItem(productName) { 
        const { items } = this;

        const values = Object.values(items);

        const names = [];
        for (const value of values) {
            names.push(value.name)
        }

        if (!names.includes(productName)) {
            console.log('Такого товара нет в корзине, невозможно выполнить удаление');
            return;
        }

        const numberToRemove = names.indexOf(productName)
        items.splice(numberToRemove, 1);
    },
    clearAll() { 
        this.items = [];
        return 'Все товары удалены из корзины';
    },
    countTotalPrice() {
        const { items: goods } = this;
        // console.log(goods);
        let total = 0;
        for (const { price , quantity} of goods) {
            total += price*quantity;
        }
        return total;
     },
    increaseQuantity(item, howMuch) { 
        const {items} = this
        for (const good of items) {
            
            if (good.name === item) {
                good.quantity += howMuch;
                return;
            }
        }

    },
    decreaseQuantity(item, howMuch) {
        for (const good of this.items) {
            
            if (good.name === item) {
                if (good.quantity > howMuch) {
                    good.quantity -= howMuch;

                    console.log('decreased');
                }
                else if (good.quantity === howMuch) {
                    this.removeItem(item);
                    console.log('decreased and removed');
                }
                else {
                    console.log('impossible to decrease');
                }
                return;
            }
        }
    },
}
console.log('Изначальное состояние корзины: ');
basket.getItems();

basket.addItem({ name: 'apple', price: 40 });
basket.addItem({ name: 'pear', price: 20 });
basket.addItem({ name: 'grape', price: 90 });
basket.addItem({ name: 'orange', price: 110 });
basket.addItem({ name: 'orange', price: 110 });
console.log('Корзина после добавления позиций: ');
basket.getItems();
// basket.removeItem('pear');
// console.log('Удалили одну позицию: ');
// basket.getItems();

// basket.removeItem('apple');
// console.log('Удалили еще одну позицию: ');
// basket.getItems();

// basket.removeItem('limone');
// basket.getItems();

// console.log(basket.clearAll());
// console.log('Состояние корзины после очистки: ');
// basket.getItems();
console.log('Вы добавили товаров на сумму ', basket.countTotalPrice());


// basket.addItem({ name: 'orange', price: 110 });
// basket.addItem({ name: 'banana', price: 10 });
basket.addItem({ name: 'kiwi', price: 70 });
// basket.addItem({ name: 'papaya', price: 220 });
basket.addItem({ name: 'mango', price: 300 });

// console.log('Добавили новый товар: ');
// basket.getItems();

// console.log('Вы добавили товаров на сумму ', basket.countTotalPrice());


basket.increaseQuantity('kiwi', 4);
basket.increaseQuantity('mango', 2)
console.log('Увеличили кол-во товара: ');
basket.getItems();

// basket.decreaseQuantity('kiwi', 3);
// basket.decreaseQuantity('orange', 3);
// basket.decreaseQuantity('kiwi', 2);
// basket.decreaseQuantity('papaya', 1);
// console.log('Уменьшили кол-во товара: ');
// basket.getItems();

// basket.addItem('orange')
// console.log('Добавление существующего товара: ');
// basket.getItems();