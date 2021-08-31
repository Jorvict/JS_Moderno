// Concatenar un String y Template Strings
const producto = 'Monitor de 20 Pulgadas'; 
const precio = '30 USD';

// console.log(producto.concat(precio)); // Metodo para concatenar 2 elementos
// console.log(producto.concat('En descuento'));


// console.log(producto + "con un precio de: " + precio);
console.log("El producto " + producto + " tiene un precio de " + precio);
console.log("El producto" , producto , "tiene un precio de" , precio);


// Template string, es la mas recomendable, se debe usar Backtick (Alt + 96)
console.log(`El producto ${producto} tiene un precio de $${precio}`);