// .every
/* Todos los elementos de un arreglo deben de cumplir
la condición especificada para que el .every pueda
retornar un true */

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const resultado = carrito.every( producto => producto.precio < 1000);
console.log(resultado); // Retorna true, todos son < 1000


const resultado2 = carrito.every( producto => producto.precio < 500);
console.log(resultado2); // Retorna false, celular es > 500

/* Todos los elementos del array deben cumplir la 
condición al utilizar .every y en caso deseemos verificar
que al menos 1 cumpla la condición, en ese caso, debemos
utilizar .some*/

// .every => Todos deben cumplir la condición
// .some => Alguno debe cumplir la condición