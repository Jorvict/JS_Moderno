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


// Cambiar nombre a llave usando alias y concatenar con template literals
const {nombre: names, precio: price} = producto;
 
console.log(`${names} Precio: $ ${price}`);
console.log(names);
console.log(price);

// Object destructuring 1
const localizacion = {
    continente : 'América',
    pais : 'Perú',
    ciudad : 'Lima'
}

const {continente, pais, ciudad} = localizacion;
console.log(continente);
console.log(pais);
console.log(ciudad);

// Object destructuring 2
const mobiliaria = {
    inmueble : 'Casa',
    habitaciones : 3,
    baños: 2
}
const {inmueble, habitaciones, baños} = mobiliaria;

console.log(inmueble);
console.log(habitaciones);
console.log(2);