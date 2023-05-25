// Coerción
/**
 * Es la conversión automática implicita o manual explícita de valores de
 *  un tipo de dato dado a otro tipo de dato
 */

const numero1 = 20;
const numero2 = "40";

// Coerción implícita, es decir, se está forzando a que JS lo modifique
console.log( numero1 + numero2 ); // Imprime 2040 porque JS lo transformó a string

// Coerción explícita, utilizamos una función para modificar el tipi de dato del valor
console.log(Number(numero2));
console.log(numero1.toString());

// No aplica solamente a número sino también a arreglos
const pedido = [1, 2, 3, 4];
console.log(pedido.toString());
console.log(JSON.stringify(pedido));

// Es la conversión implícita o explícita de un tipo de dato hacia otro 