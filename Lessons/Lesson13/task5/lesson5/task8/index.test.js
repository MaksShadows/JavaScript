import { compareSums } from './index';

it('sum (a,b) > sum(c,d) should be true', () => {
  const result = getPrimes(0,3,8,10);

  expect(result).toEqual(true);
});

it('sum (a,b) > sum(c,d) should be number', () => {
  const result = getPrimes((2,3),(5,6));

  expect(result).toEqual(5,6);
});

it('should get not functional', () => {
  const result = getSum([]);

  expect(result).toEqual(null);
});