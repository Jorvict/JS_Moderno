// Do While Loop
/* A diferencia del For y del While, el Do While se 
ejecuta al menos una vez, y después verifica la condición
ya sea que se cumpla o no se ejecutará una vez siempre*/

let i = 0; // Inicializar contador
/* let i = 1000; En caso de inicializar con 1000, a pesar
de que no se cumple la condición, el do while se ejecutará
una vez */

do{
    console.log(`Número ${i}`);
    i++; // Incremento
} while(i < 10); // Condición

// Ejemplo del Fizz buzz con do while

i = 1;
do{
    if(i % 15 == 0){
        console.log(`Número: ${i}. Fizzbuzz!`);
    } else if(i % 3 == 0){
        console.log(`Número: ${i}. Fizz`);
    } else if(i % 5 == 0){
        console.log(`Número: ${i}. buzz`);
    } else {
        console.log(`Número: ${i}.`);
    }

    i++;
} while (i <= 100);