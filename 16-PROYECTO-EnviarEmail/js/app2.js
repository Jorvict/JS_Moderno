// Variables
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const formulario = document.querySelector('#enviar-mail');
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');

const emailtxt = document.querySelector('#email');
const asuntotxt = document.querySelector('#asunto');
const mensajetxt = document.querySelector('#mensaje');


// Cargar eventListeners
cargarEventListeners();
function cargarEventListeners(){
    document.addEventListener('DOMContentLoaded', iniciarApp);
    
    emailtxt.addEventListener('blur', validarFormulario);
    asuntotxt.addEventListener('blur', validarFormulario);
    mensajetxt.addEventListener('blur', validarFormulario);

    btnEnviar.addEventListener('click', enviarFormulario);
    btnReset.addEventListener('click', reiniciarFormulario);
}


// Funciones
function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');

    emailtxt.classList.remove('border-green-500', 'border-red-500');
    asuntotxt.classList.remove('border-green-500', 'border-red-500');
    mensajetxt.classList.remove('border-green-500', 'border-red-500');
}

// Valida que los campos no estén vacíos y que email tenga dominio válido
function validarFormulario(e){

    if (e.target.value.length > 0){
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
        
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }
    }
    else{
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        imprimirError('Por favor llenar todos los campos');
    }

    if(e.target.type === 'email'){
        if(er.test(e.target.value)){
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        
            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }
        }
        else{
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            imprimirError('Email inválido');
        }
    }

    if(emailtxt.value !== '' && asuntotxt.value !== '' && mensajetxt.value !== ''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

// Imprime el mensaje de error pasado como argumento según al función que lo llame
function imprimirError(mensajeError){
    const parrafo = document.createElement('p');
    parrafo.textContent = mensajeError;
    parrafo.classList.add('border', 'border-red-500', 'text-white', 'bg-red-500', 'text-center', 'mt-5', 'p-3', 'error');

    const errores = document.querySelectorAll('.error');

    if(errores.length === 0){
        formulario.appendChild(parrafo);
    }
}

// Envía la información escrita en el formulario
function enviarFormulario(e){
    e.preventDefault();

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    setTimeout(() => {
        spinner.style.display = 'none';

        const parrafo = document.createElement('p');
        parrafo.textContent = 'Se envió el mensaje';
        parrafo.classList.add('border', 'border-green-500', 'text-white', 'bg-green-500', 'text-center', 'my-10', 'p-3');
        formulario.insertBefore(parrafo, spinner);

        setTimeout(() => {
            parrafo.remove();

            reiniciarFormulario();
        }, 2000);

    }, 3000);
}

// Vacía los campos y desactiva botón enviar
function reiniciarFormulario(){
    formulario.reset();
    iniciarApp();
}