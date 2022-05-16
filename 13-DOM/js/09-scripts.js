// Eliminar elementos del DOM
const primerEnlace = document.querySelector('a');
primerEnlace.remove(); // Eliminarlo por sí mismo
console.log(primerEnlace); 

// Eliminar desde el padre
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2]); // Se le pasa la referencia del hijo que vamos a eliminar