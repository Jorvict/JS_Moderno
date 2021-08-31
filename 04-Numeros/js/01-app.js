// Crear Números en JavaScript
const numero1 = 20;
const numero2 = '20'; // Si le colocas '', deja de ser un número, pasa a ser un string
const numero3 = 20.20;
const numero4 = .102030;
const numero5 = -20;

console.log(numero1); // Este esta en azul debido a que el tipo de dato es númerico
console.log(numero2);
console.log(numero3); // Aunque sea flotante, no es necesario especificar que es flotante, igualmente se trata como numerico
console.log(numero4);
console.log(numero5);

/* No es necesario especificar el tipo de dato, los números se tratan como
datos númericos sin importar si son enteros, decimales, fracciones o negativos */

// Declarar números mediante objetos
const numero6 = new Number(80);
console.log(numero6);


// El constructor new Number crea objetos del tipo número
const numero7 = new Number(80); 
const numero8 = new Number(40);
 
console.log(numero7); // [Number: 80]
console.log(numero8); // [Number: 40]
 
// La suma de estos objetos crea una variable del tipo número  
const resultado = numero7 + numero8;
 
console.log(resultado); // 120
console.log(typeof resultado); // number
 
// En resúmen...
// Lo objetos de tipo número permiten hacer todo tipo de operaciones matemáticas, de la misma forma que lo haríamos con las variables numéricas.