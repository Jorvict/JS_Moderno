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

// const iterador = crearGenerador();


/* Se dice que el generador se queda dormido porque no lo utilizamos
   Para utilizarlo usaremos .next, pero luego de que lo utilicemos
   se dormirá nuevamente, tener en cuenta .next es parte del proto
*/
// console.log(iterador);
// console.log(iterador.next().value); // Imprime el primer yield
// console.log(iterador.next().done);  // Imprime el segundo yield
// console.log(iterador.next().value); // Imprime el tercer yield
// console.log(iterador.next());       // Imprime el cuarto yield
// console.log(iterador.next());       // Imprime undefined pero con done true
// console.log(iterador); // Imprime closed porque finalizó de iterar los yield


// Generador para carrito de compras
function *generadorCarrito( carrito ){

    for(let i = 0; i < carrito.length; i++){
        
        yield carrito[i];
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];
const iterador = generadorCarrito(carrito);

console.log( iterador.next().value );
console.log( iterador.next().done );
console.log( iterador.next() );
console.log( iterador.next() );