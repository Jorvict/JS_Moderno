let DB;
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');



inicializarEventListeners();
function inicializarEventListeners(){

    document.addEventListener('DOMContentLoaded', crearDB);
    listaCursos.addEventListener('click', seleccionarCurso);
}

function crearDB(){

    const crearDB = window.indexedDB.open('Cursos', 1);

    crearDB.onerror = () => {

        console.log('Hubo un error');
    }
    crearDB.onsuccess  = () => {

        DB = crearDB.result;
        listarCarrito();
    }
    crearDB.onupgradeneeded = (e) => {
        
        const db = e.target.result; // Se hace referencia a la db

        const objectStore = db.createObjectStore('cursos', { keyPath: 'id', autoIncrement: true});
        objectStore.createIndex('imagen', 'imagen', { unique: false });
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('precio', 'precio', { unique: false });
        objectStore.createIndex('cantidad', 'cantidad', { unique: false });
        objectStore.createIndex('id', 'id', { unique: true });   
    }
}

function seleccionarCurso(e){

    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        
        leerDataCurso(e.target.parentElement.parentElement);
    }
}


function leerDataCurso(cursoSeleccionado){

    const objCurso = {
        imagen: cursoSeleccionado.querySelector('img').src,
        nombre: cursoSeleccionado.querySelector('h4').textContent,
        precio: cursoSeleccionado.querySelector('.precio span').textContent,
        cantidad: 1,
        id: Date.now(),
    }

    agregarCurso(objCurso);
}

function agregarCurso(curso){

    const transaction = DB.transaction(['cursos'], 'readwrite');
    const objectStore = transaction.objectStore('cursos');
    objectStore.add(curso);

    transaction.onerror = function(){
        console.log('Hubo un error en la transacción');
    }
    transaction.oncomplete = function(){
        console.log('Se agregó curso a base de datos');
        listarCarrito()
    }
}

function listarCarrito(){

    limpiarHTML();
    const objectStore = DB.transaction('cursos').objectStore('cursos');

    objectStore.openCursor().onsuccess = (e) =>{

        const cursor = e.target.result;

        if(cursor){

            const { imagen, nombre, precio, cantidad, id } = cursor.value;
            contenedorCarrito.innerHTML +=
            `<tr>
                <td>
                    <img src = '${imagen}' width = 100px>
                </td>
                <td>${nombre}</td>
                <td>${precio}</td>
                <td>${cantidad}</td>
                <td>
                    <a href='#' class='borrar-curso' data-id='${id}'> X </a>
                </td>
            </tr>`;

            cursor.continue()
        } else{

            console.log('No hay más registros')
        }
    }
}

function limpiarHTML(){

    while(contenedorCarrito.firstChild){

        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}