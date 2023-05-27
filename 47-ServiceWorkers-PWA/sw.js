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

const nombreCache = 'apv-v6';
const archivos = [
    './',
    './index.html',
    './error.html',
    './css/bootstrap.css',
    './css/styles.css',
    './js/app.js',
    './js/apv.js',
    './manifest.json'
];

// Cuando se instala el service Worker
/**
 * Solo se ejecuta una vez, cada vez que se instala el SW
 * En este bloque es recomendable para cachear archivos
 */
self.addEventListener('install', e =>{
    console.log('Instalado el Service Worker');

    // Esperar hasta que se descarguen todos los archivos de Caché
    e.waitUntil(
        caches.open(nombreCache)
            // Promise para ir cacheando los archivos
            .then( cache => {
                console.log('cacheando')
                cache.addAll(archivos)  // Agregar arreglo archivos al caché
                                        // Sí fuera 1 archivo usar .add
            })
    )
});

// Activar el ServiceWorker
/**
 * Es un buen lugar para nuevas versiones de nuestra PWA
 */
self.addEventListener('activate', e =>{
    console.log('Service Worker Activado');

    e.waitUntil(
        caches.keys()
            .then( keys => {
                // console.log(keys);

                return Promise.all(
                    keys.filter( key => key !== nombreCache)
                        .map( key => caches.delete(key)) // Borra los demás caches
                )
            })
    )
});

// Evento fetch para descargar archivos estáticos
self.addEventListener('fetch', e =>{
    // console.log('Fetch...', e);

    e.respondWith(

        // (async function(){

        //     const cachedResponse = await caches.match(e.request)

        //     if(cachedResponse){
        //         return cachedResponse;
        //     } else {
        //         return caches.match('./error.html')
        //     }
        //     return fetch(e.request);
        // }) ()


        // Revisar el tipo de request, en caso sea igual a lo que tenemos
        // en cache, entonces cargamos el cache
        caches.match(e.request)
            .then( respuestaCache => (respuestaCache ? respuestaCache : caches.match('./error.html')))
    );
})