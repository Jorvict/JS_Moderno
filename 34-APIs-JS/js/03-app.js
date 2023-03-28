// Detectar sí hay conexion a internet o no
// Se puede usar en apps como uber o cabify que al perder conexión muestra error

// Al usar navigator.online en la consola de JS se mostrará sí tiene conexión o no

// Esta es la base de una Progressive Web Application

window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado(){

    if(navigator.onLine){
        
        console.log('Si estás conectado');
    } else {

        console.log('No estás conectado');
    }
}