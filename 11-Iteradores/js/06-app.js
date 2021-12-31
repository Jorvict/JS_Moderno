// .forEach y .map

// El do, while y do while existen en varios lenguajes de programación
/* Estos no se suelen usar mucho en JS, ya que JS cuenta
con sus propios iteradores ademas de que también existen
los arrays methods*/

// forEach
/* El forEach es ideal para recorrer arreglos, va a ejecutarse
al menos una vez por cada vez que haya elementos en el arreglo,
es decir, sí hay 20 elementos en el arreglo, se ejecutará
20 veces, sí hay 5 elementos en el arreglo, el forEach se
ejecutará 5 veces */

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} La tarea pendiente es: ${pendiente}`);
});

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500}, //Posición 0
    {nombre: 'Televisión', precio: 100}, //Posición 1
    {nombre: 'Tablet', precio: 200}, //Posición 2
    {nombre: 'Audífonos', precio: 300}, //Posición 3
    {nombre: 'Teclado', precio: 400}, //Posición 4
    {nombre: 'Celular', precio: 700}, //Posición 5
]

carrito.forEach( producto => producto.nombre);


// .map
/* Es bastante similar con .map la diferencia es que
map crea un array nuevo y forEach no*/
const nuevoArreglo = carrito.map( producto => producto.nombre);
console.log(nuevoArreglo);

// Nota: Al usar map, cada vez que realiza una iteración,
// debe retornar un valor que es el calor que se almacenara
// en el array.

// fizz buzz con forEach
function checkArray () {
    const arrayfizz = [];
    let j = 1;

    while(j <= 100){
        arrayfizz.push(j);
        j++
    }

    arrayfizz.forEach(numero =>{
        if(numero % 15 == 0){
            console.log(`Número: ${numero} Fizzbuzz!`)
        }
        else if(numero % 3 == 0){
            console.log(`Número: ${numero} Fizz`)
        }
        else if(numero % 5 == 0){
            console.log(`Número: ${numero} buzz`)
        }
        else {
            console.log(`Número: ${numero}`);
        }
    });
}
checkArray();