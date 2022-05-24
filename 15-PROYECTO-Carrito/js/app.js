// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];



// Se crea funcion donde se registran todos los events listeners para evitar que queden en la ventana global
cargarEventListeners();
function cargarEventListeners(){ 

    // Cuando agregas un curso presionando "Agregar al carrito" 
    listaCursos.addEventListener('click', agregarCurso)

    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => { // Cuando es poco codigo se recomienda utilizar funcion anonima

        limpiarHTML(); // Eliminamos todo el HTML
    })
}



// Funciones
function agregarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso){

    // Visualizar la estructura del card para facilitar el traversing
    // console.log(curso);

    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    // Debuggear que el objeto esté extrayendo correctamente los datos desde el HTML
    // console.log(infoCurso); 

    
    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe){

        // Actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; // Retorna el objeto actualizado
            } else{
                return curso; // Retorna los objetos que no son los duplicados
            }
        });
        articulosCarrito = [...cursos]

    } else {

        // Agregamos el curso al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso]; // En este caso tambien sirve un .push debido a que se esta sobreescribiendo la variable del array original
        console.log(articulosCarrito);

    }

    carritoHTML();
}

// Muestra el carrito de compras en el HTML
function carritoHTML(){

    // Limpíar el HTML
    limpiarHTML();

    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr'); // Crea una nueva etiqueta tr (Fila) cada vez que se agrega un nuevo item al carrito
        
        // Se genera el siguiente condigo HTML en el elemento tr creado recientemente, es decir, agrega la etiqueta td dentro de la etiqueta tr (se inyecta como td hijos de tr)
        // innerHTML cambia el texto dentro de la etiqueta seleccionada, sí el texto escrito está en lenguaje HTML
        // entonces el navegador no lo renderizará como texto plano sino que lo mostrará como contenido html
        row.innerHTML = `
            <td>
                <img src = '${imagen}' width = 100px>
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href='#' class='borrar-curso' data-id='${curso.id}'> X </a>
            </td>
        `;

        // Agrega/Inyecta el HTML almacenado en la variable row y lo adiciona como un hijo de contenedorCarrito (que en realidad es el tbody)
        contenedorCarrito.appendChild(row);
    })

}

// Elimina un curso del carrito
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        // Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        
        // Iterar sobre el carrito y mostrar su HTML
        carritoHTML();
    }
}



// Elimina los cursos del tbody
function limpiarHTML(){
    // Forma lenta
    // contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild){ // Sí el elemento contenedorCarrito tiene al menos un elemento dentro (hijos), entonces el bucle se seguirá ejecutando. Y una vez esté vació, se detendrá el bucle
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}



// NOTAS:
// -    e.target es el elemento al que hacemos click