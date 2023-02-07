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
cliente.set(true, true);
cliente.set([0], true);

console.log(cliente);

// Conocer la extensión o cuantos elementos hay en el map
console.log(cliente.size);

// Comprobar si un valor existe
console.log(cliente.has('nombre')) // Retorna true
console.log(cliente.has('apellido')) // Retorna false

// Para obtener un valor debemos buscar con el nombre de la key
console.log(cliente.get('nombre'));
console.log(cliente.get('saldo'));

// Eliminar valor del map
cliente.delete('saldo');
console.log(cliente.has('saldo'));
console.log(cliente.get('saldo'));

// Limpiar el map
cliente.clear();
console.log(cliente);


// ===== Inicializar un map con valores ======
const paciente = new Map([ ['nombre', 'paciente'], ['cuarto', 'no definido'] ]);
paciente.set('dr', 'Dr Asignado');
paciente.set('nombre', 'Antonio'); // Antonio sobreescribió paciente
console.log(paciente);


// Al iterar el set, el primer parametro retorna el valor, 
// y el segundo (index) retorna las llaves/keys
paciente.forEach( (datos, index) =>{
    console.log(index);     // Llave
    console.log(datos);     // Valor
});

/* NOTA: Sí vas a trabajar con agregar o eliminar elementos 
entonces un map tendrá mucho mejor performance que un objeto */