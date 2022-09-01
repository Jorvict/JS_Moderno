// Evento submit a un formulario
// Debemos seleccionar el id o clase de un formulario válido
/* La acción por default varía dependiendo de cada elemento, por ejemplo la acción de un elemento "a" es abrir un hipervínculo,
la acción por default de un formulario es enviar los datos a través del metodo establecido  a la URL definida en el action. Es decir, las acciones
por default son las funciones para las cuales se programó el elemento*/

/* En formularios es común detener por default el formulario para poder validar el formulario y luego mandar a llamar a una API y poder consumir un resultado*/

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', validarFormulario) // Se ejecuta cuando se hace click en el input o button que tiene el type = submit

function validarFormulario(e){

    e.preventDefault(); // Evita que se ejecute la acción por default del elemento, en este caso sería enviar el formulario

    console.log('Consultando API...');
    console.log(e);
    console.log(e.target.method); // Visualizar el tipo de método del formulario
    console.log(e.target.action); // Visualizar la acción por default del formulario (Hacia donde irá)
}