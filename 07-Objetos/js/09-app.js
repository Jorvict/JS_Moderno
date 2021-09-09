// Sellar un Objeto
/* Para sellar el objeto, se realiza de una manera similar a Freeze */

'use strict';

const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true,
}

Object.seal(producto); // De ésta forma sellamos el objeto 
/* A diferencia de Freeze, con Seal no se podrá agregar ni eliminar
    propiedades, pero si se pueden reasignar el valor de sus propiedades*/

producto.disponible = false; // Al estar sellado si permite reasignar valores
// producto.imagen = 'imagen.jpg'; No permite agregar nuevos valores
// delete producto.precio; Ni tampoco eliminar

console.log(producto)

// Para saber sí un objeto está sellado
console.log(Object.isSealed(producto)); // Retorna True ya que si esta sellado