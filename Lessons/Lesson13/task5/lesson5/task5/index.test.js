import { getSum } from './index';

it('should get functional a>b', () => {
    const result = getSum(15,5);

    expect(result).toEqual(null);
});

it('should get not functional', () => {
    const result = getSum("");

    expect(result).toEqual(null);
});

it('should get zero a, b', () => {
    const result = getSum(0,0);

    expect(result).toEqual(0);
});
