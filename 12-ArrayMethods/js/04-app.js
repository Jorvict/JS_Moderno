// .filter
/* Crea un nuevo arreglo en base a la condición que es
evaluada */

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado;

resultado = carrito.filter( producto => producto.precio > 400 ); // Filtra mayores a 400
resultado = carrito.filter( producto => producto.precio < 600); // Menores a 600
resultado = carrito.filter( producto => producto.nombre !== 'Audifonos') // Todos los productos que sean distinto a "audifonos"
resultado = carrito.filter( producto => producto.nombre === 'Audifonos') // Solo retorna "audifonos"

console.log(resultado)