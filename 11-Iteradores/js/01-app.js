// For Loop
/* En caso de los iteradores, el código se va a ejecutar
hasta que una condición se cumpla o se deje de cumplir, por
ejemplo en un carrito de compras, el carrito se almacenará
en un array el cual será recorrido por un iterador que se
ejecutará hasta que llegue al final del array. Lo mismo
aplica para cuando se imprimen los comentarios de una
publicación de alguna red social */

/* El iterador más básico es el For loop y se encuentra
en muchos de los lengüajes de programación, éste se ejecuta
hasta que el código deja de cumplir una condición */

// for(let i = 0; i <= 10; i++){
//     console.log(`Numero. ${i}`);
// }

// for(let i = 0; i < 200; i+= 3){ // Incrementa de 3 en 3
//     console.log(`Numero. ${i}`);
// }

/* Una pregunta común que pueden plantear a un desarrollador JR
es como identificar sí un número es par o un none utilizando
un for loop */

// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(`El número ${i} es par`);
//     } else{
//         console.log(`El número ${i} es impar`);
//     }
// }

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500}, //Posición 0
    {nombre: 'Televisión', precio: 100}, //Posición 1
    {nombre: 'Tablet', precio: 200}, //Posición 2
    {nombre: 'Audífonos', precio: 300}, //Posición 3
    {nombre: 'Teclado', precio: 400}, //Posición 4
    {nombre: 'Celular', precio: 700}, //Posición 5
]

console.log(carrito.length);

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}