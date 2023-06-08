import Citas from "../js/classes/Citas";


describe('Probar la clase de Citas', () => {

    const citas = new Citas();

    test('Agregar una nueva cita', () => {
        const citaObj = {
            mascota: 'Hook',
            propietario: 'Jorvict',
            telefono: '987456321',
            fecha: '08-06-2023',
            hora:'07:40',
            sintomas: 'Solo duerme'
        }

        citaObj.id = Date.now();

        citas.agregarCita(citaObj);

        // Prueba
        expect(citas).toMatchSnapshot();
    });
});