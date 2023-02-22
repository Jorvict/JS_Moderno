// Tendrá el mismo valor asignado que const db = e.target.result;
// La diferencia es que ahora está en el scope global para ser
// usado en las funciones
let DB;

document .addEventListener('DOMContentLoaded', () => {

    // Una vez el DOM esté listo, ejecutamos esta función
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);
});

function crmDB(){

    // Crear base de datos versión 1.0.
    // El primer argumento será el nombre de la DB
    // El segundo argumento será la versión de la DB (Tener en cuenta que no acepta decimales)
    let crmDB = window.indexedDB.open('crm', 1);

    // Sí hay un error
    crmDB.onerror = function(){
        console.log('Hubo un error a la hora de crear la BD');
    }

    // Sí se creó bien
    crmDB.onsuccess = function(){
        console.log('Base de datos creada!');

        DB = crmDB.result; 
    }

    // Configuración de la base de datos
    // Se ejecuta una sola vez que es cuando se crea la DB
    crmDB.onupgradeneeded = function(e){
        
        // console.log(e.target.result); // Al generarse la DB, se imprimirá en consola dicha DB
    
        const db = e.target.result;

        // Al crear el objectStore se usa el método createObjectStore
        // El primer argumento es la DB donde se almacenará ese objectStore
        // El segundo argumento es un objeto de configuración
        const objectStore = db.createObjectStore('crm', {

            keyPath: 'crm',
            autoIncrement: true
        });

        // Definir las columnas
        /* El primer argumento es el nombre de la columna */
        /* El segundo argumento es el keyPath, que es como vamos 
        a hacer referencia para consultar la columna de "nombre"*/
        /* El tercer argumento es alguna opción adicional, la 
        configuración unique es para definir sí la columna 
        debe ser de valores únicos (no repetidos)*/
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });
    
        console.log('Columnas creadas');
    }

}

function crearCliente(){

    /*  Tener en cuenta que para poder trabajar con las diferentes
        operaciones de una base de datos en IndexedDB utilizas lo
        que se conoce como transacciones. Una transacción se
        refiere a cuando se completa correctamente unos pasos de 
        verificación / validación (Examinar saldo, retirar dinero, etc)
    */

    let transaction = DB.transaction(['crm'], 'readwrite'); // Tambien existe readonly

    transaction.oncomplete = function(){
        console.log('Transacción completada');
    }

    transaction.onerror = function(){
        console.log('Hubo un error en la trasacción');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 123456789,
        nombre: 'Jorvict',
        email: 'correo@correo.com'
    }

    const peticion = objectStore.add(nuevoCliente);

    console.log(peticion);
}