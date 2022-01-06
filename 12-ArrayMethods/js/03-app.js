// .reduce
// Toma una gran cantidad de datos, los une y entrega el resultado

// Ejemplo de recorrer un array de datos e imprimir cuanto
// debe pagar el cliente
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Con un forEach
let total = 0;
carrito.forEach( producto => total += producto.precio)
console.log(total);


// Con un reduce
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(resultado);

/* En el reduce, se pasan 2 parámetros, el primero es 
el valor "anterior" y el segundo es el valor actual*/

/* En éste caso ya no amérita colocar el "+=" al 
almacenar los datos de la suma en el total ya que éste
viene almacenando el valor previo en cada iteración*/

/* Sí colocar una , y un 0, estarás especificando en
que valor sobre el cual inicia el total*/


// Reduce de manera explicita (la anterior es implicita)
const resultado2 = carrito.reduce((total, producto) => {           
    return total + producto.precio 
}, 0) 
console.log(resultado2);