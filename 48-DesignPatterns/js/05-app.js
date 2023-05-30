// Module Pattern - Categoría: De estructuración
/**
 * Es el más común de JS, la síntaxis previamente era muy
 * distinta a la sintaxis actual para importar modules
 */

// Sintaxis actual de exportar modules luego de ECMASCRIPT
// const mostrarCliente = nombre => {

//     console.log(nombre);
// }
// export default mostrarCliente;


// Sintaxis previa a ECMASCRIPT
const module1 = (function(){

    const nombre = 'Juan';

    function hola(){
        console.log('hola');
    }

    return{
        nombre,
        hola
    }
}) ();

// Se imprime desde el archivo 06