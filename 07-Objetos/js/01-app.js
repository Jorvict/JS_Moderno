// Crear Objetos en JavaScript
/* En lugar de crear diferentes variables, en un objeto puedes agrupar
todo en una sola variable*/
const nombre = 'Monitor 20 pulgadas';
const precio = 300;
const disponible = true;

// Un objeto agrupa todo en una sola variable...
// La sintaxis del objeto es con llaves {}, y las llaves se asigna el valor con :
// Object literal
const producto = {
    nombre: 'Monitor de 20 Pulgadas',        // Propiedad / Llave del objeto
    precio: 300,           // Para agregar mas valores es obligatorio usar , al final
    disponible: true
}

console.log(producto);

/* Resumen: En lugar de crear 3 variables distintas, podemos crear un
objeto que almacene esos mismos valores, la sintaxis del objeto es que
al ser declara se colocan llaves {} y sus Propiedades o Llaves del objeto
se definen con el "nombre de la llave" + ":" + "El valor que se asignará
a la llave", recordar también colocar una coma "," luego de haber definido
una llave, esto para poder definir llaves adicionales, la última llave del
objeto no es necesario que tenga una coma*/