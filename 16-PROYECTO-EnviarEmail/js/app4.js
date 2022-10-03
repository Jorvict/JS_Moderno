// Variables
const txtEmail = document.querySelector('#email');
const txtAsunto = document.querySelector('#asunto');
const txtMensaje = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const formulario = document.querySelector('form');
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const spinner = document.querySelector('#spinner');



// Eventos
inicializarEventListeners();
function inicializarEventListeners(){

    document.addEventListener('DOMContentLoaded', iniciarApp);

    txtEmail.addEventListener('blur', validarCampo);
    txtAsunto.addEventListener('blur', validarCampo);
    txtMensaje.addEventListener('blur', validarCampo);

    btnEnviar.addEventListener('click', enviarFormulario);
    btnReset.addEventListener('click', reiniciarFormulario);
}


// Funciones
function iniciarApp(){

    txtEmail.classList.remove('border-green-500', 'border');
    txtAsunto.classList.remove('border-green-500', 'border');
    txtMensaje.classList.remove('border-green-500', 'border');
    
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarCampo(e){

    if(e.target.value.length > 0){

        const errorExiste = document.querySelector('p.error');
        if(errorExiste){
            errorExiste.remove();
        }

        e.target.classList.remove('border-red-500', 'border');
        e.target.classList.add('border-green-500', 'border');
    } else{

        e.target.classList.remove('border-green-500', 'border');
        e.target.classList.add('border-red-500', 'border');
        imprimirError('Todos los campos son obligatorios')
    }

    if(e.target.type === 'email'){


        if(er.test(e.target.value)){

            const errorExiste = document.querySelector('p.error');
            if(errorExiste){
                errorExiste.remove();
            }
            
            e.target.classList.remove('border-red-500', 'border');
            e.target.classList.add('border-green-500', 'border');
        } else {

            e.target.classList.remove('border-green-500', 'border');
            e.target.classList.add('border-red-500', 'border');
            imprimirError('Ingresar correo válido');
        }
    } 

    if(er.test(txtEmail.value) && txtAsunto.value !== '' && txtMensaje.value !== ''){
        
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

function imprimirError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');
    
    const errores = document.querySelectorAll('.error');

    if(errores.length === 0){
        formulario.appendChild(mensajeError);
    }
}

function enviarFormulario(e){

    e.preventDefault();
    spinner.style.display = 'flex';

    setTimeout(() => {

        spinner.style.display = 'none';

        const envioExitoso = document.createElement('p');
        envioExitoso.textContent = 'Correo enviado';
        envioExitoso.classList.add('border', 'border-green-500', 'text-green-500', 'p-3', 'mt-5', 'text-center');

        formulario.appendChild(envioExitoso);

        setTimeout(() => {

            envioExitoso.remove();
            reiniciarFormulario();
        }, 2000);
        
    }, 3000);
}

function reiniciarFormulario(){

    formulario.reset();
    iniciarApp();
}