/*
    =====================================
    === Pregunta al usuario su nombre ===
    =====================================
*/

const nombre = prompt('Cuál es tu nombre?');

// Sirve para seleccionar un elemento del HTML
// Toma el nombre y lo muestra en pantalla
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo JavaSccript moderno`;

// Asigna el valor hacia la variable producto
const producto = 'Monitor 24 pulgadas';

// Imprime una tabla en la consola
// console.table([1,2,3,4]);


// Generar un mensaje de advertencia
// console.warn('Algo salio mal');


// Generar un mensaje de error
// console.error('Algo salio mal');


// Limpiar la consola
// console.clear(); test


// Cronometrar la ejecución de un bloque de código, el 
// argumento es el nombre del timer
/*
console.time('Inicio');

console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');

console.timeEnd('Inicio');
*/

/* 
    =====================================
    ===       Buenas prácticas        ===
    =====================================

    Se recomienda colocar ; al final de cada instrucción y se recomienda
    colocar una instrucción por línea

    Se recomienda tabular el código dentro de los bloques de código
    y de las funciones.

*/

/*

    =====================================
    ===   Guía para utilizar Eslint   ===
    =====================================

    1 Instalar node desde su pagina
    2 Confirmar que se ha instalado utilizando node -v en el cmd
    3 Abrir el proyecto en VS
    4 Instalar extension Eslint de VS
    5 En la terminal, con el proyecto abierto escribir npm install eslint --save-dev
    6 Luego escribir npm init, escoger opciones respectivas
    7 Escribir npx eslint --init
    8 Escoger style, none, none, no, browser, guide, airbnb, JS, yes
    9 Editar el archivo .eslintrc e ingresar el siguiente código
        {
            "parserOptions": {
                "ecmaVersion": 6
                },
            "rules": {
                "semi": ["error", "always"]
                }
        }
    10 Ejecutar npx eslint (ruta del archivo JS) .\intruduccion\js\app.js --fix

*/