// String Methods - Convertir a Mayusculas o Minusculas
const producto = 'Monitor de 20 Pulgadas';

// Convierte a mayusculas
console.log(producto.toUpperCase());

// Convierte a minusculas
console.log(producto.toLowerCase());

// En el caso de email, se recomienda transformarlo a minusculas antes
// de enviarlos a la BD ya que los correos son únicos y no afecta si
// están en mayuscula o minuscula
const email = 'CORREO@CORREO.COM';
console.log(email.toLowerCase());

const precio = 300;
console.log(precio); // Si esta de color azul en la consola, es un dato numerico
console.log(precio.toString());
