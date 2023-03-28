// Notification API
// Es importante tener en consideración que para poder mostrar las notificaciones
// los usuarios deben aceptar recibir notificaciones en el navegador

//Solicitar permiso de acceso a las notificaciones
const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () =>{

    Notification
        .requestPermission()
        .then( resultado =>{

            // Imprimirá granted cuando se brinde permiso
            // Imprimirá denied cuando se rechace permiso
            // Imprimirá default cuando no se rechace ni se confirme el permiso
            console.log('El resultado es ', resultado);
        })
})


// Botón para imprimir notificación
const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () =>{

    if(Notification.permission === 'granted'){

        // Al colocarle un objeto de segundo parámetro estamos
        // estableciendo las opciones de la notificación
        const notificacion = new Notification('Esta es la notificación', {
            icon: 'img/ccj.png',
            body: 'Código con Jorvict, aprendiendo con proyectos reales',
        });

        // Establecer que al momento de hacer click en la notificacion
        // nos lleve a una página específica
        notificacion.onclick = function(){

            window.open('https://github.com/Jorvict');
        }
    }
})