  
import getSum, {getSquaredArray, getOddNumbers} from './calculator';

it('should get squared numbers array', () => {
    const result = getSquaredArray([2, 3, 4, 5, 6]);

    expect(result).toEqual([4, 9, 16, 25, 36]);
});

it('should keep odd numbers only', () => {
    const result = getOddNumbers([2, 3, 4, 5, 6]);

    expect(result).toEqual([3, 5]);
});

it('should get sum', () => {
    const result = getSum(5, 8);

    expect(result).toEqual(13);
});
