function manageClasses() {
  const one = document.querySelector('.one');
  const two = document.querySelector('.two');
  const three = document.querySelector('.three');
  const four = document.querySelector('.four');

  two.classList.remove('selected');
  one.classList.add('selected');
  three.classList.remove('three_done');
  four.classList.add('another-class');
};



export { manageClasses };