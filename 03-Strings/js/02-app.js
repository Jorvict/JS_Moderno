// String Methods - includes y length

const producto = 'Monitor de 20 Pulgadas'; 

console.log(producto);

// Conocer la cantidad de carácteres de la cadena de texto
console.log(producto.length); // Propiedad

/* Cuando buscas en Amazon (por ejemplo), colocas en la barra de 
búsqueda el producto deseado, para realizar la búsqueda se podría
utilizar el método indexOf*/
/* Sí utilizamos indexOf, nos va a decir sí el string llamado "producto"
tiene la palabra "Monitor" en algún lugar, en éste caso nos retornara
el valor 0 ya es la posición en la que se encuentra el primer
carácter de la palabra. En caso de no encontrar la palabra especificada
retornará el valor de -1*/
// console.log(producto.indexOf('Tablet'));


// Un método similar a indexof es includes, sin embarto este retorna solo
// true o false
console.log(producto.includes('Tablet'));
console.log(producto.includes('Monitor'));