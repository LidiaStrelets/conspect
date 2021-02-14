// сделать строку которая пришивается в ссылке

// const words = articleTitle.split(' ');
// console.log(words);
// const link = words.join('-');
// console.log(link.toLowerCase());


function titleToSlug(articleTitle) {
    return articleTitle.split(' ').join('-').toLowerCase();
// console.log(slug);
}


const articleTitle = 'The funniest cat Simon ever';
console.log(titleToSlug(articleTitle));

const pageTitle = 'The best community of dancers';
console.log(titleToSlug(pageTitle));
console.log(titleToSlug('What do you think of yoga'));