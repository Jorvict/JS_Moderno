// Detectar cuando estamos viendo la página web actual
// console.log(document.visibilityState);

// Esto se puede utilizar para que en caso cambiemos de página, sí
// estabamos viendo un vídeo, éste se pause, similar al funcionamiento
// de los vídeos en twitter

// El evento visibilitychange se ejecuta cada vez que cambiamos o 
// minimizamos la página 
document.addEventListener('visibilitychange', () =>{

    if(document.visibilityState === 'visible'){

        console.log('Ejecutar la función para reproducir el vídeo...');
    } else {
        
        console.log('Pausar el vídeo');
    }
});