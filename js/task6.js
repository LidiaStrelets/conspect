// поменять регистр каждого символа в строке на противоположный

const phrase = 'I love Antony SO much!';

function invertCase(string) {
    let invertedPhrase = '';
for (let letter of string) {
 invertedPhrase += letter === letter.toLocaleLowerCase() ? letter.toLocaleUpperCase() : letter.toLocaleLowerCase();
}
    return invertedPhrase;
}

console.log(invertCase(phrase));

const sentence = 'I Like my Job';

console.log(invertCase(sentence));




   // console.log(letter);
    // if (letter === ' ') {
    //     console.log(letter, ' is a gap');
    //     invertedPhrase += letter;
    //     continue;
    // }
    // if (letter === letter.toLowerCase()) {
    //     console.log(letter, ' is a small letter');
    //     letter = letter.toUpperCase();
    //     invertedPhrase += letter;
    //     continue
    // }
    // else {
    //     console.log(letter, ' is a big letter');
    //     letter = letter.toLowerCase();
    //     invertedPhrase += letter;
    //     continue
    // }