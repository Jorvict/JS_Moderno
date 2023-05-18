// Partials y Currying
/**
 * Currying básicamente consiste en dividir una función que toma
 * más de un parametro en argumentos de forma parcial, se podría
 * decir que es la metodología
 */

// suma y suma2 son lo mismo
const suma = (a, b, c) =>{
    return a + b + c;
}

const suma2 = (a, b, c) => a + b + c;
console.log(suma(1, 2, 3));


// Utilizando currying y partials
// El primer parcial es la función del parametro "a"
// El segundo parcial es la función del parametro "b, c"
const parcial = (a) => (b, c) => suma(a, b, c);

// Ejecutando los partials
const primerNumero = parcial(5);
const resultado = primerNumero(4, 3);
console.log(resultado);


// Basicamente es ejecutar el código parte por parte haciendo uso
// de funciones dentro de funciones
const parcial2 = a => b => c => suma(a,b,c);

const firstNumber = parcial2(5)
const secondNumber = firstNumber(4);
const result = secondNumber(5);

// Manera resumida para ejecutar los partials
const resultParcial = parcial2(5)(6)(7);

console.log(result)
console.log(resultParcial)

// NOTA: Podria ser pregunta de prueba técnica identificar un código
// que utilice currying y partial 