import { superRound } from './index';

it('should functional get only number ', () => {
    const result = superRound(Number);
    
    expect(result).toEqual(Number);
});

it('should get functional arg number', () => {
  const result = superRound(5, -8);
  
  expect(result).toEqual(5,-8);
});

it('should get arr', () => {
    const result = superRound({});
    
    expect(result).toEqual({});
});