// .findIndex para encontrar la posición en un array
/* Éste nos va a permitir en que índice de un array
se encuentra un elemento*/

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

/* En un forEach, si añades una coma el segundo parametro
que se pasa es el índice del elemento actual */
meses.forEach( (mes, index) =>{
    // console.log(index);
    // console.log(mes);

    if(mes === 'Abril'){
        console.log(`Encontrado en el índice ${index}`);
    }
})


// Encontrar el índice de Abril
const indice = meses.findIndex( mes => mes === 'Abril');
console.log(indice);


/* Cuando le pasas al findIndex un valor que no existe
va a retornar un -1 */
const indice2 = meses.findIndex( mes => mes === 'Diciembre');
console.log(indice2);


// Comprobar listado de valores
if(indice > 0){
    // code
}


// Practica con array de objeto
const indice3 = carrito.findIndex( producto => producto.nombre === 'Celular');
console.log(indice3);

const indice4 = carrito.findIndex( producto => producto.precio === 400);
console.log(indice4);


// Nota: Al usar findIndex, sí varios elementos del array 
// repiten el mismo valor que se está filtrando, 
// solo se mostrará el índice del primero que ha sido filtrado

// Para esos casos en los que se repite, se debe utilizar "filter"