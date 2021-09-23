// Switch para evaluar múltiples Condiciones

/* Cuando tienes múltiples condiciones que revisar, es mejor hacerlo
con un switch, sobretodo si tienden a ser 10-15 condiciones */

const metodoPago = 'efectivo';

// En el parentesis va el valor que queremos comprobar
switch(metodoPago){
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        pagar();
        break; // De esta forma detenemos la ejecución del switch

    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
        
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;

    default: // Es como el ELSE, es obligatorio colocarlo
        console.log('Aún no has seleccionado un método de pago o método de pago no soportado');
        break;
}

function pagar() {
    console.log('Pagando...');
}