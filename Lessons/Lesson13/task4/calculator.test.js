import { calc } from './calculator';

it('should be a + b', () => {
    const result = calc('45 + 5');

    expect(result).toEqual('45 + 5 = 50');
});

it('should be a - b', () => {
    const result = calc('45 - 5');

    expect(result).toEqual('45 - 5 = 40');
});

it('should be a * b', () => {
    const result = calc('45 * 5');

    expect(result).toEqual('45 * 5 = 225');
});

it('should be a / b', () => {
    const result = calc('45 / 5');

    expect(result).toEqual('45 / 5 = 9');
});

it('should be string', () => {
    const result = calc(5);

    expect(result).toEqual(null);
});
