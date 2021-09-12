// Crear Arrays en JavaScript
/* Para lo que sirven los arreglos es para agrupar elementos del mismo
tipo. Se debe tener en consideración que los elementos a agrupar pueden
ser varios (plural), a diferencia de los objetos que son una variable
que va a agrupar la información de un elemento de un objeto. Mientras
que un arreglo puede tener múltiples elementos que sean iguales*/

// Los arreglos se crean con corchetes [] y los valores se diferencian con ,
const numeros = [10, 20, 30];

// Los objetos se declaran con llaves {}, y su sintaxis es llave : valor
const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true,
}

// Otra sintaxis para declarar un array
const meses = new Array('Enero', 'Febrero', 'Marzo');

/* Los arreglos utilizan algo que se denomina como "índices", es decir
cual es la posición que tiene ese elemento en el arreglo, se debe tener
en cuenta en JS las posiciones de los arreglos inicia en 0 */

console.log(numeros);
console.log(meses);

// Un arreglo que contiene datos de todo tipo
const deTodo = ["Hola", 10, true, 'si', null, {nombre: 'Juan', trabajo: 'Programador'}, [1, 2, 3]];
console.log(deTodo);