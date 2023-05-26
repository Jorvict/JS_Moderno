/**
 * Características de una Progressive Web Application (PWA)
 *  ~ Rápida: Cargan toda la información en menos de 5 segundos
 *  ~ Instalable: Se pueden navegar o instalar en tu navegador 
 *      o teléfono móvil como una aplicación nativa.
 *  ~ Soporte Offline: Pueden funcionar incluso sin conexión a internet
 *  
 * Service Workers: Es la base de una PWA, son scripts que están corriendo
 *      todo el tiempo detras de escenas.
 *  ~ Funcionan Offline.
 *  ~ No tienen acceso al DOM.
 *  ~ Cargan de forma instantanea.
 *  ~ Pueden sincronizar datos detrás de escena o sin interferir en la
 *      navegación.
 * 
 * Por ejemplo un caso de uso sería el desarrollo de un formulario que al 
 * perder la conexión guarde la información en caché y una vez regrese la
 * conexión sincronizar esos datos con los de un servidor, muy similar
 * a Uber, ya que sí abres la aplicación sin tener acceso a internet la
 * app funciona (aunque de forma limitada) pero llega a ejecutar para
 * solicitarte que habilites la conexión a internet para su correcto
 * funcionamiento.
 * 
 * Funciones no disponibles en Services Workers:
 *  ~ window (utiliza self)
 *  ~ document (se utiliza caches)
 *  ~ localStorage (se utiliza fetch)
 * 
 * Para auditar rendimiento desde Chrome, ingresar a inspector de
 * elementos, luego nos vamos a la pestaña "Lighthouse" y desde aquí
 * podremos realizar una auditoria.
 * 
 * Para realizar una PWA es indispensable tener un archivo manifest.json
 * en la cual se especifique el start_url, establecer que responda un 200
 * en caso estar offline, utizar HTTPS (para prueba en local es válido usar
 * localhost) pero para ser considerada como una PWA como tal debe estar
 * desplegada en un dominio con HTTPS, también se debe contar con un icono
 * apple-touch
 */

if('serviceWorker' in navigator){

    navigator.serviceWorker.register('./sw.js')
        .then( registrado => console.log('Se instaló correctamente... ', registrado))
        .catch( error => console.log('Falló la instalación...', error) );
        
} else {
    console.log('Service Workers no soportados')
}