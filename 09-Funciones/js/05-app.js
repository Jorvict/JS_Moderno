// Parametros y Argumentos en Funciones

/* Para que las funciones sean más versátiles e inteligentes, debemos
utilizar parámetros y argumentos */

function sumar(a, b) { // a y b son parámetros de función
    console.log(a + b);
}

sumar(2, 3); // 2 y 3 serían argumentos

/*  PARAMETROS: Son los valores representativos que se declaran al
    momento de definir y estructurar la función. En otras palabras,
    son como variables.

    ARGUMENTOS: Son los valores reales que se pasan a la función al
    momento de ser llamada y ejecutada.
*/

sumar(200, 184);
sumar(124, 321);

function saludar(nombre, apellido) { // "nombre" y "apellido" son parametros
    console.log(`Hola ${nombre} ${apellido}`);
}

// "Jorvict" y "Piña" son argumentos, es decir los valores reales
saludar('Jorvict', 'Piña');

saludar('Jorvict'); // Imprime "Hola Jorvict undefined"
saludar(); // Imprime "Hola undefined undefined"

/* Estos undefined se muestran porque se está mandando a llamar la variable
pero no tiene ningun valor. En otras palabras, no se ingresó el argumento
que sería almacenado en el parametro definido. Para estos casos lo que
podríamos hacer es que cuando no se le pase ningún argumento a la función
mostrar algunos valores por default */