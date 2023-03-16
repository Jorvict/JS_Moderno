(function(){

    let idCliente;

    const inputNombre = document.querySelector('#nombre');
    const inputEmail = document.querySelector('#email');
    const inputTelefono = document.querySelector('#telefono');
    const inputEmpresa = document.querySelector('#empresa');

    const formulario = document.querySelector('#formulario');


    document.addEventListener('DOMContentLoaded', () =>{

        conectarDB();

        // Actualiza el registro
        formulario.addEventListener('submit', actualizarCliente);

        // Verificar el ID de la URL
        const parametrosURL = new URLSearchParams(window.location.search);
        idCliente = parametrosURL.get('id');
        if(idCliente){

            // Colocamos un setTimeout debido al asincronismo de JS
            // El setTimeout lo estamos usando para dar tiempo a que la
            // conexión a la DB cargue correctamente
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 500);
        }
    });

    function actualizarCliente(e){

        e.preventDefault();

        if( inputNombre.value === '' || inputEmail.value === '' || inputEmpresa.value === '' || inputTelefono.value === '' ){

            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        // Actualizar cliente
        const clienteActualizado = {
            nombre: inputNombre.value,
            email: inputEmail.value,
            empresa: inputEmpresa.value,
            telefono: inputTelefono.value,
            id: Number(idCliente)
        }

        const transaction = DB.transaction(['clientes'], 'readwrite');
        const objectStoreClientes = transaction.objectStore('clientes');

        objectStoreClientes.put(clienteActualizado);

        transaction.oncomplete = function(){

            imprimirAlerta('Editado correctamente');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        }
        transaction.onerror = function(error){
            console.log(error)
            imprimirAlerta('Hubo error', 'error')
        }
    }

    function obtenerCliente(idCliente){
            
        const transaction = DB.transaction(['clientes'], 'readwrite');
        const objectStore = transaction.objectStore('clientes');

        const cliente = objectStore.openCursor();
        cliente.onsuccess = function(e){

            const cursor = e.target.result;

            if(cursor){

                if(Number(idCliente) === cursor.value.id){
                    
                    llenarFormulario(cursor.value);
                }
                cursor.continue();
            }
        }
    }

    function llenarFormulario(datosCliente){

        const {nombre, email, telefono, empresa}  = datosCliente;

        inputNombre.value = nombre;
        inputEmail.value = email;
        inputTelefono.value = telefono;
        inputEmpresa.value = empresa;
    }

    function conectarDB(){

        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function(){

            console.log('Hubo un error');
        };
        abrirConexion.onsuccess = function(){

            DB = abrirConexion.result;
        }
    }
})();