const password = "123456";

// Agrupar tests
describe('Valida que el password no esté vacío y tenga una extensión de 6 caracteres', () => {

    // Validar la longitud de carácteres de un elemento
    test('Que el password tenga 6 carácteres', () => {

        // El valor pasado en el expect es el elemento a verificar (El recibido/received).
        // El valor pasado en la función toHaveLength es la cantidad de caracteres que debe tener 
        //    (Es como el expected/esperado)
        expect( password ).toHaveLength(6);
    });



    // Validar que el password no esté vacío negando una condición
    test('Password no vacío', () =>{
        
        // Recordar que expect es lo que vamos a revisar, puede ser un string, objeto, arreglo o función.
        // El not es para negar, se podría leer como "no tiene una extensión/longitud de 0".
        expect(password).not.toHaveLength(0);
    })

});