// El Operador Ternario

/* Existen 3 formas de evaluar datos, la primera es con if, la segunda
es con switch y la ultima es con un operador ternario */

const autenticado = true;
const puedePagar = false;

const efectivo = 800;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;



/*  OPERADOR TERNARIO
    Lo que va a la izquierda del "?" es la condición 
    Lo que va a la derecha del "?" es lo que se ejecutará si la condición es TRUE
    Lo que va a la derecha del ":" es lo que se ejecutará si la condición es FALSE 
*/
console.log( autenticado || puedePagar ? 'Si puede pagar' : 'No está autenticado' );

// IF anidado
if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar){
    if(efectivo > totalPagar){
        console.log('Si pagaste con efectivo');
    } else{
        console.log('Otra forma de pago');
    }
} else {
    console.log('Fondos insuficientes');
}

// Ternario anidado
console.log( autenticado ? (puedePagar ? 'Sí esta autenticado y puede pagar' : 'Si está autenticado, no puede pagar') : 'No está autenticado' );