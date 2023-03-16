(function(){

    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () =>{

        // Conectar a la DB
        conectarDB();
        formulario.addEventListener('submit', validarCliente);

    });



    function validarCliente(e){

        e.preventDefault();
        
        // Leer todos los inputs
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;
    
        if( nombre === '' || email === '' || telefono === '' || empresa === ''){

            // console.error('Error');
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            
            return;
        }

        // Crear un objeto con la información
        const cliente = {
            nombre,
            email,
            telefono,
            empresa,
            id: Date.now()
        }

        crearNuevoCliente(cliente);
    }

    function crearNuevoCliente(cliente){
        
        const transaction = DB.transaction(['clientes'], 'readwrite');
        const objectStore = transaction.objectStore('clientes');
        objectStore.add(cliente);

        transaction.onerror = function(){
            imprimirAlerta('Hubo un error', 'error');
        };
        transaction.oncomplete = function(){
            imprimirAlerta('El cliente se agregó correctamente', 'success');
            formulario.reset();

            // Irnos hacia otro documento HTML
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        }
    }

})();