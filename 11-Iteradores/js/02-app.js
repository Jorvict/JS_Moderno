// break y continue; en un for loop

// Break va a cortar la ejecución de un for loop

// Continue nos va a permitir interceptar un elemento,
// identificarlo, y continuar la ejecución del for loop
// pero omitiendo las líneas de códigos posteriores en
// esa iteración / recorrido en la cual se ejecutó
// el continue.

// For loop que al detectar el numero 5 detiene su ejecución
// for(let i = 0; i <= 10; i++){
//     if(i == 5){
//         console.log(`Este es el 5`);
//         break;
//     }
//     console.log(`Numero. ${i}`);
// }

// For loop que al detectar el numero 5 lo imprime en
// letras y continua recorriendo el for

// for(let i = 0; i <= 10; i++){
//     if(i == 5){
//         console.log(`¡Cinco!`);
//         continue;
//     }
//     console.log(`Numero. ${i}`);
// }

// Ejemplo detectar en un carrito cuando un elemento tiene descuento
const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500}, //Posición 0
    {nombre: 'Televisión', precio: 100}, //Posición 1
    {nombre: 'Tablet', precio: 200, descuento: true}, //Posición 2
    {nombre: 'Audífonos', precio: 300}, //Posición 3
    {nombre: 'Teclado', precio: 400}, //Posición 4
    {nombre: 'Celular', precio: 700}, //Posición 5
]

for (let i = 0; i < carrito.length; i++){
    if(carrito[i].descuento){ // Al evaluar si una variable ha sido definida como true, no es necesario colocar ==, solamente colocar nombre de la variable
        console.log(`El artículo ${carrito[i].nombre} tiene descuento`)
    }
    console.log(carrito[i].nombre);
}