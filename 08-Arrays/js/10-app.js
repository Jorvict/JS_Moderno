// .map para iterar un array, y sus diferencias con forEach

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500}, //Posición 0
    {nombre: 'Televisión', precio: 100}, //Posición 1
    {nombre: 'Tablet', precio: 200}, //Posición 2
    {nombre: 'Audífonos', precio: 300}, //Posición 3
    {nombre: 'Teclado', precio: 400}, //Posición 4
    {nombre: 'Celular', precio: 700}, //Posición 5
]

const nuevoArreglo = carrito.forEach( function (producto) {
    return `Producto: ${producto.nombre}. Precio: ${producto.precio}`;
})

// La sintaxis de map es igual a la de forEach
/* La diferencia es que .map crea un array nuevo y forEach no*/
/* Un caso en el que se puede utilizar esto, es por ejemplo sí deseas
crear un arreglo nuevo con los productos que cuesten más de 300 */

const nuevoArreglo2 = carrito.map( function (producto) {
    // Siempre necesita un callback de retorno ya que esto es lo que
    // almacenará en el nuevo array
    return `Producto: ${producto.nombre}. Precio: ${producto.precio}`;
})

console.log(nuevoArreglo); // El array del forEach no tiene nada
console.log(nuevoArreglo2);