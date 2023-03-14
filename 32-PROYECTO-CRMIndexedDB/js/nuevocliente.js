(function(){

    let DB;

    document.addEventListener('DOMContentLoaded', () =>{

        // Conectar a la DB
        conectarDB();
    });

    function conectarDB(){

        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function(){

            console.log('Hubo un error');
        };
        abrirConexion.onsuccess = function(){

            
        }
    }
})();