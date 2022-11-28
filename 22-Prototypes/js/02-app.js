// El problema de no usar Prototypes

// ==========   Cliente   ==========
// Object constructor, si te permite crear objetos dinámicos y reutilizables
function Cliente(nombre, saldo){ // <- Este es el constructor
    this.nombre = nombre;
    this.saldo = saldo;
}

const jorvict = new Cliente('Jorvict', 500);

function formatearCliente(cliente){
    // Destructuring para no poner cliente.nombre y cliente.saldo 
    // (Deben ser los mismos nombres declarados en el constructor)
    
    const { nombre, saldo } = cliente; 
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}
console.log( jorvict );
console.log( formatearCliente(jorvict) );

// ==========   Empresa   ==========
function Empresa(nombre, saldo, categoria){ // <- Este es el constructor
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}
function formatearEmpresa(empresa){
    const { nombre, saldo, categoria } = empresa; // Destructuring para no poner cliente.nombre y cliente.saldo
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoría ${categoria}`;
}

const CCJ = new Empresa('Código con Jorvict', 4000, 'Cursos en Línea');
console.log(formatearEmpresa(CCJ));

// A pesar de ser empresa, se le puede aplicar funcion de cliente
// Lo cual no es óptimo
console.log( formatearCliente(CCJ) );

/* El problema cuando tienes un proyecto donde muchas personas
le dan mantenimiento al mismo código, existe la posibilidad de que
no sepan que funciones deben de utilizar para Empresa o cuales
son exclusivas de Cliente y si comienzan a agregar muchas funciones
no todos van a estar documentando, lo cual va a llevar al punto
de que no van a saber que funcion corresponde a que objeto.
Lo que soluciona el prototype es que puedes agregar funciones
que son EXCLUSIVAS de Cliente y no se podrán utilizar en empresa
o viceversa.

    NOTA: Sí es un proyecto pequeño con 3 o 4 funciones, no es
    recomendable utilizar prototype, pero si es un proyecto donde
    van a colaborar varias personas y van a haber muchos objetos
    distintos, entonces si es recomendable utilizar prototype.
*/