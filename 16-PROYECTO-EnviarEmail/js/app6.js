// Variables
const txtEmail = document.querySelector('#email');
const txtAsunto = document.querySelector('#asunto');
const txtMensaje = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const formulario = document.querySelector('#enviar-mail');
const spinner = document.querySelector('#spinner');
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');

// Eventos
inicializarEventsListener();
function inicializarEventsListener(){

    document.addEventListener('DOMContentLoaded', inicializarApp);

    txtEmail.addEventListener('blur', validarCampo);
    txtAsunto.addEventListener('blur', validarCampo);
    txtMensaje.addEventListener('blur', validarCampo);

    btnEnviar.addEventListener('click', enviarCorreo);
    btnReset.addEventListener('click', reiniciarFormulario);
}

// Funciones
function inicializarApp(){

    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarCampo(e){

    if(e.target.value.length > 0){
        
        const erroresExisten = document.querySelector('p.error');
        if(erroresExisten){

            erroresExisten.remove();
        }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    }else{

        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        imprimirError('Por favor llenar todos los campos.');
    }
    
    if(e.target.type === 'email'){

        if(er.test(e.target.value)){

            const erroresExisten = document.querySelector('p.error');
            if(erroresExisten){

                erroresExisten.remove();
            }

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        } else{

            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            imprimirError('Por favor ingresar un correo válido.');
        }
    }

    if(er.test(txtEmail.value) && txtAsunto.value !== '' && txtMensaje.value !== ''){

        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

function imprimirError(mensaje){

    msgError = document.createElement('p');
    msgError.textContent = mensaje;
    msgError.classList.add('border', 'border-red-500', 'text-red-500', 'text-center', 'mt-5', 'p-3', 'error');
    
    const errores = document.querySelectorAll('p.error');
    if(errores.length === 0){
        
        formulario.appendChild(msgError);
    }
}

function enviarCorreo(e){

    e.preventDefault();
    spinner.style.display = 'flex';

    setTimeout(() => {
        
        spinner.style.display = 'none';

        const msgEnviado = document.createElement('p');
        msgEnviado.textContent = 'Correo enviado.';
        msgEnviado.classList.add('border', 'border-green-500', 'text-green-500', 'text-center', 'mt-5', 'p-3');

        formulario.appendChild(msgEnviado);

        setTimeout(() => {
            
            msgEnviado.remove();
            reiniciarFormulario();
        }, 2000);
    }, 3000);
}

function reiniciarFormulario(){

    formulario.reset();
    inicializarApp();
    txtEmail.classList.remove('border-green-500', 'border-red-500');
    txtAsunto.classList.remove('border-green-500', 'border-red-500');
    txtMensaje.classList.remove('border-green-500', 'border-red-500');
    const erroresExisten = document.querySelector('p.error');
    if(erroresExisten){

        erroresExisten.remove();
    }
}