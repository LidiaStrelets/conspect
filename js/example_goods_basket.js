const basket = {
    items: [],
    getItems() {
        if (this.items.length === 0) {
            console.log('Корзина пуста');
            return
        }
        console.table(this.items);
     },
    addItem(productName) { 
        for (const item of this.items) {
            if (item.name === productName) {
                item.quantity += 1;
                return;
            }
        }
        this.items.push(productName);
        productName.quantity = 1;
    },
    removeItem(productName) { 
        const values = Object.values(this.items);

        const names = [];
        for (const value of values) {
            names.push(value.name)
        }

        if (!names.includes(productName)) {
            console.log('Такого товара нет в корзине, невозможно выполнить удаление');
            return;
        }

        const numberToRemove = names.indexOf(productName)
        this.items.splice(numberToRemove, 1);
    },
    clearAll() { 
        this.items = [];
        return 'Все товары удалены из корзины';
    },
    countTotalPrice() {
        const goods = this.items;
        // console.log(goods);
        let total = 0;
        for (const good of goods) {
            total += good.price;
        }
        return total;
     },
    increaseQuantity(item, howMuch) { 
        for (const good of this.items) {
            
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
console.log('Корзина после добавления позиций: ');
basket.getItems();
basket.removeItem('pear');
console.log('Удалили одну позицию: ');
basket.getItems();

basket.removeItem('apple');
console.log('Удалили еще одну позицию: ');
basket.getItems();

basket.removeItem('limone');
basket.getItems();

console.log(basket.clearAll());
console.log('Состояние корзины после очистки: ');
basket.getItems();

basket.addItem({ name: 'orange', price: 110 });
basket.addItem({ name: 'banana', price: 10 });
basket.addItem({ name: 'kiwi', price: 70 });
basket.addItem({ name: 'papaya', price: 220 });
basket.addItem({ name: 'mango', price: 300 });

console.log('Добавили новый товар: ');
basket.getItems();

console.log('Вы добавили товаров на сумму ', basket.countTotalPrice());


basket.increaseQuantity('kiwi', 4);
basket.increaseQuantity('mango', 2)
console.log('Увеличили кол-во товара: ');
basket.getItems();

basket.decreaseQuantity('kiwi', 3);
basket.decreaseQuantity('orange', 3);
basket.decreaseQuantity('kiwi', 2);
basket.decreaseQuantity('papaya', 1);
console.log('Уменьшили кол-во товара: ');
basket.getItems();

basket.addItem('orange')
console.log('Добавление существующего товара: ');
basket.getItems();