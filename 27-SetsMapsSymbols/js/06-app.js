// Iteradores en Javascript
function crearIterador(carrito){

    // Se inicializa en 0
    let i = 0;
    
    // Al llamar a la función crearIterador retornará una función 
    // llamada siguiente
    return{

        siguiente: () => {

            /* Al ejecutar la función siguiente, con la variable 
            fin se validará sí el contador ya excedió la cantidad
            de campos que tiene el array carrito, en caso de que
            el contador sea mayor que la longitud de carrito
            entonces fin pasará a ser true */
            const fin = (i >= carrito.length);


            /* Con la variable valor validaremos sí fin es true o
            false. Sí es false lo que hará es leer el array de
            carrito en la posición con el valor de i, asignar
            dicho valor en la variable valor y luego incrementar
            el valor del contador i en 1. En caso de que sea true
            significa que ya se culminó de recorrer el array
            entonces retornará undefined */
            const valor = !fin ? carrito[i++] : undefined ;

            return{
                fin,
                valor
            }
        }
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto nuevo'];

// Utilizar el iterador
const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());