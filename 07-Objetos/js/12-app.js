// El Object Constructor
/* Sirve para automatizar un poco la creación de los objetos, de esta
forma no tendremos que escribir el mismo código para cada objeto
del mismo tipo*/

// Object Literal
const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true
}

// Object Constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

// Estamos creando nuestro constructo para cada producto, en este ejemplo
// los datos se almacenaran en la variable producto2, usando como prototipo
// la estructura de Producto
const producto2 = new Producto('Monitor de 24 pulgadas', 500);
console.log(producto2);

const producto3 = new Producto('Television', 100);
console.log(producto3);
/* Debido a que el constructor tiene la referencia a sí mismo (this), los
valores que se asignaran a cada atributo no se cruzaran con los valores 
valores de los atributos de otros objetos */

/* Nota: Aunque el Object Constructor es más dinamico, se suele utilizar
mas el Object Literal*/
