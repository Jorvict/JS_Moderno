// Crear un nuevo arreglo con el spread operator
/* En las nuevas versiones de JS se dieron diferentes funciones que hacen
lo mismo, unas se les conoce como formas declarativas y a otras se les
conoce como formas imperativas, ambas son muy utilizadas en la
programación de JS, la forma IMPERATIVA es la que vimos en la sesión
anterior (creamos un carrito y sobre ese mismo carrito estamos modificando
datos, es decir, estamos agregando y eliminando datos al array de carrito
ya sea en su inicio o al final. En pocas palabras, la forma IMPERATIVA
MODIFICA LA VARIABLE ORIGINAL, trabaja sobre ella misma, sobre ella
misma reescribie y modifica los datos */
/* Existe otra forma que fue implementada en la actualización de
ECMAScript 6 (la actualización mas grande en JS), esta nueva forma es
agregar funciones DECLARATIVAS, esta forma nos permite copiar
los datos para pasarlos a una nueva variable y poder trabajar con los
datos copiados, de ésta forma no modificaremos el elemento original,
para ello utilizaremos el spread operator o también llamado rest operator */

const carrito = [];



// Definir un producto - Los arreglos pueden almacenar objetos
const producto = {
    nombre: 'Monitor de 32 pulgadas',
    precio: 400
}
const producto2 ={
    nombre: 'Celular',
    precio: 800
}

const producto3 ={
    nombre: 'Teclado',
    precio: 50
}

let resultado;

// Las formas declarativas en su sintáxis a veces no dejan muy en claro 
// lo que realizan, a diferencia de las forma imperativas, sin embargo
// la forma declarativa está relacionado más con la programación funcional

// Agregar al final
resultado = [...carrito, producto]; // Tomamos una copia de carrito y agregamos producto en el nuevo array
resultado = [...resultado, producto2]; // Copiamos resultado y agregamos producto2

// Agregar al inicio
resultado = [producto3, ...resultado];

console.table(resultado);

// Método para agregar varios datos simultaneamente
// resultado = [...carrito, producto, producto3, producto2];

/* Otro ejemplo de Spread Operator */
const calendario = [];

const primerCuatrimestre = ['Enero', 'Febrero', 'Marzo', 'Abril'],
      segundoCuatrimestre = ['Mayo', 'Junio', 'Julio', 'Agosto'],
      tercerCuatrimestre = ['Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
 
const calendarioGregoriano = [...calendario,
                                primerCuatrimestre, 
                                segundoCuatrimestre, 
                                tercerCuatrimestre
                            ]; 

console.table(calendario); // No tiene nada ya que no se esta modificando el original
console.table(calendarioGregoriano);
