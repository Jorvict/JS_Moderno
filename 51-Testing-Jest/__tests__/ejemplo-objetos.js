const cliente = {
    nombre: 'Jorvict',
    balance: 500
};

describe('Testing al Cliente', () => {

    // Validar que el cliente sea premium contando siemprey cuando cuente con un balance mayor a 400
    test('El cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });

    // Verificar que el cliente sea "Jorvict"
    test('Es Jorvict', () => {
        expect(cliente.nombre).toBe('Jorvict');
    });

    // Comprobar que no sea otro valor
    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Pedro');
    })

    // Aplicandolo a que no sea un campo vacío
    test('Validar que no sea un campo vacío', () => {
        expect(cliente.nombre).not.toBe('');
    });

    // Aplicandolo a que no tenga 200 de balance
    test('No tiene 200', () => {
        expect(cliente.balance).not.toBe(200);
    })
});

/**
 * A veces pueden ocurrir "falsos positivos", para ello se recomienda testear por una condición y adicionalmente
 * validar negando que se ejecute otra condición salvo la evaluada originalmente, un ejemplo podría ser
 * que al llenar un campo de formulario la validación puede tomarlo como un campo con data, pero puede que al
 * borrar lo escrito en el formulario, los campos estén vacíos pero la validación los evalue como llenos ya que en algun
 * momento lo estuvieron, para este caso se puede hacer un test donde se valide que el campo tiene data y un test
 * donde se evalue que el campo no esté vacío.
 */