// MomentJS

const diaHoy = new Date();

console.log(diaHoy.toLocaleString()); // Imprime dd/mm/aaaa, hh:mm:ss
console.log(diaHoy.toLocaleTimeString()); // Imprime hh:mm:ss
console.log(diaHoy.toLocaleDateString()); // Imprime dd/mm/aaaa

// MomentJS permite asignarle un formato como los mostrados arriba

moment.locale('es'); // Se indica a moment que queremos fechas en español

console.log(moment().format('MMMM') ); // Imprime mes en letras
console.log(moment().format('MMMM Do YYYY hh:mm:ss a') );
console.log(moment().format('LLLL', diaHoy) ); // Imprime fecha completa

// Ideal para cupón que finaliza en 3 días pero estableciendo una fecha fija
console.log( moment().add(3, 'days').calendar() ) 
