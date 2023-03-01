/*  Pasos para generar la base de datos con IndexedDB:

    # Crear la base de datos a través del objeto indexedDB y el método open()

    # Comprobar sí la base de datos existe o tiene que ser creada a través del
        método onupgradeneeded()

    # Crear el almacén de objetos con el método createObjectStore()
        En el caso de otras bases de datos no relacionadas como
        Firebase o MongoDB a estos almecenes los denominan como 
        "Colecciones". NOTA: Estos almacenes cumplen una función 
        similar a la de las tablas en SQL, que es almacenar objetos
        mientras que en SQL es almacenar registros

    # Una vez creado el almacén de objetos debemos escuchar los
        eventos de éxito y de error con los métodos onsuccess() y
        onerror() respectivamente

*/

// =================================================================

/* Crear una constante para almacenar el acceso a IndexedDB

    # Sí declaramos const indexedDB = indexedDB; dará error
        Debido a que indexedDB desciende del objeto window, como en
        éste caso la constante se llama exactamente igual, entonces
        debemos colocar el nombre del objeto padre (window).
        EJ: const indexedDB = window.indexedDB;

    # Sí por el contrario llamamos a la constante con otro nombre 
        distinto al de indexedDB entonces ya no sería necesario
        colocar el nombre del objeto padre.
        EJ: const indexDB = indexedDB;
*/
const indexedDB = window.indexedDB;
const form = document.getElementById('form');

if(indexedDB && form){

    // Crear variable para almacenar base de datos
    let db;

    // Realizar una petición
    /* NOTA: .open() es el método que nos permite acceder a la DB
        Dicho método recibe 2 parámetros:

        # El primer parámetro es el nombre de la DB a la que 
            queremos acceder

        # El segundo parámetro es la versión de la DB, tiene que ser
            un número entero, no se puede aplicar decimales ni
            signos de punto ("1,0", "1.0"). Sí nosotros creamos
            distintas versiones lo que hace es crear distintas DB
    */
    const request = indexedDB.open('tasksList', 1);

    /* Una vez que hemos hecho la petición lo que vamos a utilizar
        son los métodos asíncronos que nos permite utilizar la API
        de indexedDB
    */

    /* Método que se ejecuta de primero y verifica sí la DB existe
        # Sí no existe lo primero que haces es crear la DB
        # Sí existe entonces éste método no se ejecuta y pasa a onsuccess 
          que consiste en abrir la DB
        
        NOTA: El onupgradeneeded es un evento que se dispara cuando 
            se abre una base de datos en IndexedDB y su versión es 
            mayor a la versión anteriormente abierta. En este evento 
            se realiza la configuración de la estructura de la base 
            de datos y se pueden crear o modificar los object 
            stores y los indices que la componen.
    */
    request.onupgradeneeded = () =>{

        db = request.result;
        console.log(`DB "${db.name}" created`);

        // Crear Object Store, le pasamos como argumento su nombre
        // Sí colocamos una , habilitamos un segundo argumento
        //     en el que podemos definir sí el OS contará con autoincrement 
        const objectStore = db.createObjectStore('tasks', {
            // autoIncrement: true

            // Que propiedad de nuestro objeto será la clave única (La llave/key)
            // Debe ser un valor irrepetible, EJ: en OS de personas deben ser el DNI
            keyPath: 'taskTitle'
        });
    }

    // Método que se ejecuta sí se ha presentado algún error
    request.onerror = (error) =>{

        console.log('Error: ' + error.target.error.message);
    }

    /*  Sí la DB se creó correctamente significa hasta el momento
        todo ha ido bien por lo cual se ejecuta el método onsuccess

        NOTA: El onsucess se utiliza para indicar que la base de datos 
            se ha abierto correctamente y está lista para ser 
            utilizada. Este evento se dispara una vez que se ha 
            establecido la conexión con la base de datos, y se 
            utiliza comúnmente para iniciar transacciones y acceder 
            a los object stores.

        NOTA 2: El onsuccess solamente se ejecuta a la hora de acceder
            a la DB por primera vez, una vez que la DB está abierta se
            podrán crear transacciones de lectura y escritura, y como
            la DB ya está abierta no es necesario mas acciones para
            abrirla por lo que el evento onsuccess no se ejecutará de
            nuevo a no ser que deseemos abrir la DB nuevamente.
            (Tener en cuenta que sí se volverá a ejecutar cuando
            refresquemos la página, no es como el onupgradeneeded que
            puede que no se ejecute incluso al refrescar la página
            ya que como se mencionó anteriormente, solamente se ejecuta
            cuando se actualiza la versión de la DB o cuando no existe
            la DB y es necesario crearla)
    */
    request.onsuccess = () =>{
        
        db = request.result;
        console.log(`DB "${db.name}" opened`);
        console.log(db);

    }

    // Evento de cuando se hace submit al botón del formulario
    form.addEventListener('submit', (e) => {

        e.preventDefault();

        // Generar objeto de data que se va a almacenar en el objectStore
        const data = {

            //e.target.task hace referencia al input text del formulario
            taskTitle: e.target.task.value, 
            taskPriority: e.target.priority.value,
        }
        addData(data);
    });

    // Función encargada de registrar el objeto en la DB
    /*  NOTA: Para registrar datos en la DB hay que fragmentar el
            proceso en 3 pasos, lo primero es que todas las operaciones
            sobre una DB indexada funcionan a través de lo que se 
            denomina como una "TRANSACCIÓN", estas reciben 2 parámetros,
            el almacén sobre el que vamos a trabajar y de qúe modo 
            vamos a trabajar, o sea sí solo vamos a leer los datos
            (readonly) o sí vamos a modificar datos (readwrite)
    */
    const addData = (data) => {

        // Generamos la transacción
        // Aquí específicamos sobre cual OS vamos a hacer la transacción
        // y cual es el modo
        const transaction = db.transaction(['tasks'], 'readwrite');

        // Ahora necesitamos abrir el almacén de datos donde trabajaremos
        // Aquí hacemos la transacción realmente
        const objectStore = transaction.objectStore('tasks')

        // Una vez abierto el almacén solo debemos indicar que se
        // añadan los datos usando el método .add y le pasamos como
        // parametro el objeto a agregar
        const request = objectStore.add(data);
    }
}