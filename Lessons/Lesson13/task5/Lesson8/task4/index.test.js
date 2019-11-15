import { getAdults } from './index';

it('should get result object', () => {
    const result = getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 });
    
    expect(result).toEqual({ 'John Doe': 19, 'Bob': 18 });
});

it('should get result object arg 1 arg 2', () => {
  const result = getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 });
  
  expect(result).toEqual({});
});

it('should get result object', () => {
    const result = getAdults({});
    
    expect(result).toEqual({});
});

