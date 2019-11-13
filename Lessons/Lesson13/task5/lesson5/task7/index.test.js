import { increaser } from './index';

it('a smaller index return a', () => {
  const result = increaser(8, 15);

  expect(result).toEqual(8);
});

it('a bigger index return a + index', () => {
  const result = increaser(2, 6);

  expect(result).toEqual(8);
});


it('should get not functional', () => {
  const result = getSum({});

  expect(result).toEqual(null);
});