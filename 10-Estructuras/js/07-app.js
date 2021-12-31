// El Operador OR para que se cumpla al menos una condición

/* El operador || (OR) revisa que alguna de todas las condiciones se
cumpla, basta con que alguna se cumpla para que se ejecute el bloque
condicional */

const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar){
    console.log('Si podemos pagar');
} else {
    console.log('Fondos insuficientes');
}

/* Este código es común al validar un formulario, por ejemplo con un
código similar podríamos validar que todos los campos estén llenados,
en caso se detecte que ALGUNO de TODOS los campos esté vació, se puede
mostrar un mensaje en la pantalla donde se indique que todos los campos
deben estar llenos y no debe haber campos vacios */