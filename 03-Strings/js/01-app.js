/* Los strings o cadenas de texto representan un texto que se puede
asignar a una variable, cosas como el nombre de un cliente, el nombre de 
un producto, la categoría, todo eso es un texto y se representa mediante
un string. Si le colocas comillas dobles o sencillas ya lo convierte
en un string, una restricción para los strings es que si inicias
con comillas simples debes finalizar con comillas simples, lo mismo
para comillas dobles, pero no se puede iniciar con simple y terminar
con dobles */

const producto = "Monitor de 20\""; // Escapar comilla con backslash
const producto2 = String('Monitor 24" ');
const producto3 = new String('Monitor de 27 pulgadas');

console.log(producto);
console.log(producto2);
console.log(producto3);