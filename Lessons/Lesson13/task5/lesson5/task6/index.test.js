import { getSum } from './index';

it('should get functional other arg', () => {
    const result = getSum(m);

    expect(result).toEqual(null);
});

it('should get not functional', () => {
    const result = getSum({});

    expect(result).toEqual(null);
});

it('should get n > 0', () => {
    const result = getSum(0);

    expect(result).toEqual(null);
});
