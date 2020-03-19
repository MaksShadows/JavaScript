const pagination = document.querySelector('.pagination');
const pageElem = document.querySelectorAll('.pagination__page');

function handleClick(event) {
  console.log(event.target.dataset.paginationNumber);
}

pageElem.forEach(elem => {
  elem.addEventListener('click', handleClick);
});