/**
 * ########## ¿Qué es Node.JS? ##########
 * Node o Node.JS es un entorno de código abierto, 
 * multi-plataforma que permite crear aplicaciones del lado
 * del servidor en JavaScript. Permite crear API's, 
 * aplicaciones web e incluso acceder a archivos y leer sus
 * contenidos. Algunos ejemplos son realizar pagos de forma 
 * segura, puedes acceder a una BD, autenticar usuarios, 
 * subir archivos y muchas cosas más.
 * 
 * ===== Ventajas de Node =====
 *  - Velocidad y rendimiento: Node fue pensado para 
 * solucionar estos problemas, además es excelente para 
 * aplicaciones en tiempo real.
 * 
 *  - JavaScript: Sí ya tienes experiencia en javascript,
 * ahora podrás crear aplicaciones fullstack con Node sin
 * necesidad de compiladores ni lenguajes extras.
 * 
 *  - NPM (Node Package Manager): Una gran cantidad de paquetes
 * y librerías de código abierto ya listos, entre ellos encontrarás:
 *      ~ Subida de archivo
 *      ~ Autenticación
 *      ~ Enviar emails
 *      ~ Template engines
 *      ~ Seguridad
 * 
 *  - Funciona en Windows, Mac, Linux
 * 
 *  - Una gran cantidad de librerías soporte, documentación, ejemplos
 * 
 * ===== Instalación de NPM =====
 * Escribimos y ejecutamos la siguiente línea de código en la terminal
 * npm install (nombre_del_paquete)
 * npm install express
 * 
 * 
 * ########## ¿Qué es Express? ##########
 * Express.JS es el framework web más popular de Node, y es la herramienta
 * sobre la que están desarrollados otros frameworks como MEAN, Sails,
 * Loopback, GraphQL, Yoga y otros.
 * 
 * ===== Características de Express =====
 * En las rutas (Routes) soporta los diferentes verbos HTTP, como son POST, 
 * GET, PUT, PATCH, DELETE.
 * 
 * Soporta "vistas" que son los datos mostrados en la pantalla mediante 
 * determinadas respuestas. (Hacen referencia a los views donde se utilizan
 * los template engines ).
 * 
 * Permiten la creación de aplicaciones MVC que permiten tener una separación
 * de código y a su vez un mejor orden.
 * 
 * Cuentan con soporte a MiddleWare, mediante peticiones que se ejecutan en
 * la tubería de la petición. Es decir, ejecutas una petición y una vez
 * finalizada pasará a la siguiente petición (básicamente como una cola).
 * 
 * ===== Middleware Express =====
 * El middleware se utiliza bastante en Express, permite acceder a archivos,
 * revisar si un usuario está autenticado o no, entre otras.
 * Ejemplo: Código que enrutara a admistracion cuando un controlador valide 
 * que el usuario está autenticado y otro controlador mostrará el panel de
 * administracion
 *      router.get('/administracion',
 *          authController.usuarioAutenticado,
 *          adminController.panelAdministracion
 *      );
 * 
 * El middleware se ejecuta en pila, por lo tanto se ejecuta uno y después el
 * otro.
 * 
 * En alguno casos el middleware lo creas tu (similar a crear tus propias
 * funciones) o también está disponible en express una gran cantidad de
 * middlewares.
 * 
 * ===== Desventajas de Express =====
 * A diferencia de otros frameworks como Django o Laravel, Express no viene
 * con "baterías incluidas", ese término se le da cuando un framework ya tiene
 * autenticación, roles, ORM o un generador de modelos, esto quiere decir que
 * Express no viene con dichas funciones incluidas, pero estas piezas se
 * pueden instalar vía NPM. Lo cual en realidad podría ser una ventaja ya que
 * solamente instalas lo que necesitas para tu aplicación y podría beneficiarte
 * en rendimiento ya que a diferencia de los frameworks como Laravel, Django,
 * Ruby on rails puede ser que vengan con más funciones de las que en realidad
 * requieres para tu proyecto.
 * 
 */