// Campos del formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

// UI
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

class Citas {

    constructor(){
        this.citas = [];
    }

    agregarCita(cita){

        this.citas = [... this.citas, cita];
    }

    eliminarCita(id){

        this.citas = this.citas.filter( cita => cita.id !== id);
    }
}

class UI{

    imprimirAlerta(mensaje, tipo){

        // Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

        // Agregar clase en base al tipo de error
        if( tipo === 'error'){

            divMensaje.classList.add('alert-danger');
        } else{
        
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        // Quitar la alerta después de 5 segundos
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    imprimirCitas({citas}){
        
        // Se puede hacer destructuring directamente en el parametro de la función
        // const { citas } = citas; No se puede hacer destructuring
        /* 
            NOTA: Solo usar sí el parametro tiene el mismo nombre
            que el campo al cual se le esta haciendo destructuring
        */

        this.limpiarHTML();
        
        citas.forEach( cita => {

            const{ mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            // Scripting de los elementos de la cita
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

            // Botón para eliminar esta cita
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = `Eliminar <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg> `;

            // Añade un botón para editar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-info');
            

            // Ejecutar funcion eliminarCita cuando se haga clic en btnEliminar
            btnEliminar.onclick = () => eliminarCita(id);

            // Agregar los parrafos al divCita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);


            // Agregar las citas al HTML
            contenedorCitas.appendChild(divCita);
        });
    }

    limpiarHTML(){

        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild( contenedorCitas.firstChild );
        }
    }
}

const administrarCitas = new Citas();
const ui = new UI();

// Registrar eventos
eventListeners();
function eventListeners(){

    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);

    formulario.addEventListener('submit', nuevaCita);
}

// Objeto con la información de la cita
const citaObj = {

    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

// Agrega datos al objeto de cita
function datosCita(e){

    /*  Lo que hace la siguiente instrucción es almacenar lo que
        estamos escribiendo directamente en el objeto. Para que 
        ésta técnica funcione el name del input debe ser
        igual que el nombre de la  key en el objeto
    */
    citaObj[e.target.name] = e.target.value;
}

// Valida y agrega una nueva cita a la clase de citas
function nuevaCita(e){
    
    e.preventDefault();

    // Extraer la información del objeto de cita
    const{ mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    // Validar
    if( mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '' ){

        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
       return; 
    }

    // Generar un ID único para cada cita
    // Recordar que se puede agregar nuevas keys al objeto porque no está sellado
    citaObj.id = Date.now();

    // Creando una nueva cita
    /* 
        Al pasar el "objeto" en realidad estamos pasando una referencia
        y citaObj al ser un objeto global la referencia siempre va a ser
        la misma, esto quiere que decir que si agregamos varias citas
        todas harán referencia al "citaObj" de ese momento, ergo los
        objetos se van a repetir con los datos de la última cita
        ingresada, para evitar esto lo que se va a hacer es PASAR UNA
        COPIA del citaObj actual, de esta forma solo se ingresara
        en el array el valor que tenía citaObj especificamente en
        ese momento, para pasar la copia solo agregamos spread operator. 
    */
    administrarCitas.agregarCita({...citaObj});

    // Reiniciar el objeto (Ya que el objeto al ser global no pierde la data almacenada)
    reiniciarObjeto();
    
    // Reiniciar el formulario
    formulario.reset();

    // Mostrar el HTML de las citas
    ui.imprimirCitas(administrarCitas);
}

function reiniciarObjeto(){

    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}

function eliminarCita(id){
    
    // Eliminar la cita (En la clase principal)
    administrarCitas.eliminarCita(id);

    // Muestre un mensaje
    ui.imprimirAlerta('La cita se eliminó correctamente', 'success');

    // Refrescar las citas
    ui.imprimirCitas(administrarCitas);

}