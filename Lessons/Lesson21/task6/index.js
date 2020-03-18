function setButton (){
  const elem = document.querySelector('.body');
  elem.innerHTML =  `<button>${buttonText}</button>`;
  elem.textContent = setButton("button text");
};


export { setButton };
