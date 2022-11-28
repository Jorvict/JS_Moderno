// Que es el prototype y crear un tipo de objeto nuevo

// Object literal, no te permite crear objetos dinámicos ni reutilizables
const cliente = {
    nombre : 'Juan',
    saldo: 500,
}

console.log(cliente);
console.log(typeof cliente);


// Object constructor, si te permite crear objetos dinámicos y reutilizables
function Cliente(nombre, saldo){ // <- Este es el constructor
    this.nombre = nombre;
    this.saldo = saldo;
}

const jorvict = new Cliente('Jorvict', 500);

console.log(jorvict);