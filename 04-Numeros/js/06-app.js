const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1);
console.log(Number.parseInt(numero1)); // Convierte de string a numero entero
console.log(Number.parseFloat(numero2)); // Convierte de string a numero flotante (decimal)
console.log(Number.parseInt(numero3)); // Retorna NaN


// Revisar si un número es entero o no
console.log(Number.isInteger(numero4)); // Retorna true, si fuera decimal retorna false
console.log(Number.isInteger(numero1)); // Retorna false porque es un string

// INVESTIGAR SOBRE DAR FORMATO A NÚMEROS
//Agregar los últimos 2 lugares decimales 
// no ha sido problema he usado .toFixed(2)