// Añadir nuevos elementos al fin o Inicio de un array
const meses = ['Enero', 'Febrero', 'Marzo'];
// meses[3] = 'Abril';

// Agregar un valor al final del arreglo
// meses.push('Abril');
// meses.push('Mayo');

// console.table(meses)

// Ejemplo carrito de compra
const carrito = []; // Se inicia con un array vacío

// Definir un producto - Los arreglos pueden almacenar objetos
const producto = {
    nombre: 'Monitor de 32 pulgadas',
    precio: 400
}
const producto2 ={
    nombre: 'Celular',
    precio: 800
}

const producto3 ={
    nombre: 'Teclado',
    precio: 50
}

carrito.push(producto);
carrito.push(producto2);

// Agregar un valor al inicio del array
carrito.unshift(producto3);

console.table(carrito);