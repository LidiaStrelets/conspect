const stonesObject = {
  emerald: { price: 1300, quantity: 4 },
  diamond: { price: 2700, quantity: 3 },
  sapphire: { price: 400, quantity: 7 },
  crushedStone: { price: 200, quantity: 2 },
};

function calcTotalPrice(stones, stone) { 
    if ((typeof stones) !== 'object') {
        console.log('Каталог камней не обнаружен');
        return;
    }

    if (!stones.hasOwnProperty(stone)) {
    console.log('Выбранный камень не представлен в каталоге');
        return;
}

    const { price, quantity } = stones[stone];

    console.log(`Ваш заказ будет стоить ${price * quantity}`);
    
}

calcTotalPrice(stonesObject, 'sapphir');
calcTotalPrice(stonesObject, 'sapphire');
calcTotalPrice(675, 'sapphire')