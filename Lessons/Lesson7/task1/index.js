const getSpecialNumbers = numbers => {
  let specialNumbers = [];

  numbers.forEach(num => {
      if (num % 3 == 0) {
          specialNumbers.push(num);
      }
  });


  return specialNumbers;
};