function setButton (){
  const elem = document.querySelector('.body');
  elem.innerHTML =  `<button>${buttonText}</button>`;
  const elem2 =  document.querySelector('.body');
  elem2.textContent = `<button>${buttonText}</button>`;
};


export { setButton };
