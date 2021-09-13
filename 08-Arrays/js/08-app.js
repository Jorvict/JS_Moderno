// Destructuring de Arrays
const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true,
}

const {nombre} = producto;
console.log(nombre);


// Destructuring con arreglos
const numeros = [10, 20, 30, 40, 50];

// La extracción funciona en base a la posición, tu defines el nombre de la posición
// const [primero] = numeros;
// console.log(primero); // Retorna 10

// Extraer el tercer valor
// const [primero, segundo, tercero] = numeros;
// console.log(tercero); // Retorna 30

/* En caso de que quieras extraer solamente el tercer valor pero no
quieras definir variables para las posiciones previas, debes utilizar
una coma "," ya que si colocas solamente "tercero", este tomará el
valor de la posición 0 del array */

// const [tercero] = numeros; // Retornaría 10 (Ejemplo incorrecto)

// const [, , tercero, , quinto] = numeros;
// console.log(tercero); // Retorna 30
// console.log(quinto); // Retorna 50

/* En caso de que deseemos extraer el primer y segundo valor pero
queremos que los últimos elementos estén en su propio arreglo */
const [primero, segundo, ...tercero] = numeros;

// Retorna un array con 30,40,50 (todos los demás elementos que no fueron 
// parte del array destructuring), esto se suele aplicar bastante a React
console.log(tercero); 
