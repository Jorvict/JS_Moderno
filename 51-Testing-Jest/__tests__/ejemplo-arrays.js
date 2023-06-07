const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

describe('Testing al carrito de compras', () => {

    // Verificar que el carrito tenga especificamente 3 artículos
    test('Probar que el array tenga 3 elementos', () => {
        expect(carrito).toHaveLength(3);
    });


    // Validar que el carrito no esté vacío negando una condición
    test('Verificar que el carritó no esté vacío', () => {
        expect(carrito).not.toHaveLength(0);
    });
});