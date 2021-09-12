// Recorrer un Array
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

console.table(meses);

// Para acceder a cada uno de los elementos del arreglo se debe iterar

// Cuanto mide el arreglo
console.log(meses.length);

// Iterar el arreglo usando un for loop
// Recordar que los arreglos inician en 0
for(let i= 0; i < meses.length; i++){
    console.log(meses[i]);
}