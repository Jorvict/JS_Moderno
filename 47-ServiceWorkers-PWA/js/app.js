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
 */