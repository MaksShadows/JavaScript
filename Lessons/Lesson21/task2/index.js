function getTitleElement() {
  const title = document.querySelector('.title');

  console.dir(title);
  return title;
};

function getInputElement() {
  const input = document.querySelector('input[type=text]');

  console.dir(input);
  return input;
};

export { getInputElement, getTitleElement }
