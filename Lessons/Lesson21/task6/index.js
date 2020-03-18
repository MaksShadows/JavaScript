function setButton (buttonText){
  const elem = document.querySelector('.body');
  elem.innerHTML =  `<button>${buttonText}</button>`;
  elem.textContent = `<button>${buttonText}</button>`;

};


export { setButton };
