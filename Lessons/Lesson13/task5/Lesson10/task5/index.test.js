import { getTotalPrice } from './index';

it('should functional get arr', () => {
    const result = getTotalPrice({});
    
    expect(result).toEqual({});
});

it('should functional  get string with summ ', () => {
  const result = getTotalPrice('$17.15');
  
  expect(result).toEqual('$17.15');
});

it('should function rounding summ down', () => {
    const result = getTotalPrice(17.159);
    
    expect(result).toEqual(17.15);
});