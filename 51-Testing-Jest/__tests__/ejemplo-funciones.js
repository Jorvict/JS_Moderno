function suma(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

describe('Testing a las funciones de suma y resta', () => {

    // Evaluar que la suma de 20 y 30 retorne 50, sí retornara otro valor significaría que la función suma original está mal.
    test('Suma de 20 y 30', () => {
        expect( suma(20, 30) ).toBe(50);
    });

    // Evaluar que la resta de 10 - 5 retorne 5.
    test('Resta de 10 - 5', () => {
        expect( restar(10, 5) ).toBe(5) ;
    });

    test('Que la suma 10 y 10 no sea 1010', () => {
        expect( suma(10, 10) ).not.toBe(1010);
    });

    test('Que la resta de 10 - 5 no sea otro valor', () => {
        expect( restar(10, 5) ).not.toBe(2);
    });
});