import { calc } from './calculator';

it('should be sum', () => {
    const result = calc('45 + 5');

    expect(result).toEqual('45 + 5 = 50');
});

it('should be difference', () => {
    const result = calc('45 - 5');

    expect(result).toEqual('45 - 5 = 40');
});

it('should be division', () => {
    const result = calc('45 / 5');

    expect(result).toEqual('45 / 5 = 9');
});

it('should be multiplication', () => {
    const result = calc('45 * 5');

    expect(result).toEqual('45 * 5 = 225');
});

it('should get null', () => {
    const result = calc(5);

    expect(result).toEqual(null);
});
