// El Ejercicio Fizz Buzz - 100 Números

// Todos los que son múltiplos de 3 debe imprimir Fizz
// Todos los que son múltiplos de 5 debe imprimir buzz
// Todos los que son múltiplos de 15 debe imprimir Fizzbuzz!

for(let i = 1; i <= 100; i++){
    if( i % 15 == 0){ // Debemos revisar de primero nuestra condición menos común o las que nos interesa más
    //  if( i % 3 == 0 && i % 5 == 0 ){ Otra alternativa
        console.log(`Número: ${i}. Fizzbuzz!`);
    }
    else if( i % 3 == 0){
        console.log(`Número: ${i}. Fizz`);
    }
    else if( i % 5 == 0){
        console.log(`Número: ${i}. buzz`);
    } else{
        console.log(`Número: ${i}`);
    }
}

