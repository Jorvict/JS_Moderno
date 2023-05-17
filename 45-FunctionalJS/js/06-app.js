// Pure Functions o Funciones Puras (Se utilizan mucho en React)
/**
 * Son funciones que retornan un dato pero no modifican los valores
 * de las variables, es decir sí hay una variable global o una
 * función global no van a modificar ese valor sino que retornan un dato
 * nuevo y otra carácteristica es que con una entrada de datos, es decir,
 * toman un parametro, deben retornar la misma cantidad de datos que recibe
 * la entrada. En resumen, el resultado debe ser una nueva variable ya con
 * el nuevo valor.
 */
const numero1 = 20;

// Recibe un parametro y retorna un valor
const duplicar = numero => numero * 2;

// No modifican un valor original
const resultado = duplicar(numero1);

console.log(numero1);
console.log(resultado);

/**
 * ACOTACIÓNES: 
 * ~ UNA FUNCIÓN PURA NO DEBE MODIFICAR EL VALOR ORIGINAL
 * ~ SÍ UNA FUNCIÓN PURA TOMA UNA ENTRADA DE DATOS DEBE RETORNAR UN SOLO VALOR
 */ 