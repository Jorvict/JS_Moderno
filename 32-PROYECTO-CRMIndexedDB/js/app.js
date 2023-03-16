(function(){

    let DB;
    const listaClientes = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', () =>{

        crearDB();

        listaClientes.addEventListener('click', eliminarRegistro);
    });

    function eliminarRegistro(e){

        if( e.target.classList.contains('eliminar') ){

            const idEliminar = Number(e.target.dataset.cliente);
            
            const confirmar = confirm('¿Deseas eliminar este cliente?'); // Retorna true o false
            // NOTA: Investigar sobre sweet alert
            console.log(confirmar)

            if(confirmar){

                const transaction = DB.transaction(['clientes'], 'readwrite');
                const objectStore = transaction.objectStore('clientes');

                objectStore.delete(idEliminar);

                transaction.oncomplete = function(){
                    
                    e.target.parentElement.parentElement.remove();
                }
                transaction.onerror = function(){
                    console.log('hubo error')
                }
            }
        }
    }


    // Crea la DB de IndexDB
    function crearDB(){

        const crearDB = window.indexedDB.open('crm', 1);

        crearDB.onerror = function(){

            console.log('Hubo un error');
        };
        crearDB.onsuccess = function(){

            DB = crearDB.result;
            listarClientes();
        };
        crearDB.onupgradeneeded = function(e){

            const db = e.target.result;

            const objectStore = db.createObjectStore('clientes', { keyPath: 'id', autoIncrement: true });
            objectStore.createIndex('nombre', 'nombre', { unique: false });
            objectStore.createIndex('email', 'email', { unique: true });
            objectStore.createIndex('telefono', 'telefono', { unique: false });
            objectStore.createIndex('empresa', 'empresa', { unique: false });
            objectStore.createIndex('id', 'id', { unique: true });

            console.log('DB lista y creada')
        }
    }

    function listarClientes(){

        // Leer el contenido de la DB
        const objectStore = DB.transaction('clientes').objectStore('clientes');

        objectStore.openCursor().onsuccess = (e) =>{

            const cursor = e.target.result;

            if(cursor){

                const {nombre, email, telefono, empresa, id } = cursor.value;
                listaClientes.innerHTML += 
                `<tr>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                        <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                        <p class="text-gray-700">${telefono}</p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                        <p class="text-gray-600">${empresa}</p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                        <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                        <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                    </td>
                </tr>`;

                cursor.continue();
            } else{
                console.log('No hay mas registros...');
            }
        }
    }
})(); // IFI para que las funciones solo sean locales