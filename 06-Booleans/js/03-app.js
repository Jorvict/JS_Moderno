// Buenas practicas a la hora de evaluar un Boolean
// Error común
const autenticado = true;

/* Se recomienda no colocar === true, ya que si la constante ya
fue declarada y definida, no es necesario colocar el === true */
// if(autenticado === true){  (Mal)
if(autenticado){              // Bien
    console.log('Si puedes ver netflix');
} else{
    console.log('No, no puedes verlo');
}


// Operador ternario
/* Lo que está ántes del simbolo ? es la condición
    Lo que está después del símbolo ? es lo que se ejecuta sí la condición es TRUE
    Lo qué está después del símbolo : es el ELSE */
console.log(autenticado ? 'Si está autenticado' : 'No está autenticado');