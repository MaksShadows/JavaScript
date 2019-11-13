import { pickProps } from './index';

it('should get result object', () => {
    const result = pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']);
    
    expect(result).toEqual({ a: 1, c: 3 });
});

it('should get result object', () => {
    const result = pickProps({});
    
    expect(result).toEqual({});
});

it('should get result object', () => {
    const result = pickProps({ a: 1, b: 2, c: 3 });
    
    expect(result).toEqual({});
});