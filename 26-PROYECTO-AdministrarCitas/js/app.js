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
        console.log(this.citas)
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

    imprimirCitas(citas){
        console.log(citas);
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