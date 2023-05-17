// .map es muy utilizado en FunctionalJS
/**
 * La mayoría de array methods son buenos candidatos para ser utilizados
 *  en la programación funcional, .forEach y .map son unos de ellos, tener
 *  en cuenta que .map lo que realizará es crear un nuevo arreglo utilizando
 *  los valores que sean retornados haciendo uso del return, esto 
 *  significa que se puede hacer uso de funciones de transformación mientras
 *  que forEach lo que hará es simplemente iterar sobre el arreglo.
 * */ 

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

const obtenerNombres = producto =>{
    return producto.nombre;
}

const resultado = carrito.map( obtenerNombres );
console.log(resultado);
console.log(carrito);

/**
 * Repaso de algunos Array Methods:
 * 
 *  .includes: Validar si un valor existe, solo en arreglos de un solo índice.
 * 
 *  .some: Validar sí un valor existe en un arreglo de objetos.
 * 
 *  .findIndex: Identificar en qué índice del array se encuentra un elemento.
 * 
 *  .reduce: Toma una gran cantidad de datos, los une y entrega el resultado.
 *      Puede utilizarse para iterar un array y entregar una suma total.
 * 
 *  .filter: Itera un arreglo y retorna aquellos datos que cumplan con 
 *      la condición establecida.
 * 
 *  .find: Retorna el primer elemento del array que cumpla con la condición 
 *      establecida, sí ningún elemento cumple con la condición retornará
 *      undefined.
 * 
 *  .every: Verifica que todos los elementos del array cumplan con la 
 *      condición establecida, de ser así retornará true, sí alguno de los
 *      elementos del array no cumple con la condición entonces retornará
 *      false. Sí lo que se desea es validar que alguno de los elementos
 *      cumpla con la condición, podemos utilizar .some.
 * 
 *  .concat: Concatena uno o mas elementos, pero para esto se sugiere
 *      utilizar spread operator.
 * 
 * Para más detalles y ejemplos visitar sección 12.
 */