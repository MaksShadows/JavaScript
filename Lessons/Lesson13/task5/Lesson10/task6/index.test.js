import { getRandomNumbers } from './index';

it('should get functional without arg', () => {
    const result = getRandomNumbers(length, from, to);
    
    expect(result).toEqual(null);
});

it('should get functional other arg', () => {
  const result = getRandomNumbers(summ);
  
  expect(result).toEqual(null);
});

it('should get functional return arr lenght', () => {
    const result = getRandomNumbers({});
    
    expect(result).toEqual({lenght});
});