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

if(indexedDB){

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

    // Método que se ejecuta de primero y verifica sí la DB existe
    //  # Sí no existe lo primero que haces es crear la DB
    //  # Sí existe entonces éste método no se ejecuta y pasa a onsuccess 
    //      que consiste en abrir la DB
    request.onupgradeneeded = () =>{

        db = request.result;
        console.log('Create' + db);
    }

    // Sí la DB se creó correctamente siginifica hasta el momento
    // todo ha ido bien por lo cual se ejecuta el método onsuccess
    request.onsuccess = () =>{
        
        db = request.result;
        console.log('OPEN' + db);
    }

    // Método que se ejecuta sí se ha presentado algún error
    request.onerror = (error) =>{

        console.log('Error' + error);
    }

}