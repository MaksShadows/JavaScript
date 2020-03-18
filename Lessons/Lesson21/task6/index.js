function setButton (buttonText){
  const elem = document.querySelector('.body');
  elem.innerHTML =  `<button>${buttonText}</button>`;
  setButton.textContent = `<button>${buttonText}</button>`;

};


export { setButton };
