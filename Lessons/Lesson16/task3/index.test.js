import { createArrayOfFunctions } from './index';

it('should get []', () => {
    const array = createArrayOfFunctions();

    expect(array).toEqual([]);
})

it('should get null', () => {
    const array = createArrayOfFunctions('');

    expect(array).toEqual(null);
})

it('should get 0', () => {
    const result = createArrayOfFunctions(1)[0]();

    expect(result).toEqual(0);
})




