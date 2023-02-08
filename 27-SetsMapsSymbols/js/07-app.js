/* Generadores en JavaScript
    Un generador es una función que retorna un iterador, la sintaxis 
    del generador es igual a una función pero con * al inicio, junto
    a los generadores hay una palabra reservada llamada "yield",
    basicamente son los valores que se pueden iterar
*/
function *crearGenerador(){

    yield 1;
    yield 'Jorvict';
    yield 3+3;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador);