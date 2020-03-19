const input = document.querySelector('.text-input');

const inputGet = (event) => {
  console.log(event.target.value);
  
} 

input.addEventListener('change', inputGet);