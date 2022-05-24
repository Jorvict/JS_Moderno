// Agregar cursos al carrito
// listar los cursos agregados
// Eliminar cursos agregados
// stackear cursos agregados

// Variables
const listaCursos = document.querySelector('#lista-cursos');
const listaCompra = document.querySelector('#lista-carrito tbody')
let articulosCarrito = [];


listaCursos.addEventListener('click', agregarCurso);



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
        cantidad: 1
    }

    articulosCarrito = [...articulosCarrito, curso];

    imprimirHTML(articulosCarrito);
}

function imprimirHTML(articulosCarrito){

    limpiarHTML();

    articulosCarrito.forEach(curso => {
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