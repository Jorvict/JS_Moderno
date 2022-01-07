// Spread Operator

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Spread operator con arreglo de índices
const meses2 = ['Nuevo mes', ...meses, 'Agosto']; // No modifica el array original (meses)
console.log(meses2);

meses.push('Agosto'); // Si modifica el array original
console.log(meses)

// No modificar el array original es una de las bases de la programación funcional
/* Recordar el que el orden en el cual se ingresan los datos
    al utilizar el spread operator, influirá en el orden
    de como serán impresos los datos 
*/

// Spread operator con arreglo de índices
const producto = {nombre: 'Disco Duro', precio: 300};

const carrito2 = [...carrito, producto];

console.log(carrito2);

/* Si visualizas un error en la consola que menciona que
el objeto no es iterable, lo mas probable es que sea debido
a que le has asignado un spread operator a un objeto */