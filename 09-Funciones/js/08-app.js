// Ejemplo con múltiples funciones que se pasan valores
function sumar(a, b) {
    return a + b;
}

/* Cuando tienes una función que retorna algo, tienes que tener una
variable a la cual se le asigne el valor retornado */
const resultado = sumar(2, 3); // Se le asigna el valor retornado (5)

console.log(resultado);

// Ejemplo mas avanzado
let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}
function calcularImpuesto(total) {
    return total * 1.18;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total)

console.log(total);

console.log(`El total a pagar es de ${totalPagar}`);