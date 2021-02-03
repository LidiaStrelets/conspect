const numberInputRef = document.querySelector('input[name="number"]');
const powerInputRef = document.querySelector('input[name="power"]');
const btnRef = document.querySelector('button');


btnRef.addEventListener('click', () => {
    console.log('User number ', numberInputRef.value);
    console.log('user power', powerInputRef.value);
    const number = Number(numberInputRef.value);
    const power = Number(powerInputRef.value);
    const result = Math.pow(number, power)
    console.log(result);
})
