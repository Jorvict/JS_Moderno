// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');



// Se crea funcion donde se registran todos los events listeners para evitar que queden en la ventana global
cargarEventListeners();
function cargarEventListeners(){ 

    // Cuando agregas un curso presionando "Agregar al carrito" 
    listaCursos.addEventListener('click', agregarCurso)
}



// Funciones
function agregarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        console.log(e.target);
    }
}






// NOTAS:
// -    e.target es el elemento al que hacemos click