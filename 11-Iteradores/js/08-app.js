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

const PC = {
    Motherboard: 'Asus ROG',
    RAM: '16 GB',
    Grafica: 'RTX 3070 TI'
}

const Movil = {
    Marca: 'Xiaomi',
    Modelo: 'Redmi note',
    Memoria_RAM: '8GB',
    Almacenamiento: '64GB'
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
    console.log(llave)
    console.log(valor)
}

for(let[key,value] of Object.entries(PC)){
    console.log(key);
    console.log(value);
}

for(let [llaves, valores] of Object.entries(Movil)){
    console.log(llaves);
    console.log(valores);
}

/* Comentario: Veo el titulo de cada video de esas 
secciones vistas y trato de dar un ejemplo de lo que se 
hace en el video para así recordar lo que se hizo y si no 
me acuerdo veo el video nuevamente, eso lo hago por 
hay cada 2 o 3 días*/

// Object.entries se introdujo aproximadamente en Ecmascript 7