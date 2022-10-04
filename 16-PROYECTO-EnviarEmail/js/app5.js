// Variables
const txtEmail = document.querySelector('#email');
const txtAsunto = document.querySelector('#asunto');
const txtMensaje = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const spinner = document.querySelector('#spinner');
const emailForm = document.querySelector('#enviar-mail');
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');



// Eventos
inicializarEventsListeners();
function inicializarEventsListeners(){

    document.addEventListener('DOMContentLoaded', inicializarApp);

    txtEmail.addEventListener('blur', validarCampo);
    txtAsunto.addEventListener('blur', validarCampo);
    txtMensaje.addEventListener('blur', validarCampo);

    btnEnviar.addEventListener('click', enviarFormulario);
    btnReset.addEventListener('click', reiniciarFormulario);

}


// Funciones
function inicializarApp(){

    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarCampo(e){

    if(e.target.value.length > 0){

        const errorExiste = document.querySelector('p.error');
        if(errorExiste){
            errorExiste.remove();
        }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else{

        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        imprimirError('Debe llenar el campo');
    }

    if(e.target.type === 'email'){

        if(er.test(e.target.value)){

            const errorExiste = document.querySelector('p.error');
            if(errorExiste){
                errorExiste.remove();
            }
            
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        } else{
            
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            imprimirError('Correo no válido');
        }
    }

    if(er.test(txtEmail.value) && txtAsunto.value !== '' && txtMensaje.value !== ''){
        
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');    
    }
}

function imprimirError(mensaje){

    const msgError = document.createElement('p');
    msgError.textContent = mensaje;
    msgError.classList.add('border', 'border-red-500', 'text-center', 'mt-5', 'p-3', 'text-red-500', 'error');

    const errores = document.querySelectorAll('.error'); // Retorna NodeList(Similar a un array)
    if(errores.length === 0){

        emailForm.appendChild(msgError);
    }
}

function enviarFormulario(e){

    e.preventDefault();
    spinner.style.display = 'flex';

    setTimeout(() => {

        spinner.style.display = 'none';

        const msgEnviado = document.createElement('p');
        msgEnviado.textContent = 'Correo enviado.';
        msgEnviado.classList.add('border', 'border-green-500', 'text-center', 'text-green-500', 'mt-5', 'p-3')

        emailForm.appendChild(msgEnviado);

        setTimeout(() => {

            msgEnviado.remove();
            reiniciarFormulario();
        }, 1500);
    }, 3000);
}

function reiniciarFormulario(){

    emailForm.reset();
    inicializarApp();
    txtEmail.classList.remove('border', 'border-green-500', 'border-red-500');
    txtAsunto.classList.remove('border', 'border-green-500', 'border-red-500');
    txtMensaje.classList.remove('border', 'border-green-500', 'border-red-500');

    const errorExiste = document.querySelector('p.error');
    if(errorExiste){
        errorExiste.remove();
    }
}