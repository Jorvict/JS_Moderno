// Funciones que retornan funciones

/**
 * Tener en cuenta que el siguiente código funciona debido a que
 * se está aprovechando el return implicito de las arrow functions
 * Sí utilizaramos un bloque de código (utilizando llaves), entonces
 * tendríamos que utilizar un return explicito ya que de lo contrario
 * al no haber un retorno de la segunda función fn tendrá un valor de
 * undefined, y al ser undefined pero tratar de ejecutarla como si
 * fuera una función retornará un error indicando que fn no es una
 * function
 */
const obtenerCliente = () => () => console.log('Jorvict Enrique');

const fn = obtenerCliente();

fn();


// Retorno explicito
const obtenerCliente2 = () => {
    return () => console.log('Piña');
}
 
const fn2 = obtenerCliente2();
fn2();