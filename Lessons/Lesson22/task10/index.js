const  checkbox = document.querySelector('.task-status');

const get = (event) => {
  if(event.target.value = checkbox.checked) {
    console.log(true);
  } else{
    console.log(false);
  }
}
checkbox.addEventListener('change', get);
