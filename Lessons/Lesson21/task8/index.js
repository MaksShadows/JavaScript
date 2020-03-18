function createButton(buttonText) {
  const elem = document.querySelector('body');
  const button = document.createElement('button');

  elem.append(button);
  button.innerHTML = buttonText;
};


export { createButton };