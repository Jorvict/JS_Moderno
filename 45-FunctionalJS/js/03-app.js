// Separar los datos de funciones
// Higher order functions son funciones que toman o retornan
// una función como argumento, la mayoría de array methods
// son higers order functions

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

// Filtrar productos con precio mayor a 400 SIN higher order functions
const resultado = carrito.filter( producto => {
    return producto.precio > 400;
});
console.log( resultado );



// Filtrar productos con precio mayor a 400 CON higher order functions
const mayor400 = producto => {
    return producto.precio > 400;
}
const resultadoHOF = carrito.filter(mayor400); 
console.log(resultadoHOF);

// Validamos que no se ha modificado el arreglo original
console.log(carrito);