// Consultar un JSON
// En el JSON, las llaves están dentro de un string
/* 
    JSON es una tecnología de transporte, permite la conexión
    entre el back y el front haciendo uso de JSON mientras que
    ambas partes pueden estar desarrolladas con tecnologias
    distintas, por ejemplo el back puede estar desarrollado con
    JAVA, Springboot, Ruby, Django, Node mientras que el front 
    hace el consumo de los JSON desde React, Vue, etc
*/

const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {

    fetch('data/empleado.json')
        .then( respuesta => respuesta.json() )
        .then( resultado => imprimirJSONHTML(resultado))
}

function imprimirJSONHTML({empresa, id, nombre, trabajo}){

    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p> Empleado: ${nombre} </p>
        <p> ID: ${id} </p>
        <p> Empresa: ${empresa} </p>
        <p> Trabajo: ${trabajo} </p>
    `;
}

// NOTA: Investigar acerca de REST API