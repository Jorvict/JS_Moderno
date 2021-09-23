// Mayor o Igual y else if
const dinero = 300;
const totalAPagar = 500;
const vuelto = (dinero, total) => dinero - total;
const tarjeta = false;
const cheque = true;

if(dinero >= totalAPagar){
    console.log(`Si podemos pagar, tu vuelto es ${vuelto(dinero, totalAPagar)}`);
} else if(tarjeta){
    console.log('Si puedo pagar porque tengo la tarjeta');
}else if(cheque){
    console.log('Si tengo un cheque');
} else{
    console.log(`Fondos insuficientes, te falta ${Math.abs(vuelto(dinero,totalAPagar))} para poder pagar.`);
}

// Al usar else if, se ejecutará la primera condición que se cumpla