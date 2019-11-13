import { getSum } from './index';

it('should get functional n', () => {
    const result = getSum(8);

    expect(result).toEqual(8);
});

it('should get not functional', () => {
    const result = getSum({});

    expect(result).toEqual(null);
});

it('should get zero', () => {
    const result = getSum(0);

    expect(result).toEqual(null);
});
