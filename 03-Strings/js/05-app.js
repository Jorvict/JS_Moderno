//String Methods - Replace, Slice y Substring

const producto = 'Monitor de 20 Pulgadas';

// Replace es un método que sirve para reemplazar el primer argumento por
// el segundo argumento.
console.log(producto);
console.log(producto.replace(' Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));


// Slice sirve para extrae, es decir cortar, una parte de una cadena de texto
// El primer argumento es la posición del carácter inicial en el cual
//  iniciará el slice y el segundo en la posicion del carácter final
console.log(producto.slice(0, 18));
// console.log(producto.slice(8)); // Inicia en el 8 y va hasta el final
// console.log(producto.slice(2, 1)); // Si el 1ro es mayor que 2do, no hace nada


// Alternativa a Slice -> substring
// Funcionan de manera similar, sin embargo este si permite extraer
//  el string hacia atras
console.log(producto.substring(0, 18));
console.log(producto.substring(2, 0));

// Ejemplo de como obtener la primera letra de un usuario para imprimirla en web
const usuario = 'Jorvict';
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));
