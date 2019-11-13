import { getSum } from './index';

it('should get functional', () => {
    const result = getSum(a,b);

    expect(result).toEqual(a,b);
});

it('should get not functional', () => {
    const result = getSum("");

    expect(result).toEqual(null);
});

it('should get zero', () => {
    const result = getSum(0);

    expect(result).toEqual(0);
});
