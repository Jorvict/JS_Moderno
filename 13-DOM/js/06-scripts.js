// Modificar textos e imagenes con JS
const encabezado = document.querySelector('.contenido-hero h1');
// const encabezado = document.querySelector('.contenido-hero h1').textContent; Se le conoce como "Chaining"
console.log(encabezado);

// console.log(encabezado.innerText); // No va a encontrar los elementos que estén oculto con CSS utilizando el visibility: hidden 
// console.log(encabezado.textContent); // Si los encuentra aunque estén ocultos
// console.log(encabezado.innerHTML); // Se trae el HTML del elemento seleccionado

// const nuevoHeading = 'Nuevo Heading';
// document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer3.jpg';


const headerCard = document.querySelector('.card .info .titulo');
headerCard.innerHTML = 'Festival de música Underground';