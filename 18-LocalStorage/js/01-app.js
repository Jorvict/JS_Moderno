// Primeros pasos con Local Storage
// Pertenece a la API de JS, es decir sí ingresamos a Window, encontraremos localStorage

// Agregar elementos al localStorage, la sintaxis siempre será una llave y un valor
localStorage.setItem('nombre', 'Jorvict');

sessionStorage.setItem('apellido', 'Piña');

/*  Para ubicar la información almacenada en localStorage, en Chrome ir a
    la pestaña "Application", y luego ir al desplegable "Local Storage" e ingresamos
    al dominio de nuestra web donde se ejecutó el almacenamiento en localStorage,
    cabe mencionar que visualizaremos un storage similar que se llama 
    "Session Storage", la diferencia entre estos 2 es que la data de Session
    Storage se eliminará una vez que cerremos el navegador mientras que Local
    Storage podrá mantenerse incluso luego de haber apagado la PC
*/

/*  En Firefox para ver la data de localStorage debemos ingresar en la pestaña
    "Almacenamiento", y luego en "Almacenamiento local" o "Almacenamiento de sessión"
    para localStorage y sessionStorage respectivamente
*/


localStorage.setItem('edad', '24');

/* 
    Tener en cuenta que sí colocamos números en el localStorage, estos se almacenaran
    como un string, localStorage solamente almacena strings por lo cual no podemos
    almacenar arrays ni objetos, sin embargo hay alternativas para poder almacenarlos
*/

// JSON.stringify convierte el objeto en un string
const producto = {
    nombre: 'Monitor de 24 pulgadas',
    precio: 300,
}

const productoString = JSON.stringify( producto );
// console.log(typeof productoString) Imprime que es string (a pesar de que era un objeto)

// Almacenar el objeto convertido en string en localStorage
localStorage.setItem('producto', productoString);

// Stringify también sirve para transformar arrays en strings
const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify( meses );
localStorage.setItem('meses', mesesString );

// Version alternativa para stringify
const meses2 = ['Abril', 'Mayo', 'Junio'];
localStorage.setItem('meses2', JSON.stringify( meses2 ));



// NOTA: Recordar que en setItem va llave, valor