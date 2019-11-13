import { reverseArray } from './index';


it('should get not arr', () => {
    const result = reverseArray('');
    
    expect(result).toEqual(null);
});
it('should get  arr', () => {
    const result = reverseArray([1,2,3]);
    
    expect(result).toEqual([]);
});

it('shoud be reverse of array', () => {
    const result = reverseArray([1, 2, 3]);

    expect(result).toEqual([3, 2, 1])
});

