// ¿Qué es Functional JS?
/**
 * Consiste en crear tu código utilizando funciones, pero hay ciertas
 * reglas, básicamente las funciones deben tomar una entrada y tener
 * una salida de datos.
 * 
 * Algo importante que se debe tener en cuenta es que no se permite
 * la modificación de datos, por ejemplo sí tienes un arreglo y
 * quieres filtrar ciertos registros lo ideal es crear un arreglo
 * nuevo con los registros filtrados y no modificar el arreglo
 * existente u original.
 * 
 * Tiene una sintaxis más de matemáticas.
 * 
 * *********************************************************************
 * 
 * Existen 3 conceptos claves de la programación funcional:
 * 
 * ~ Inmutabilidad: Los datos no deben modificarse (usar const casi siempre)
 *      por ejemplo el siguiente código es algo que se debe evitar:
 * 
 *      let cliente = "Jorvict";
 *      cliente = "Enrique";
 * 
 * 
 * ~ Separar funciones de datos: Se refiere a la práctica de distinguir 
 *      las funciones que se encargan de realizar operaciones y 
 *      transformaciones en los datos de aquellas que se encargan de 
 *      gestionar y manipular los propios datos. Se utilizan mucho
 *      funciones que retornan un nuevo dato o Array Method, de esta
 *      forma tendremos funciones que entregan un resultado nuevo pero 
 *      nunca modifican los datos.
 * 
 * 
 * ~ First-class functions: Es poder crear funciones que parezcan cualquier
 *      variable como lo es Function Expression, por ejemplo:
 * 
 *      const suma = function(a, b){
 * 
 *          return a + b;
 *      }
 *      const resultado = suma;
 */

// First Class Functions
const suma = function (a, b) {
    return a + b;
}

// Básicamente sí puedes asignar una función de esta forma, el lenguaje
// soporta First Class Functions
const resultado = suma;

// Es como sí fuera un alias
console.log(resultado(10, 20)); // Imprime 30


// Cuando un lenguaje puede asignar una función a una variable como si
// fuera un string, number, boolean, etc; quiere decir que ese lenguaje
// soporta First Class Functions.