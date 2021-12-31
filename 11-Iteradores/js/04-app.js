// While Loop
// Un While se va a ejecutar mientras una condición sea verdadera

let i = 0; // Inicializar el While

while(i < 10){ // Condición...

    // console.log(`Número ${i}`);

    i++; // Incremento
}


// Fizz buzz con un while
i = 0; // Inicializar el While

while(i < 100){ // Condición...

    // if( i % 15 == 0){ // Debemos revisar de primero nuestra condición menos común o las que nos interesa más
    //     //  if( i % 3 == 0 && i % 5 == 0 ){ Otra alternativa
    //         console.log(`Número: ${i}. Fizzbuzz!`);
    //     }
    //     else if( i % 3 == 0){
    //         console.log(`Número: ${i}. Fizz`);
    //     }
    //     else if( i % 5 == 0){
    //         console.log(`Número: ${i}. buzz`);
    //     } else{
    //         console.log(`Número: ${i}`);
    //     }

    i++;
}


i = 100;

while(i < 10){
    console.log(`Bucle no ejecutado`);
    i++;
}

/* Este ultimo bucle no se ejecuta debido a que la
condición no se cumple */

/* Desarrollar ejercicio de pare o none usando while */

i = 1;

while(i < 20){

    if(i % 2 == 0){
        console.log(`El número ${i} es Par`);
    } else {
        console.log(`El número ${i} es Impar`);
    }

    i++;
}