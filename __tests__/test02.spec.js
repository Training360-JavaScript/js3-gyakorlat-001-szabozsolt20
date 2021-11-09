import HU from '../solutions/app2';

describe( '2. feladat', () => {
    test( 'A HU.date metódusnak vissza kellene adnia a magyar dátumot.', () => {
        const result = HU.date(new Date(2021, 9, 25));
        expect(result).toEqual('2021. 10. 25.');
    });
    
    test( 'A HU.currency metódusnak vissza kellene adnia a magyar pénznemben formázott számot.', () => {
        const result = HU.curreny(2000);
        expect(result).toEqual('2 000,00 Ft');
    });
    
    test( 'A HU.list metódusnak vissza kellene adnia a formázott listát.', () => {
        const result = HU.list(['Szilvi', 'Péter', 'Géza']);;
        expect(result).toEqual('Szilvi, Péter és Géza');
    });
});
