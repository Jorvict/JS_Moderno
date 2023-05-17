// Funciones como argumentos
const suma = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

// Se establece que el valor recibido como parametro será una función
const sumarOMultiplicar = fn => fn(10, 20);

// Al momento de ejecutar la función se le pasa otra función como argumento
console.log( sumarOMultiplicar(suma) );
console.log( sumarOMultiplicar(multiplicar) );