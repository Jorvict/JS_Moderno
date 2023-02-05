// Sets y sus caracteristicas
// Permite crear una lista de valores sin duplicados

/* 
    Popularmente se opta por crear un arreglo, iterar sobre el arreglo y sí
    algún elemento ya existe en el arreglo entonces no lo agrega, es totalmente
    válido pero con un set se puede realizar de forma más sencilla, además cuando
    se maneja un alto volumen de datos el set es mucho más rapido que un objeto
    o array
*/

const carrito = new Set();

/* Algunos métodos que existen en arreglos se pueden utilizar con los Set, pero no
todos ya que tienen su propia sintáxis al igual que un string, array u objeto. Es
decir, tienen sus propios Set methods */

// Agrega un elemento, los Set solo son valores, no es llave:valor como los objetos
carrito.add('Camisa'); 
carrito.add('Disco #1'); 
carrito.add('Disco #2'); 
carrito.add('Disco #3'); 
carrito.add('Camisa'); // Este no se agregara porque es un valor repetido
carrito.add('camisa'); // Este si se agregara porque en sesible a Mayusculas y minusculas


// Set method para identificar cuantos elementos hay en el Set (Similar a .length)
console.log(carrito.size); 

// Comprobar sí un valor existe en el Set
carrito.has('Camisa') // Retorna true / false (True en ese caso)
carrito.has('Guitarra') // Retorna true / false (False en ese caso)

// Eliminar elemento del Set
carrito.delete('Disco #2');


// Imprimé si borró el elemento 
console.log(carrito.delete('Disco #3')); // Sí lo pudo borrar imprime true

// Vaciar el Set
// carrito.clear();


// Una característica importante de los Sets es que son iterables
carrito.forEach( (producto, index, pertenece) => {
    console.log(producto);
    console.log(index); // Como los sets solo almacenan valores, la llave/key/index es igual al valor
    console.log(pertenece); // Imprime el Set completo al que pertenece el valor
});

console.log(carrito);


// Ejemplo de uso de un Set
// === Del siguiente arreglo elimina los duplicados
const numeros = [10, 20, 30, 20, 40, 10, 30, 50, 10, 20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);