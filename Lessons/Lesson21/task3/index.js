function getItemsList() {
  const elem = document.querySelectorAll('.technology');

  console.dir(elem);
  return elem;
};

function getItemsArray() {
  const elementsArray = Array.from(document.querySelectorAll('.tool'));

  console.dir(elementsArray);
  return elementsArray;
};

export { getItemsArray, getItemsList };