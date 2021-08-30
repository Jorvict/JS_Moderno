/* Existen 3 formas de declarar variables pero en la actualidad solo
2 son las más utilizadas, por el momento se explicara sobre las
variables var */

// Inicializar una variable con un valor
var producto = 'Monitor de 24 pugadas';
console.log(producto);

// Las variables se pueden reasignar
producto = 'Monitor de 18 pulgadas';
console.log(producto);

// JavaScript es un lenguaje de tipo dinamico, no se especifica tipo de dato
producto = 20;
console.log(producto);


// Se pueden inicializar sin valor y asignarlo despues
var disponible;
disponible = true;

disponible = false;

// Inicializar multilples variables utilizando solo un var
var categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificacion =  5;

// Una variable puede contener letras, guiones bajos y números pero
// no pueden iniciar con un número.
// var 99dias; incorrecto
var dias99; // correcto
// var 01_; incorrecto
var _01; // correcto
var _usuario;
var __usuario;


// Estilos para crear variables con más de una palabra
var nombreProductoCategoriaPrecio; // Esta es la mas recomendada
var nombre_producto_categoria_precio;
var NombreProducto;