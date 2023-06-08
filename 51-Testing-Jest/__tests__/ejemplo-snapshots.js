// Snapshot se puede utilizar para testear el objeto completo y no elemento por elemento
/**
 * Los Snapshots son datos que se almacenan en un string, se crean en una carpeta aparte y
 * sobre dicho snapshot podemos comparar sí los datos son iguales o diferentes siendo así
 * otro cliente.
 * 
 * En la primera ejecución de un snapshot, se creará la carpeta "__snapshots__" dentro de la
 * carpeta "__tests__", se recomienda no sobreescribir en dichos archivos ya que solo Jest
 * debe modificarlos.
 * 
 * Lo que hará inicialmente el snapshot es guardar una copia del elemento recibido (El expect)
 * y luego es posteriores ejecuciones validará si el nuevo elemento que se le está pasando
 * en el expect es igual a la coía que tiene el snapshot.
 * 
 * Si queremos actualizar el snapshot porque ya estamos validando con otro elemento con datos
 * nuevos e información nueva podemos forzar una actualización del snapshot usando el comando
 * "npm run test -- -u" o "npm t -- -u"
 */

const cliente = {
    nombre: 'Jorvict Enrique',
    balance: 500,
    tipo: 'Premium'
}

// Testeando solamente un elemento
describe('Testing al cliente', () => {

    test('El cliente es Jorvict', () => {
        expect(cliente.nombre).toBe('Jorvict Enrique');
    });


    // Testeando con snapshot
    test('El cliente es Jorvict', () => {
        expect(cliente).toMatchSnapshot();
    });
});

