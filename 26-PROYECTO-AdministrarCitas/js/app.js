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

let editando;

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

    editarCita(citaActualizada){

        /* Se utiliza .map y no .filter porque filter va a quitar un elemento o
        va a quitar los demás y mantener un único elemento basado en una condición,
        es decir está EDITANDO el array, sin embargo .map lo que hace es crear un
        nuevo arreglo, por lo tanto va a re-escribir todo el array desde cero */

        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita );

        /* Explicación del operador ternario superior: En caso de que el id
        de la citaActualizada sea igual al de la cita iterada en el .map lo
        que sucedera es que el objeto completo de citaActualizada sobreescribirá
        al objeto de cita iterado, de está forma los nuevos valores que han sido
        registrados en la edición sobreescribirán a los antiguos, y en caso
        contrario que los id no sean iguales simplemente se retornará la cita iterada
        que ya estaba establecida, ya que no ha habido ninguna modificación y así
        no se perderían aquellas citas que no se modificaron .
        NOTA: En sí lo que sucede es que el map está creando un array que solo
        imprimirá aquellas citas que sean devueltas en cada iteración, sí los
        ids son distintos entonces retornará el objeto de cita iterado, pero
        si los ids son iguales entonces retornará el objeto de citaActualizada */
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
            btnEditar.innerHTML = `Editar <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
            </svg>`;
            btnEditar.onclick = () => cargarEdicion(cita);


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
            divCita.appendChild(btnEditar);


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

    if(editando){
        
        ui.imprimirAlerta('Editado correctamente', 'success');
        
        // Pasar el objeto de la cita a edición
        // NOTA: Recordar que al ser un objeto global no debemos pasar la referencia
        // del objeto sino una copia del mismo.
        administrarCitas.editarCita({...citaObj});

        // Regresar el texto del botón a su estado original
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        // Quitar modo edición
        editando = false;

    } else {
        
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

        // Mensaje de agregado correctamente
        ui.imprimirAlerta('Se agregó correctamente', 'success');
    }

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

// Carga los datos y el modo edición
function cargarEdicion(cita){

    const{ mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

    // Llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    // Llenar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    // Cambiar el texto de botón
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;
}