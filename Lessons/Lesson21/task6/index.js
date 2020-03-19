function setButton (buttonText){
  const elem = document.querySelector('.body');
  elem.innerHTML =  `<button>${buttonText}</button>`;
  elem.textContent = "button text";

};


export { setButton };
