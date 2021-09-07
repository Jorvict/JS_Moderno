// Agregar o Eliminar Propiedades de un objeto
const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true,
}

// Agregar nuevas propiedad al objeto
/* En éste caso como ya estamos por fuera del objeto, sí es necesario
    utilizar "=" en vez de ":" al momento de asignar valor a la variable */
producto.imagen = 'imagen.jpg';

// Eliminar propiedades / llave del objeto
delete producto.disponible;

console.log(producto);