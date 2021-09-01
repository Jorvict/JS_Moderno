// Comparar Null y undefined en JavaScript

// Undefined
let numero; // La variable esta definida pero su valor no
console.log(numero);

// Null
let numero2 = null;
console.log(numero2);
console.log(typeof numero2); // Retornará Object
/* Retorna Object debido a que en la especificación de ECMA (que es quien
define el estándar del lenguaje) dice que los nulls deben ser un
objeto*/

console.log(numero === numero2);