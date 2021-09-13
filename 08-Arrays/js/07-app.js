// Eliminar elementos con Splice - (Imperativa: Modifica el elemento actual)

const carrito = [];

const producto = {
    nombre: 'Monitor de 32 pulgadas',
    precio: 400
}
const producto2 ={
    nombre: 'Celular',
    precio: 800
}

const producto3 ={
    nombre: 'Teclado',
    precio: 50
}

const producto4 ={
    nombre: 'Mouse',
    precio: 30
}

const producto5 ={
    nombre: 'Silla',
    precio: 500
}

// Agregar elementos
resultado = [...carrito, producto3, producto2, producto, producto4, producto5];
console.table(resultado);

// Eliminar el último elemento de un array
// resultado.pop();
// console.table(resultado);

// Eliminar el primer elemento de un array
// resultado.shift();
// console.table(resultado);

// Eliminar elementos que estén en el medio del array, se utiliza SPLICE
/* El método splice necesita 2 parametros, el primero es la posición
inicial en la cual comenzará a recortar las casillas del array, y el
segundo parametro es cuantas casillas/posiciones del array deseas eliminar
una vez se llegado a la posición especificada en el primer parámetro */ 

resultado.splice(1,1); // Llega a posición 1 y elimina 1 elemento (producto2)
console.table(resultado);

resultado.splice(0,2); // Llega a posición 0 y elimina 2 elementos (producto3 y producto)
console.table(resultado);

// Eliminar del inicio del array usando splice en vez de shift
resultado.splice(0,1);
console.table(resultado);

// Cargar nuevamente array con datos
resultado = [...carrito, producto3, producto2, producto, producto4, producto5];

// Eliminar último elemento del array usando splice en vez de pop
resultado.splice(resultado.length - 1 , 1);
console.table(resultado);

/* Recordar que al usar const al declarar un array y modificarlo con
array methods no da error debido a que lo que const restringe es la
reasignación */