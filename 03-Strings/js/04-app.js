// Cortar Espacios en Blanco de un String
const producto = '           Monitor de 20 Pulgadas     '; 

console.log(producto);
console.log(producto.length);

// Eliminar espacios del inicio...
console.log(producto.trimStart());
console.log(producto.trimStart().length);

/* La utilidad de tener esto es que al ser un desarrollador nos 
encontraremos muchos casos en los cuales los usuarios al utilizar los
formularios puede que ingresen espacios en blanco innecesarios, de esta
forma podremos eliminarlos automaticamente */

/* En JS se pueden utilizar los métodos de forma encadenada, esto se
conoce como "chaining", es decir, colocar un método y luego colocar el
siguiente método a ejecutar */
console.log(producto.trimStart().trimEnd());
console.log(producto.trimStart().trimEnd().length);


// trimStart y trimEnd son métodos nuevos, antes de utilizaba trim
console.log(producto.trim()); // Borra espacios en ambas, inicio y fin