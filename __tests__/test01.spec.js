import removeDuplicatesFromArray from '../solutions/app1';

describe( '1. feladat', () => {
    test( 'El kellene távolítani a duplikált elemeket a tömbből', () => {
        const originalArray = [1, 1, 5, 5, 'hello', true, false, true];
        const result = removeDuplicatesFromArray(originalArray);
        expect(result).toEqual([1, 5, 'hello', true, false]);
    });
});
