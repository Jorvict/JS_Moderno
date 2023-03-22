let DB;
let objCurso;
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const carrito = document.querySelector('#carrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');


inicializarEventListeners();
function inicializarEventListeners(){

    document.addEventListener('DOMContentLoaded', crearDB);
    listaCursos.addEventListener('click', seleccionarCurso);
    carrito.addEventListener('click', eliminarCurso);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
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
        objectStore.createIndex('id', 'id', { unique: false });   
    }
}

function seleccionarCurso(e){

    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        
        leerDataCurso(e.target.parentElement.parentElement);
    }
}


function leerDataCurso(cursoSeleccionado){

    objCurso = {
        imagen: cursoSeleccionado.querySelector('img').src,
        nombre: cursoSeleccionado.querySelector('h4').textContent,
        precio: cursoSeleccionado.querySelector('.precio span').textContent,
        cantidad: '',
        id: Number(cursoSeleccionado.querySelector('a').getAttribute('data-id')),
    }

    validarCurso(objCurso);
}

function validarCurso(curso){

    const { id } = curso;

    const nuevaPromesa = new Promise((resolve, reject) =>{

        const transaction = DB.transaction(['cursos'], 'readonly');
        const objectStore = transaction.objectStore('cursos');
        const cursos = objectStore.openCursor();

        cursos.onsuccess = function(e){

            const cursor = e.target.result;
            
            if(cursor){
    
                if(Number(id) === cursor.value.id){
                    resolve(true);
                    
                } else {
                    cursor.continue();
                }
            } else{

                resolve(false);
            }
        }
        cursos.onerror = (e) =>{
            console.log('Error:', e.target.error);
        }
    });

    nuevaPromesa
        .then(resultado =>{
            agregarCurso(resultado);
        })

    return nuevaPromesa;
}

function agregarCurso(cursoExiste){

    if(cursoExiste){

        const transaction = DB.transaction(['cursos'], 'readwrite');
        const objectStore = transaction.objectStore('cursos');
        let request = objectStore.get(objCurso.id);

        request.onsuccess = (e) =>{

            let curso = e.target.result;
            curso.cantidad += 1;
            objectStore.put(curso);

            transaction.oncomplete = function(){

                // console.log('Editado correctamente'); // Imprimir mensaje
            }
            transaction.onerror = function(error){
                
                console.log(error);
            }
        }

    } else{
        objCurso.cantidad = 1;

        const transaction = DB.transaction(['cursos'], 'readwrite');
        const objectStore = transaction.objectStore('cursos');
        objectStore.add(objCurso);

        transaction.onerror = function(error){
            console.log('Hubo un error en la transacción', error.target.error);
        }
        transaction.oncomplete = function(){
            // console.log('Se agregó curso a base de datos'); Imprimir mensaje
        }
    }

    listarCarrito();
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

            cursor.continue();
        }
    }
}

function eliminarCurso(e){

    if( e.target.classList.contains('borrar-curso')){

        const idCurso = Number(e.target.dataset.id);
       
        const transaction = DB.transaction(['cursos'], 'readwrite');
        const objectStore = transaction.objectStore('cursos');
        objectStore.delete(idCurso);

        transaction.oncomplete = () => {

            listarCarrito();
        }
        transaction.onerror = () => {

            console.log('Hubo un error');
        }
    }
}

function vaciarCarrito(){

    const transaction = DB.transaction(['cursos'], 'readwrite');
    const objectStore = transaction.objectStore('cursos');
    objectStore.clear();

    transaction.oncomplete = () =>{
        
        console.log('Se vació el carrito');
    }
    transaction.onerror = () =>{

        console.log('Hubo un error al vaciar el carrito');
    }

    listarCarrito();
}

function limpiarHTML(){

    while(contenedorCarrito.firstChild){

        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}