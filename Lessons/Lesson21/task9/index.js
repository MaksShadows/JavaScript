function finishList() {
  const elem = document.querySelector('ul');
  const special = document.querySelector('.special');

  const li1 = document.createElement('li');
  li1.textContent = '1';

  const li4 = document.createElement('li');
  li4.textContent = '4';


  const li6 = document.createElement('li');
  li6.textContent = '6';

  const li8 = document.createElement('li');
  li8.textContent = '8';

  elem.prepend(li1);
  special.before(li4)
  special.after(li6)
  elem.append(li8);

};




export { finishList };