import { squareArray } from './index';

it('should get array', () => {
  const result = squareArray([]);

  expect(result).toEqual([]);
});

it(' should be not array', () => {
  const result = squareArray({});

  expect(result).toEqual(null);
});

it('shoud be square of number', () => {
  const result = squareArray([8]);

  expect(result).toEqual([64]);
});




