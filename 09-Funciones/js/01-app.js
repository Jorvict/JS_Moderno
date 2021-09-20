// Crear Funciones en JS - Function expression y Function Declaration

/* En cualquier lenguaje de programación las funciones son una serie de
procedimientos o instrucciones, es decir, líneas de código, van a realizar
una acción y una ventaja que tienen las funciones es que van a permitir
tener un código más ordenado y por lo tanto más fácil de mantener, otra
ventaja de las funciones es que son reutilizables, puedes tener una función
que valide un formulario y utilizarla en todos los formularios, tambien
puedes tener una función que envíe datos a un servidor y reutilizarla 
multiples veces, existen 2 formas de crear funciones en JS, una es
Declaración de Función (Function Declaration) y la otra es Expresión de
Función (Function expression) */

// ============= Declaración de función ( Function Declaration)
// Inicia con function
function sumar() { // Lo que va dentro de los () son parametros de la función
    console.log(2 + 2);
}

// Una cosa es definir la función y otra cosa aparte es llamarla
// Recordar que para llamar a la función usar ()
sumar();

/* Las funciones sirven para dividir el código en varias secciones y
poder reutilizar el código */


// ============= Expresión de función (Function Expression)
// Es como si una variable fuera igual a la función
const sumar2 = function(){
    console.log(3 + 3);
}
sumar2();