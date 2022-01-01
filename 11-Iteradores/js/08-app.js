// for ....in
/* Algo a tener en conocimiento es que for of itera
sobre arreglos y for in itera sobre objetos, es decir
*/
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

// Solo retornará índices debido a que es  un array
for( let pendiente in pendientes){
    // console.log(pendiente);
}


const automovil ={
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

// Retornará el valor de las llaves del objeto (Modelo, year, motor)
for(let propiedad in automovil){
    console.log(propiedad)
}

// Para obtener el valor de las llaves
for(let propiedad in automovil){
    console.log(`${automovil[propiedad]}`);
    // console.log(automovil[propiedad]); Imprimiría lo mismo
}
/* Se podría interpretar como que el objeto "automovil" 
ahora es un array y la posición que tiene el valor del
dato es la "propiedad" (que a su vez es la llave del objeto) (?) */

for(let [llave,valor] of Object.entries(automovil)){
    console.log(valor)
    // console.log(llave)
}