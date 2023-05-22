// Event Loop o Loop de eventos
/**
 * Es como se va ejecutando el código en JS, es decir, que tiene mas
 * prioridad, una función, una variable, un promise, etc.
 * 
 * Algo que se debe tener muy en cuenta es que los setTimeout tienen de
 * las menores prioridades, esto debido a que según se expuso en la
 * JSConf, el setTimeout a pesar de que se cumpla el tiempo establecido,
 * recien entrará a cola cuando no hayan otros elementos en el stack,
 * es decir, hasta que no se hayan ejecutado las demás tareas el setTimeout
 * no pasará a ejecución, y también tener en consideración que los
 * console.log son de las "prioridades" ,ás altas, o sea, suele 
 * ejecutarse de primero
 */

console.log('Primero');

setTimeout(() => {
    console.log('Segundo');
}, 0);

console.log('Tercero');

setTimeout(() => {
    console.log('Cuarto');
}, 0);

new Promise ( function(resolve) {
    resolve('Desconocido...')
}).then(console.log)

console.log('Ultimo');

function hola(){
    console.log('Hola');
}
hola();

/**
 * El código de JS es de un solo hilo, es decir, ejecuta solamente
 * sucede una cosa a la vez, y una vez completada recién pasa a la siguiente
 */