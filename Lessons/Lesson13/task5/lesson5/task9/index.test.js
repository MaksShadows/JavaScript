import { findDivCount } from './index';

it('should get a,b,n', () => {
    const result = findDivCount(a, b,n );
    
    expect(result).toEqual(cnt);
});

it('should be 0 if a >= b', () => {
    const result = findDivCount(25,8);
    
    expect(result).toEqual(0);
});

it('should get 0 argument', () => {
    const result = findDivCount(0,0,0);

    expect(result).toEqual(0);
});
