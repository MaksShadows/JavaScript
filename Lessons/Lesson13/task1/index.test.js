  
it('17 === 17', () => {
  expect(17).toEqual(17);
});

it('18 !== 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = numders => numders.filter(el => el % 2 === 0);

it('should get only even numbers from array', () => {
  const result = getEvenNumbers([1, 2, 3, 4, 5, 6, ]);

  expect(result).toEqual([2, 4, 6]);
});
