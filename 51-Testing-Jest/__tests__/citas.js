import Citas from "../js/classes/Citas";


describe('Probar la clase de Citas', () => {

    const citas = new Citas();
    const id = Date.now();

    test('Agregar una nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'Jorvict',
            telefono: '987456321',
            fecha: '08-06-2023',
            hora:'07:40',
            sintomas: 'Solo duerme'
        }

        citas.agregarCita(citaObj);

        // Prueba
        expect(citas).toMatchSnapshot();
    });


    test('Actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Nuevo nombre',
            propietario: 'Jorvict Enrique',
            telefono: '987456321',
            fecha: '08-06-2023',
            hora:'07:40',
            sintomas: 'Solo duerme'
        }

        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
    });


    test('Eliminar Cita', () => {
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    });
});