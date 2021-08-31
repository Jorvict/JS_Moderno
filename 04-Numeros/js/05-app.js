// Incrementos o Decrementos
let puntaje = 5;

// Al ejecutarlo en la consola, primero realiza el llamado a puntaje
// y luego realiza el incremento por lo cual a pesar de haber hecho el
// incremento mostrará 5, esto será así hasta que se vuelva a llamar a
// puntaje, ahí recien mostrará que el valor ahora es 6.
puntaje++;

// Si colocamos primero los +, realiza primero el incremento y luego
// mostrará la variable (ya actualizada con el nuevo valor)
++puntaje;

console.log(puntaje);

puntaje--; // Muestra 7 hasta que se llame de nuevo a puntaje, recien ahí mostrara 6
--puntaje; // Muestra 5 directamente
console.log(puntaje);

puntaje += 3;
puntaje -= 3;
console.log(puntaje);

/* NOTA: Los comentarios respecto a que el valor no se actualiza hasta
que sea llamado nuevamente, solo aplica para la consola, al ejecutarse
desde el archivo JS, el console.log muestra el valor ya actualizado
con el incremento o decremento */
