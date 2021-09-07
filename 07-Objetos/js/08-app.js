// Congelar un Objeto para no poderlo modificar

/* Antes que nada, debemos activar el modo estricto, esto lo que realiza
es que no permite malas prácticas dentro del código JS, por ejemplo:
Si declaramos una variable de la siguiente forma:
x = 20; sin el modo estricto, JS crea la variable y se podrá utilizar en
el código, sin embargo esto no es lo adecuado, y sí se habilita el modo 
estricto, éste tipo de prácticas no las va a permitir */
'use strict';

/* Una vez que se ha habilitado el modo estricto, tendremos acceso
a una serie de métodos para objetos (object methods)*/

const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true,
}

Object.freeze(producto); // De ésta forma congelamos el objeto y no se podrá modificar
// Nota: En caso de que se intente modificar, la consola mostrará error

// producto.disponible = false; Al estar congelado no permite reasignar valores
// producto.imagen = 'imagen.jpg'; No permite agregar nuevos valores
// delete producto.precio; Ni tampoco eliminar

console.log(producto)

// Para saber sí un objeto está congelado
console.log(Object.isFrozen(producto)); // Retorna True ya que si esta congelado