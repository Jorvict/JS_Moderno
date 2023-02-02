// Variables y selectores
mascotaInput = document.querySelector('#mascota');
propietarioInput = document.querySelector('#propietario');
telefonoInput = document.querySelector('#telefono');
fechaInput = document.querySelector('#fecha');
horaInput = document.querySelector('#hora');
sintomasInput = document.querySelector('#sintomas');

formulario = document.querySelector('#nueva-cita');
listaCitas = document.querySelector('#citas');

const citaObj = {
    mascota : '',
    propietario : '',
    telefono : '',
    fecha : '',
    hora : '',
    sintomas : '',
}

let editando;

// Clases
class Citas{

    constructor(){
        this.citas = [];
    }

    agregarCita(cita){
        this.citas = [...this.citas, cita];
    }

    eliminarCita(id){
        this.citas = this.citas.filter(cita => cita.id !== id);
    }

    editarCita(citaActualizada){
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita);
    }
}

class UI{

    imprimirAlerta(mensaje, tipo){

        const divMensaje = document.createElement('div');
        divMensaje.classList.add('alert', 'text-center', 'd-block', 'col-12');
        divMensaje.textContent = mensaje;

        if( tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        setTimeout(() => {
            divMensaje.remove();
        }, 2000);
    }

    imprimirCitas({citas}){

        this.limpiarHTML();

        citas.forEach( cita => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;
            
            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
                <span class = "font-weight-bolder"> Propietario: </span> ${propietario}
            `;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
                <span class = "font-weight-bolder"> Telefono: </span> ${telefono}
            `;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
                <span class = "font-weight-bolder"> Fecha: </span> ${fecha}
            `;

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
                <span class = "font-weight-bolder"> Hora: </span> ${hora}
            `;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
                <span class = "font-weight-bolder"> Sintomas: </span> ${sintomas}
            `;

            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = `Eliminar <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
            </svg>`;
            btnEliminar.onclick = () => eliminarCita(id);

            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = `Editar <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
            </svg>`
            btnEditar.onclick = () => cargarEdicion(cita);
            
            

            // Agregar elementos a divCita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);



            // Agregar divCita a HTML
            listaCitas.appendChild(divCita);
        });
    }

    limpiarHTML(){
        while(listaCitas.firstChild){
            listaCitas.removeChild(listaCitas.firstChild);
        }
    }
}

const administrarCitas = new Citas();
const ui = new UI();


// Event listeners
inicializarEventListeners();
function inicializarEventListeners(){

    mascotaInput.addEventListener('input', llenarDataObj);
    propietarioInput.addEventListener('input', llenarDataObj);
    telefonoInput.addEventListener('input', llenarDataObj);
    fechaInput.addEventListener('input', llenarDataObj);
    horaInput.addEventListener('input', llenarDataObj);
    sintomasInput.addEventListener('input', llenarDataObj);

    formulario.addEventListener('submit', registrarCita);
}


// Funciones
function llenarDataObj(e){

    citaObj[e.target.name] = e.target.value;
}

function registrarCita(e){

    e.preventDefault();

    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    if( mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '' ){
       
        ui.imprimirAlerta('Campos incompletos. Por favor llene todos los campos', 'error');
        return;
    }

    if(editando){
        ui.imprimirAlerta('Cita editada correctamente.')

        administrarCitas.editarCita({...citaObj});

        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        editando = false;
    } else {
        ui.imprimirAlerta('Cita registrada correctamente.')

        citaObj.id = Date.now();

        administrarCitas.agregarCita({...citaObj});
    }

    formulario.reset();
    reiniciarObjeto();

    ui.imprimirCitas(administrarCitas);
}

function reiniciarObjeto(){

    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
    citaObj.id = ''; // OBSERVACION
}

function eliminarCita(id){
    
    ui.imprimirAlerta('Eliminado correctamente', 'success');

    administrarCitas.eliminarCita(id);

    ui.imprimirCitas(administrarCitas);
}

function cargarEdicion(cita){

    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id; // OBSERVACION

    formulario.querySelector('button[type="submit"]').textContent = 'Aplicar cambios';

    editando = true;
}