// Variables
const listaCursos = document.querySelector('#lista-cursos');
const tablaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

// Eventos
inicializarEventsListeners();
function inicializarEventsListeners(){

    listaCursos.addEventListener('click', seleccionarCurso);
    tablaCarrito.addEventListener('click', eliminarCurso);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

// Funciones
function seleccionarCurso(e){

    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){

        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

function leerDatosCurso(curso){

    const dataCursoSeleccionado = {

        idCurso: curso.querySelector('.agregar-carrito').getAttribute('data-id'),
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('.info-card h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        cantidad: 1
    }

    agregarCurso(dataCursoSeleccionado);
}

function agregarCurso(cursoImportado){
    const cursoImport = cursoImportado;
    const cursoImportExiste = articulosCarrito.some( curso => curso.idCurso === cursoImport.idCurso )

    if(cursoImportExiste){

        let carritoTemp = articulosCarrito.map(curso => {

            if(curso.idCurso === cursoImport.idCurso){

                curso.cantidad++;
                return curso;
            } else{

                return curso;
            }
        });

        articulosCarrito = [...carritoTemp];
    } else{
        articulosCarrito = [...articulosCarrito, cursoImport];
    }

    renderizarHTML();
}

function eliminarCurso(e){

    e.preventDefault();

    if(e.target.classList.contains("borrar-curso")){
        
        const idCursoEliminado = e.target.getAttribute('data-id');
        const articulosConservados= articulosCarrito.filter(curso => {

            if(curso.idCurso !== idCursoEliminado){
                return curso;
            } 
        });

        articulosCarrito = [...articulosConservados];
        renderizarHTML();
    }
}

function vaciarCarrito(){

    articulosCarrito = [];
    renderizarHTML();
}

function renderizarHTML(){

    limpiarHTML();

    articulosCarrito.forEach( curso =>{
        const impresionCursoIterado = document.createElement('tr');

        impresionCursoIterado.innerHTML = `
        <td> <img src= ${curso.imagen} width= 100px"> </td>
        <td> ${curso.titulo} </td>
        <td> ${curso.precio} </td>
        <td> ${curso.cantidad} </td>
        <td> <a href="#" class= "borrar-curso" data-id=${curso.idCurso}> X </a> </td>
        `
        tablaCarrito.appendChild(impresionCursoIterado);
    })
}

function limpiarHTML(){

    while(tablaCarrito.firstChild){
        tablaCarrito.removeChild(tablaCarrito.firstChild);
    }
}