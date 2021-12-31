// .forEach para iterar un array

// Declarar un arreglo con objetos
const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500}, //Posición 0
    {nombre: 'Televisión', precio: 100}, //Posición 1
    {nombre: 'Tablet', precio: 200}, //Posición 2
    {nombre: 'Audífonos', precio: 300}, //Posición 3
    {nombre: 'Teclado', precio: 400}, //Posición 4
    {nombre: 'Celular', precio: 700}, //Posición 5
]

// Iterar con un For
for(let i= 0; i < carrito.length; i++){
    console.log(`Producto: ${carrito[i].nombre}. Precio: ${carrito[i].precio}`);
}

console.log('Ejemplo utilizando forEach');
// Iterar con un forEach (Es un método, los métodos tienen .método)
/* Carrito es el plural de todos los objetos, producto sería cada uno
de los objetos (es decir cada una de las posiciones) */
carrito.forEach( function (producto) {
    console.log(`Producto: ${producto.nombre}. Precio: ${producto.precio}`);
})

/* Ambos se comportan igual, la diferencia es que en forEach puedes
cambiar el nombre del parametro de la función y modificarlo en la sintaxis
de punto al imprimir el dato del objeto */
carrito.forEach( function (p) {
    console.log(`Producto: ${p.nombre}. Precio: ${p.precio}`);
})

carrito.forEach(function (product) {
    console.log(`${product.nombre} cuesta: ${product.precio}`);
})