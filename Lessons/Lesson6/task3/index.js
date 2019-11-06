function getSpecialNumbers(from, to) {
  let array = [];

  for (let i = from; i < to; i++) {
      if (i % 3 === 0) {
          array.push(i);
      }
  }

  return array;
}