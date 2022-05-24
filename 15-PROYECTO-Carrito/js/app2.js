// Agregar cursos al carrito
// listar los cursos agregados


// Eliminar cursos agregados
// stackear cursos agregados

// Variables
const listaCursos = document.querySelector('#lista-cursos');
const listaCompra = document.querySelector('#lista-carrito tbody');
const carritoContenedor = document.querySelector('#carrito');
let articulosCarrito = [];


// Event listeners
cargarEventListeners();
function cargarEventListeners(){
    
    listaCursos.addEventListener('click', agregarCurso);
    carritoContenedor.addEventListener('click', eliminarCurso)
    carritoContenedor.addEventListener('click', vaciarCarrito);
}


// Funciones
function agregarCurso(e){

    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){

        cursoSeleccionado = e.target.parentElement.parentElement;
        leerCurso(cursoSeleccionado);
    }
}

function leerCurso(cursoSeleccionado){

    const curso = {
        imagen: cursoSeleccionado.querySelector('img').src ,
        nombre: cursoSeleccionado.querySelector('h4').textContent,
        precio: cursoSeleccionado.querySelector('span').textContent,
        id: cursoSeleccionado.querySelector('.button-primary').getAttribute('data-id'),
        cantidad: 1
    }

    const existe = articulosCarrito.some( cursoIterado => cursoIterado.id === curso.id)

    if(existe){
        const new_articulosCarrito = articulosCarrito.map( cursoIterado => {
            if(cursoIterado.id === curso.id){
                cursoIterado.cantidad++;
                return cursoIterado;
            } else{
                return cursoIterado;
            }
        });
        
        articulosCarrito = [...new_articulosCarrito]

    } else{
        articulosCarrito = [...articulosCarrito, curso];
    }

    imprimirHTML();
}

function imprimirHTML(){

    limpiarHTML();

    articulosCarrito.forEach(curso => {
        console.log(curso);
        insertRow = document.createElement('tr');
        insertRow.innerHTML = `
        <td>
            <img src= ${curso.imagen} width = 100px>
        </td>
        <td>${curso.nombre}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td>
            <a href='#' class='borrar-curso' data-id='${curso.id}'> X </a>
        </td>
        `
        listaCompra.appendChild(insertRow);
        // console.log(insertRow);
    });
}

function limpiarHTML() {
    while(listaCompra.firstChild){
        listaCompra.removeChild(listaCompra.firstChild);
    }
}

function vaciarCarrito(e){
    e.preventDefault();

    // console.log(e.target.classList.contains)

    if(e.target.classList.contains('button')){
        articulosCarrito = [];
        imprimirHTML();
    }
}

function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){

        const cursoId = e.target.getAttribute('data-id');

        articulosCarrito = articulosCarrito.filter( curso => cursoId !== curso.id);
        // Lo que ejecuta el filter con arrow function
        // articulosCarrito = articulosCarrito.filter( curso => {
        //     if(cursoId !== curso.id){
        //         return curso;
        //     }
        // })

        imprimirHTML()
    }
}