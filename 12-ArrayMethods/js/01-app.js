// Array method .some

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo con forEach
meses.forEach( mes => {
    if(mes === 'Enero'){
        console.log(`Enero si existe`);
    }
})

// Comprobar con un array method
const resultado = meses.includes('Enero');
console.log(resultado);
/* NOTA: .includes solo funciona con arreglos de un
solo índice */


// En un arreglo de objetos se utiliza .some
const existe = carrito.some( producto => {
    return producto.nombre === 'Celular'
    // return producto.nombre === 'Monitor curvo' retorna false ya que no existe
})
console.log(existe);

// .some también se puede utilizar con un array de un solo índice
const exite2 = meses.some( mes => mes === 'Febrero');
console.log(exite2)