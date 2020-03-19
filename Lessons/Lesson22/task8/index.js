const  btn = document.querySelectorAll('.btn');

function handleClick(event) {
  console.log(event.target.textContent);
}
btn.addEventListener('click', handleClick);