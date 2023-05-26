/**
 * Recordar que no se puede utilizar window al programar 
 * un serviceWorker y se debe usar el self.
 * 
 * Para hacer una PWA instalable debe tener 3 cosas:
 *      ~ Manifest válido
 *      ~ Debe tener un dominio HTTPS (o localhost)
 *      ~ Tener registrado el eventListener de Fetch
 *  
*/

// Cuando se instala el service Worker
/**
 * Solo se ejecuta una vez, cada vez que se instala el SW
 * En este bloque es recomendable para cachear archivos
 */
self.addEventListener('install', e =>{
    console.log('Instalado el Service Worker');

    console.log(e);
})

// Activar el ServiceWorker
/**
 * Es un buen lugar para nuevas versiones de nuestra PWA
 */
self.addEventListener('activate', e =>{
    console.log('Service Worker Activado');

    console.log(e);
});

// Evento fetch para descargar archivos estáticos
self.addEventListener('fetch', e =>{
    console.log('Fetch...', e);
})