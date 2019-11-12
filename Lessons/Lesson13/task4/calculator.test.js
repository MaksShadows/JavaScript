import { calc } from './calculator';

it('should get  sum', () => {
    const result = calc('45 + 5');

    expect(result).toEqual('45 + 5 = 50');
});

it('should get  difference', () => {
    const result = calc('45 - 5');

    expect(result).toEqual('45 - 5 = 40');
});

it('should get division', () => {
    const result = calc('45 * 5');
    
    expect(result).toEqual('45 * 5 = 225');
});

it('should get multiplication', () => {
    const result = calc('45 / 5');

    expect(result).toEqual('45 / 5 = 9');
});

it('should get string', () => {
    const result = calc(5);
    
    expect(result).toEqual(null);
});
