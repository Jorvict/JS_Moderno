//Agregar al carrito

// Variables
const listaCursos = document.querySelector('#lista-cursos');
const tablaCarrito = document.querySelector('#lista-carrito tbody');
let carritoProductos = [];

// Eventos
cargarEventsListeners();

function cargarEventsListeners(){
    listaCursos.addEventListener('click', agregarCurso);
}



// Funciones
function agregarCurso(e){

    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){

        const cursoSeleccionado = e.target.parentElement.parentElement;
        procesarDatos(cursoSeleccionado);
    }
}

function procesarDatos(curso){

    const dataCursoSeleccionado = {
        id : curso.querySelector('a').getAttribute('data-id'),
        nombre: curso.querySelector('.info-card h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        imagen: curso.querySelector('img').src,
        cantidad: 1,
    }


    const cursoExiste = carritoProductos.some( curso => curso.id === dataCursoSeleccionado.id);
    console.log(cursoExiste);

    carritoProductos= [...carritoProductos, dataCursoSeleccionado];

    renderizarHTML();
}

function renderizarHTML(){

    limpiarHTML();

    carritoProductos.forEach( curso => {

        const row = document.createElement('tr');
        row.innerHTML = `
            <td> <img src=${curso.imagen} width=100px> </td>
            <td> ${curso.nombre} </td>
            <td> ${curso.precio} </td>
            <td> ${curso.cantidad} </td>
            <td> <a href='#'  class='borrar-curso' data-id= ${curso.id}> X </a> </td>
        `
        
        tablaCarrito.appendChild(row);
    })

}

function limpiarHTML(){

    while(tablaCarrito.firstChild){
        tablaCarrito.removeChild(tablaCarrito.firstChild)
    }
}