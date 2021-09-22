// Arrow Functions en un forEach y un map

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500}, //Posición 0
    {nombre: 'Televisión', precio: 100}, //Posición 1
    {nombre: 'Tablet', precio: 200}, //Posición 2
    {nombre: 'Audífonos', precio: 300}, //Posición 3
    {nombre: 'Teclado', precio: 400}, //Posición 4
    {nombre: 'Celular', precio: 700}, //Posición 5
]

const nuevoArreglo = carrito.map( producto => `Producto: ${producto.nombre}. Precio: ${producto.precio}`); 

carrito.forEach( producto => console.log(`Producto: ${producto.nombre}. Precio: ${producto.precio}`));

console.log(nuevoArreglo);