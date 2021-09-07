// Destructuring de Objetos
const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true,
}

// Extraer el valor de la llave y asignarlo a una variable - Método Obsoleto
// const nombre = producto.nombre;
// console.log(nombre);

// Object destructuring (Extraer del objeto y crear variable, todo en el mismo paso)
// {(nombre de la(s) llave(s) a extraer)} = (objeto del cual se extraerá)
const {nombre, precio, disponible,noExiste} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(noExiste); // Mostrará undefined ya que se crea la variable pero el valor que se debería asignar no existe
