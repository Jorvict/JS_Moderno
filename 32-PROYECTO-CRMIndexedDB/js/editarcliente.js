(function(){

    let DB;

    document.addEventListener('DOMContentLoaded', () =>{

        conectarDB();

        // Verificar el ID de la URL
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parametrosURL.get('id');
        if(idCliente){

            // Colocamos un setTimeout debido al asincronismo de JS
            // El setTimeout lo estamos usando para dar tiempo a que la
            // conexión a la DB cargue correctamente
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 500);
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

            document.querySelector('#nombre').value = nombre;
            document.querySelector('#email').value = email;
            document.querySelector('#telefono').value = telefono;
            document.querySelector('#empresa').value = empresa;
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
    });
})();