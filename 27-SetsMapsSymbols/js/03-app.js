// Que son los maps
/* Son listas ordenadas en llave y valor, piensa en ellos como un
objeto pero un objeto con una sola propiedad, es decir, una llave
y un valor, la llave y el valor pueden ser cualquier tipo de dato,
los maps tienen mejor perfomance que un objeto, son especialmente
diseñados para agregar o quitar elementos o también para recorrerlos
también cuando son muy grandes tienen mucho mejor performance que 
un objeto*/

const cliente = new Map();

// Agregar valor en el map
cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

console.log(cliente);