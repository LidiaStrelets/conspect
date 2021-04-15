const boxRef = document.querySelector('.inner-text');

let counter = 0;

const handleScroll = () => {
  counter += 1;
  console.log(counter, new Date());
};

boxRef.addEventListener('scroll', _.debounce(handleScroll, 500));
