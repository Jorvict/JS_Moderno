// Variables
const carrito = document.querySelector('#carrito')
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];


// Events listeners
cargarEventsListeners();

function cargarEventsListeners(){

    listaCursos.addEventListener('click', agregarCurso);

    carrito.addEventListener('click', eliminarCurso);

    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}


// Funciones
function agregarCurso(e) {

    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito'))
    {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

function eliminarCurso(e){

    if(e.target.classList.contains('borrar-curso')){
        cursoId = e.target.getAttribute('data-id');

        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)

        imprimirHTML();
    }

}

function vaciarCarrito(){

    articulosCarrito = [];
    limpiarHTML();
}

function leerDatosCurso(cursoSeleccionado){

    const dataCursoSeleccionado = {
        imagen: cursoSeleccionado.querySelector('img').src,
        nombre: cursoSeleccionado.querySelector('.info-card h4').textContent,
        precio: cursoSeleccionado.querySelector('.precio span').textContent,
        id: cursoSeleccionado.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    const cursoExiste = articulosCarrito.some( curso => curso.id === dataCursoSeleccionado.id)

    if (cursoExiste){
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === dataCursoSeleccionado.id){
                curso.cantidad++;
                return curso;
            } else{
                return curso;
            }
        })

        articulosCarrito = [...cursos];
    } else{
        articulosCarrito = [...articulosCarrito, dataCursoSeleccionado];
    }

    console.log(articulosCarrito);

    imprimirHTML();
}

function imprimirHTML(){

    limpiarHTML();
    
    // Por cada elemento en el array de articulosCarrito se ejecuta el siguiente bucle
    articulosCarrito.forEach( curso => {

        const {imagen, nombre, precio, cantidad, id} = curso
        const row = document.createElement('tr');
        row.innerHTML = `

            <td>
                <img src='${imagen}' width= 100px>
            </td>
            <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href= "#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        contenedorCarrito.appendChild(row);
    });

}

function limpiarHTML(){

    // Usar de preferencia firstElementChild ya que este verifica nodos de elementos, a diferencia de firstchild que tiene en consideracion 
    // todo tipo de todos, como de texto, de elementos o incluso de comentarios, similar a lo que sucede 
    // con parentElement y parentNode, siendo recomendable utilizar parentElement. O también caso similar a
    // children o childNodes siendo mas recomendable utilizar children,. Sin embargo sí queremos vaciar o limpiar un
    // elemento, según la práctica desarrollada es mas recomendable utilizar firstChild

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}