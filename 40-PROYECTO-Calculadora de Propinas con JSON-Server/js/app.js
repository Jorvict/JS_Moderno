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
    puerto indicado, si se utiliza una ruta incorrecta
    json-server puede generar una db distinta
*/ 

let cliente = {
    mesa : '',
    hora : '',
    pedido : []
};

const categorias = {
    1 : 'Comida',
    2 : 'Bebidas',
    3 : 'Postres'
}

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

    // Asignar datos del formulario a cliente
    /*
        El objeto de cliente va a quedar vacío sí asignamos la copia 
        del objeto original de último puesto, ya que se van a sobreescribir
        los valores de mesa y hora obtenidos de los inputs con los valores
        del objeto copiado, para evitar esto se sugiere que el objeto a copiar
        vaya de primero en éste caso, así se traera la copia del objeto vacío
        y se sobreescribiran los values vacíos con el valor de los inputs.
        Sí no obtenemos la copia del objeto original lo que va a suceder es
        que el nuevo objeto de cliente se va a sobreescribir sin la referencia
        del array de pedido.     
    */ 
    cliente = { ...cliente, mesa, hora };


    // Ocultar Modal
    const modalformulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalformulario);
    modalBootstrap.hide();


    // Mostrar las secciones
    mostrarSecciones();

    // Obtener Platillos de la API de JSON-Server
    obtenerPlatillos();
}

function mostrarSecciones(){

    const seccionesOcultas = document.querySelectorAll('.d-none');

    seccionesOcultas.forEach(seccion => {
        
        // Recordar que al usar el classList.remove no se escribe como selector
        // sino que se escribe la clase directamente (sin el . inicial) 
        seccion.classList.remove('d-none'); 
    });
}

function obtenerPlatillos(){

    const url = 'http://localhost:4000/platillos';

    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado => mostrarPlatillos(resultado) )
        .catch( error => console.log(error))
}

function mostrarPlatillos(platillos){

    const contenido = document.querySelector('#platillos .contenido');

    platillos.forEach( platillo => {

        const { nombre, precio, categoria, id } = platillo

        const row = document.createElement('DIV');
        row.classList.add('row', 'py-3', 'border-top');

        const nombreDiv = document.createElement('DIV');
        nombreDiv.classList.add('col-md-4'); 
        nombreDiv.textContent = nombre;

        const precioDiv = document.createElement('DIV');
        precioDiv.classList.add('col-md-3', 'fw-bold'); // font weight bold
        precioDiv.textContent = `$${precio}`;

        const categoriaDiv = document.createElement('DIV');
        categoriaDiv.classList.add('col-md-3'); 
        categoriaDiv.textContent = categorias[categoria];

        const inputCantidad = document.createElement('INPUT');
        inputCantidad.type = 'number';
        inputCantidad.min = 0;
        inputCantidad.value = 0;
        inputCantidad.id = `producto-${id}`;
        inputCantidad.classList.add('form-control');
        
        // Función que detecta la cantidad y el platillo que se está agregando
        inputCantidad.onchange = () =>{
            const cantidad = parseInt( inputCantidad.value );
            agregarPlatillo({...platillo, cantidad});
        }
        
        const agregarDiv = document.createElement('DIV');
        agregarDiv.classList.add('col-md-2');
        agregarDiv.appendChild(inputCantidad);

        row.appendChild(nombreDiv);
        row.appendChild(precioDiv);
        row.appendChild(categoriaDiv);
        row.appendChild(agregarDiv);


        contenido.appendChild(row);

        /* 
            NOTA: col-md-x se utiliza para estructurar según el grid de 
            bootstrap, los col en total deben sumar 12 que se refiere al 100%
            del tamaño total del elemento padre, tener en cuenta que el
            col-md-x se aplica a los DIVs y no a otros elementos como por
            ejemplo aplicarlo directamente a un input
        */
    })
}

function agregarPlatillo(producto){

    // Extraer el pedido actual en una variable temporal al hacer destructuring
    let { pedido } = cliente;

    // Revisar que la cantidad sea mayor a 0
    if(producto.cantidad > 0){

        // Comprueba sí el elemento clickeado ya existe en el array
        if(pedido.some( articulo => articulo.id === producto.id )){

            // El artículo ya existe, se procede a actualizar la cantidad
            const pedidoActualizado = pedido.map( articulo => {

                if( articulo.id === producto.id ){
                    articulo.cantidad = producto.cantidad;
                }
                return articulo;
            });

            // Se asigna el nuevo array con la cantidad actualizada al
            // objeto global de cliente.pedido
            cliente.pedido = [...pedidoActualizado];
        
        } else {

        // El artículo no existe, lo agregamos al array del pedido
        /*
            Lo que se realiza a continuación es que el array de pedido
            que es una propiedad del objeto global cliente se sobreescribe 
            con una copia extraida al momento de declarar el destructuring 
            y se le adiciona el producto sobre el cual se hizo click en la
            interfaz de la página, es decir el platillo/item con el que
            se está interactuando. Cabe mencionar que sí modificamos la
            variable pedido obtenida del destructuring no va a afectar al
            objeto global pedido que es propieda de cliente.
        */
            cliente.pedido = [...pedido, producto];
        }

        
    } else{
        
        // Eliminar elementos cuando la cantidad es 0
        // El filter retornará aquellos que son diferentes al que estamos eliminando
        const resultado = pedido.filter( articulo => articulo.id !== producto.id );
        cliente.pedido = [...resultado];
    }

}