// Symbols y sus caracteristicas
// Permiten crear una propiedad única, no hay dos symbols que sean iguales

const sym = Symbol('1');
const sym2 = Symbol('1');

if(sym === sym2){
    console.log('Son iguales');
} else {
    console.log('Son diferentes'); // Retornará que son diferentes
}

console.log( Symbol() === Symbol()); // Retorna false

// Otro ejemplo
const nombre = Symbol();
const apellido = Symbol();
const persona = {};

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Jorvict'; // Se agrega como un symbol
persona[apellido] = 'Piña'; // Se agrega como un symbol
persona.tipoCliente = 'Premium'; // Se agrega como una propiedad normal
persona.saldo = 500; // Se agrega como una propiedad normal

// Para acceder al valor del symbol nombre
console.log(persona[nombre]);
console.log(persona);

// Las propiedades que utilizan un symbol NO son iterables
for(let i in persona){
    console.log(i); // Solo imprime las propiedades tipoCliente y saldo
}

// Definir una descripción del symbol
// Lo que se pasa en el constructor del Symbol será la descripción
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};

cliente[nombreCliente] = 'Pedro';

console.log(cliente);
console.log(cliente[nombreCliente]); // Imprime el valor del Symbol
console.log(nombreCliente); // Imprime la descripción del Symbol


// ===== Ejemplo generado por GPT =====
const id = Symbol('id');
const nombreUsuario = Symbol('nombreUsuario');

class User {
  constructor(nombreUsuario) {
    this[id] = Math.random().toString(36).substr(2, 9);
    this[nombre] = nombreUsuario;
  }
}

const user = new User('John Doe');

console.log(user[id]); // Generado aleatoriamente
console.log(user[nombre]); // "John Doe"

/* En este ejemplo, utilizamos dos symbols como propiedades 
privadas para una clase User. Los symbols son valores únicos que 
pueden ser utilizados como identificadores y garantizan que las 
propiedades de un objeto sean únicas y no puedan ser sobrescritas 
accidentalmente. Además, no se pueden acceder directamente a ellas 
como propiedades públicas de un objeto, lo que los hace ideales 
para propiedades o métodos privados.*/