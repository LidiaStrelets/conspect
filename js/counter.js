const pageIncrement = document.querySelector('.increment');
const pageDecrement = document.querySelector('.decrement');
const pageValue = document.querySelector('.value');


const counter = {
    value: 0,
    incrementValue() {
        console.log('this', this);
        this.value += 1;
        // pageValue.textContent = this.value;
    },
    decrementValue() {
        console.log('this', this);
        this.value -= 1;
        // pageValue.textContent = this.value;
    }
}


console.log(pageIncrement, pageDecrement, pageValue);

// pageIncrement.addEventListener('click', counter.incrementValue.bind(counter));
pageIncrement.addEventListener('click', () => {
    counter.incrementValue();
pageValue.textContent = counter.value;
})

// pageDecrement.addEventListener('click', counter.decrementValue.bind(counter));

pageDecrement.addEventListener('click', () => {
    counter.decrementValue();
pageValue.textContent = counter.value;
})