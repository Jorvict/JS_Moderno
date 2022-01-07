// .find
/* Crea un nuevo arreglo basado en la condición que
estas revisando */

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Con un forEach
let resultado = '';
carrito.forEach( (producto, index) =>{
    if(producto.nombre === 'Tablet'){
        resultado = carrito[index];
    }
});
console.log(resultado);


// Con un .find
const resultado2 = carrito.find( producto => producto.nombre === 'Tablet');
console.log(resultado2);

/* NOTA: Muy importante recordar que .find solamente
va a retornar el primer elemento que cumpla la condición,
sí quieres traer todos los que sean iguales debemos usar
el array method .filter */