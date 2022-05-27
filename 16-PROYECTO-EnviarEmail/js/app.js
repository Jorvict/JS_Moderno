// Variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');
// Expresión regular obtenida de https://emailregex.com/
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


eventListeners();
function eventListeners() {
    // Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);    
    
    // Enviar email
    formulario.addEventListener('submit', enviarEmail);
    
    // Reinicia el formulario
    btnReset.addEventListener('click', resetearFormulario);
}


// Funciones
function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

// Valida el formulario
function validarFormulario(e){

    if(e.target.value.length > 0){

        // Elimina los errores
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else{
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');

        mostrarError('Todos los campos son obligatorios')
    }

    if(e.target.type === 'email'){

        if(er.test(e.target.value)){
            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }
    
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');

        }else{
            // mostrarError('El email no es válido');
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');

            mostrarError('Email no válido')
        }
    }

    if( er.test(email.value) && asunto.value !== '' && mensaje.value !== ''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    } 

}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');

    // Nota: .length solamente existe en querySelectorAll, no existe en querySelector, esto debido a que si se busca un elemento que no existe utilizando querySelectorAll, retornará
    // un string vacío, mientras que querySelector retorna un null, el cual no puede ser medido por un .length
    // console.log(document.querySelector('.aui'));   
    // console.log(document.querySelectorAll('.auio'));   

    if(errores.length === 0){
        // formulario.insertBefore(mensajeError, document.querySelector('.mb-10'));
        formulario.appendChild(mensajeError);
    }
}

function enviarEmail(e){
    e.preventDefault();

    // Mostrar el spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';


    // Después de 3 segundos ocultar el spinner y mostrar el mensaje
    setTimeout( () => {
        spinner.style.display = 'none';


        // Mensaje que indica que se envío correctamente
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envió correctamente';
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');

        // Inserta el parrafo ántes del spinner
        formulario.insertBefore(parrafo, spinner);

        setTimeout(() => {
            parrafo.remove(); // Eliminar mensaje de exito

            resetearFormulario();
        }, 5000);
    }, 3000); // Cada 1000 equivale a 1 segundo

    // Se ejecuta cada 3 segundos
    // setInterval( () => {
    //     console.log('Esta funcion se ejecuta cada 3 segundos');
    // }, 3000);
}


// Función que resetea el formulario
function resetearFormulario(e){

    formulario.reset();

    iniciarApp();
}