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
 * ########## Instala la última versión de Node para utilizar Imports y Exports ##########
 *  - Instalamos Node, NPM y chocolatey desde su página web
 *  - En la ruta de nuestro proyecto ejecutamos el comando npm init
 *      para generar el archivo package.json
 *  - Procederemos a instalar express como DEPENDENCIA DE PRODUCCIÓN, existen
 *      2 tipos de dependencias, las dependencias de desarrollo y las
 *      dependencias de producción, las de desarrollo son aquellas que 
 *      requerimos y utilizamos mientras desarrollamos el proyecto, y las de 
 *      producción son aquellas que se van a requerir cuando el proyecto ya se 
 *      encuentre publicado. Para instalar como dependencia de producción
 *      ejecutamos como siempre (npm install X_paquete) ya que es la
 *      configuración por defecto, dicha dependencias se subirá al servidor 
 *      cuando el proyecto sea desplegado, caso contrario sí solamente se
 *      requiere mientras desarrollamos el proyecto, entonces agregamos 
 *      "--save-dev" al comando de instalacion para especificar que es una
 *      dependencia de desarrollo.
 *      npm install --save-dev X_paquete
 *  - Podemos identificar las dependencias de desarrollo y de producción a 
 *      través del archivo package.json, las de desarrollo son aquellas
 *      dentro del objeto "devDependencies" mientras que las de producción
 *      están dentro de "dependencies"
 *  - Recordar, instalar express como dependencia de producción
 *  - Instalamos Nodemon como dependencia de desarrollo, Nodemon funciona
 *      para detectar cambios en los archivos y reiniciar el servidor,
 *      esto es útil para refrescar el site cada vez que modificamos el
 *      código mientras ejecutamos el servidork, así ya no tendremos que
 *      ir a la terminal, detener el servidor y volverlo a arrancar cada
 *      vez que hagamos algún cambio.
 * - Generamos el archivo index.js que es donde vamos a configurar express
 * - Para ejecutar el index.js y poder arrancar el servidor necesitamos el
 *      package.json, es nuestra segunda utilidad de dicho archivo, para
 *      ejecutar el index vamos al archivo package y en el objeto "scripts"
 *      creamos una key con el nombre "dev", como value le colocamos
 *      nodemon (para que detecte los cambios) index.js.
 *      Ahora vamos a la terminal con la ruta de nuestro proyecto, y
 *      ejecutamos el script creado con el comando "npm run dev".
 * - Para visualizar el proyecto abrimos el navegador y vamos a la url 
 *      localhost:4000
 * 
 * ########## Habilitando la Sintaxis de Imports y Exports ##########
 *
 * Anteriormente cuando aún no existían los Modules para poder importar
 * en Express se utilizaba CommonJS, sin embargo en la actualidad ya se
 * puede utilizar los Modules, no obstante deben habilitarse en primer
 * lugar, para ello debemos ir al package.json y justo antes del author
 * y despues del objeto de scripts, colocamos la key "type" con un value
 * de "module" (también se puede habilitar "commonjs" en caso se requiera).
 * 
 * Tener en consideración que si colocamos todos los .get para acceder a
 * subpaginas en el index.js principal el archivo se hará muy pesado por
 * lo cual una opción altamente recomendable es realizar Routing que es 
 * pasar dichos .get a otros archivos y enlazarlos con el index principal
 * 
 * ########## Routing en Express ##########
 * Creamos una carpeta llamada "routes" en la raíz del proyecto y creamos
 * un archivo llamado "index.js" dentro, tener en cuenta que dentro del
 * archivo no podemos volver a instanciar haciendo uso de app para express
 * debido a que ya se está utilizando en el index.js principal ubicado en la
 * raíz y solamente se debe tener una instancia de app. Lo que si podemos
 * hacer es importar express para luego definir el router, de esta manera
 * en el app del index.js principal seguimos usando Express con las
 * extensiones establecidas en el Router a través del index.js de routes.
 * 
 * ########## ¿Qué es un Template Engine? y habilitando Pug ##########
 * Los Template Engines o también conocidos como motores de plantilla son
 * la V(Vista/View) del MVC(Modelo Vista Controlador/Model View Controller).
 * 
 * Permiten mostrar la parte visual (HTML) en una aplicación de Express,
 * debido a que el modelo retorna un objeto (o arreglo) de datos, un
 * template engine permitirá acceder a los resultados de una consulta y
 * mostrarlos en pantalla
 * 
 * ===== Características de un Template Engine =====
 * ~ Hay una gran variedad y cada uno tiene su propia sintaxis.
 * ~ Usualmente puedes escribir código JS dentro del HTML
 * ~ Sí tienes experiencia en angular, React o Vue, estos usualmente suelen
 *      reemplazar a los template engines en una aplicación
 * 
 * ===== Template Engines más comunes en Node - Express =====
 *  ~ PUG - (Antes Jade)
 *  ~ EJS - Embedded JavaScript
 *  ~ HBS - Handlebars.JS (Antes Mustache.JS)
 *  ~ REACT - Sintaxis similar al framework
 * 
 * ===== Instalación de Template Engine =====
 * ~ Se instalan vía npm como dependencia de producción:
 *      npm install pug
 * ~ Se habilita en el archivo principal (el index.js de la raíz):
 *      app.set('view engine', 'pug');
 * ~ Creamos una carpeta "views" en la raíz del proyecto
 * ~ Dentro creamos un archivo con el nombre de una URL establecida en el
 *      routing, como por ejemplo "nosotros" y le agregamos la extensión
 *      de .pug, quedando "nosotros.pug", recordar que en el routing el
 *      response del .get debe ser un render (res.render)
 * 
 * ===== Sintaxis de Pug =====
 * Tener en cuenta que en pug es muy importante la identación puesto que
 * no existen llaves para bloques de código así que aquel código que esté
 * más identado que otro significa que es su hijo y por lo tanto dentro
 * de un bloque de código inferior.
 * No existen apertura y cierre de etiquetas de los HTML
 *
 * ########## Pasar variables hacia las vistas ##########
 * Usualmente a través de un controlador se pasará una consulta a una BD,
 * o también se pasarán variables de forma condicional (Por ejemplo si el
 * usuario está autenticado o no), los datos que se pasarán a la vista van
 * dentro de un objeto que se pasa como argumento al response.render en 
 * conjunto con el nombre de la vista a la cual se está accediendo, para
 * más detalle revisar funciones router.get del archivo de routing.
 * 
 * Para utilizar alguna de las variables que se pasaron como argumento,
 * simplemente desde el archivo pug colocamos la etiqueta y un = asignandole
 * la variable, por ejemplo "p= viajes", generara una etiqueta P y como
 * valor le asignará lo que contenga la variable viajes. COMO OBSERVACIÓN
 * NO DEJAR ESPACIOS ENTRE LA ETIQUETA Y EL "=", DEBEN IR JUNTAS, de lo
 * contrario pug no lo detectará como asignación de variable.
 * Una sintáxis alternativa es de la siguiente forma "p #{viajes}", donde
 * también se deben respetar tal cual los espacios
 * 
 * ########## Creando un layout principal (Master Page) ##########
 * Nos evitará tener que repetir código constantemente, para un mejor
 * orden se recomienda ingresar a la carpeta "views" y dentro de ella
 * crear una carpeta con nombre "layout", dentro de esta carpeta irían
 * aquellos diseños que suelen repetirse como por ejemplo el header, navbar,
 * footer, entre otros.
 * 
 * Dentro de la carpeta generamos un archivo index.pug que será como la página 
 * principal, primero definimos la base que siempre será "estática", o sea,
 * que siempre tendrá el mismo contenido para todas las páginas, y luego
 * definimos el bloque de contenido "block contenido", esta directiva
 * se utiliza para establecer bloques de contenido reemplazables y que se
 * pueden modificar.
 * 
 * Para poder "halar" la plantilla de la master page, nos vamos al archivo
 * .pug donde se encuentra el contenido y jalamos la ruta haciendo uso de
 * extends, p. ej: "extends ./layout/index", luego colocamos "block contenido"
 * y haciendo salto de línea colocamos lo que se quiera renderizar de
 * contenido haciendo uso de la master page de inicio, tener en cuenta
 * que todo el código de contenido debe estar identado para que esté dentro
 * del bloque de la master page
 * 
 */