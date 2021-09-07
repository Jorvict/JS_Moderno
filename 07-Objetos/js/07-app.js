// El Problema con los objetos
/* Una variable const no puede reasignarse, sin embargo a un objeto
si se le pueden reasignar sus propiedades / llaves */
const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true,
}

producto.disponible = false;
console.log(producto);

/* Esto ocurre debido a que una variable aunque este declara como const
al estar en un objeto, sus propiedades si se pueden reescribir o eliminar*/
delete producto.precio;
console.log(producto);
