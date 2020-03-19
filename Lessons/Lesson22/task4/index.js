const input = document.querySelector('.text-input');
const inputValue = () => console.log(input.value);

input.addEventListener('change', inputValue);