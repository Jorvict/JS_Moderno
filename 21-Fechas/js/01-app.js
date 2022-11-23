// El objeto Date
// const diaHoy = new Date('9-15-1998'); // Imprime Mes 9 Dia 15 Año 1998
// const diaHoy = new Date('January 5 2000');
const diaHoy = new Date();

let valor;

valor = diaHoy;

valor = diaHoy.getFullYear();
valor = diaHoy.getMonth(); // Inicia la cuenta en 0 (Enero es 0)
valor = diaHoy.getMinutes(); // Muestra los minutos de la hora actual
valor = diaHoy.getHours(); // Muestra la hora actual
valor = diaHoy.getTime(); // Muestra los milisegundos transcurridos desde el 01-01-1970
valor = diaHoy.setFullYear(2010);

// No requiere instanciarse a diferencia de los previos que requieren el new
console.log(Date.now()); 

console.log(diaHoy);

// console.log(typeof valor); Las fechas obtenidas por Date son objetos
// Se puede utilizar el getFullYear para actualizar el año del copyright de la página