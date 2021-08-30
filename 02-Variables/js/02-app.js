 /* var era la forma de crear variables en versiones anteriores de
 ecmascript, hoy en día las opciones se reducen a 2, let y const,
 en la actualidad se recomienda más usar estos 2 y no var*/

// Declarar la variable y asignarle valor
let producto = 'Tablet';

// Reasignar el valor
producto = 'Monitor';
producto = 20;
producto = true;
producto = null;

console.log(producto);


let precio = 300;

console.log(precio);

/* La diferencia entre let y var es el scope de las variables */
/* El scope basicamente define desde donde puedes acceder a tus variables, 
con var, puedes acceder a ella desde donde sea, con let no, tienes que 
pensar bien donde la necesitas. */
