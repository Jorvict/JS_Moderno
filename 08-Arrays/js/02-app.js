// Acceder a los valores de un Array
const numeros = [10, 20, 30, 40, 50, [1, 2, 3], [4, 5, 6, [14, 15, 16]]];

console.log(numeros);
console.table(numeros); // Se recomienda esta impresión para leer mejor un array

// Para acceder al valor de un array es mediante el index del array en el
// que se encuentra almacenado el dato
console.log(numeros[2]); // Imprime 30
console.log(numeros[0]); // Imprime 10

// Sí intentas acceder a un valor que no existe, retornará undefined
console.log(numeros[20]); // Imprime undefined, ya que valor no está definido

// Para acceder a un valor que está en un array dentro de un array
console.log(numeros[5][1]); // Retorna 2

console.table(numeros[6][3][1]); // Retorna 15