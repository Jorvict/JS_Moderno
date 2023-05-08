/* 
    En desarrollo a veces el backend puede tardar en generar las APIs de
    las DB, en esos casos el front puede generar una API "dummy" con la cual
    poder usar de maqueta y avanzar el desarrollo del front para que una vez el
    back culmine el desarrollo de la API simplemente sustituyen los endpoints
*/
/* 
    json-server --watch db.json --port 4000 utilizar en la
    terminal con la ruta donde se encuentra el archivo para
    ejecutar el servidor json con la DB seleccionada en el
    peurto indicado, si se utiliza una ruta incorrecta
    json-server puede generar una db distinta
*/ 

let cliente = {
    mesa : '',
    hora : '',
    pedido : []
};

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', guardarCliente);

function guardarCliente(){

    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    // Revisar si hay campos vacios
    // Some verifica si al menos uno de los campos cumpla con la condición
    // En este caso si algunos de los campos está vacío retornará un true
    const camposVacios = [ mesa, hora].some( campo => campo === '');

    if(camposVacios){

        // Verificar sí ya hay una alerta
        const existeAlerta = document.querySelector('.invalid-feedback');

        if(!existeAlerta){
            
            const alerta = document.createElement('DIV');
            alerta.classList.add('invalid-feedback', 'd-block', 'text-center');
            alerta.textContent = 'Todos los campos son obligatorios';

            document.querySelector('.modal-body form').appendChild(alerta);
    
            setTimeout(() => {
                alerta.remove();
            }, 2000);

        }
        
        return;
    }

    
}