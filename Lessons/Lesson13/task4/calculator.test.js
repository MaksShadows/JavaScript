import { calc } from './calculator';

it('should get string', () => {
    const result = calc('20 + 5');

    expect(result).toEqual('20 + 5 = 25');
});

it('should get string', () => {
    const result = calc('20 - 5');

    expect(result).toEqual('20 - 5 = 15');
});

it('should get string', () => {
    const result = calc('20 * 5');

    expect(result).toEqual('20 * 5 = 100');
});

it('should get string', () => {
    const result = calc('20 / 5');

    expect(result).toEqual('20 / 5 = 4');
});

it('should get null', () => {
    const result = calc(5);

    expect(result).toEqual(null);
});
