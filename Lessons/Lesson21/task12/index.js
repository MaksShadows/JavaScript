function squaredNumbers() {
  const li = document.querySelectorAll('.number');

  for (let elem of li) {
      const numInSquare = elem.getAttribute('data-number') * elem.getAttribute('data-number');
      elem.dataset.squaredNumber = numInSquare;
  }
};

export { squaredNumbers };