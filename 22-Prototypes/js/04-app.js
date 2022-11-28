// Heredar un prototype
function Cliente(nombre, saldo){ // <- Este es el constructor
    this.nombre = nombre;
    this.saldo = saldo;
}

// Generar un prototype para un objeto en específico
Cliente.prototype.tipoCliente = function(){
    
    let tipo;

    if(this.saldo > 10000){
        tipo = 'Gold';
    } else if (this.saldo > 5000){
        tipo = 'Platinum';
    } else {
        tipo = "Normal";
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function(){

    // Dentro de un prototype se puede hacer referencia a otro prototype como si fuera un método
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
}

// ==========   Persona   ==========

function Persona(nombre, saldo, telefono){
    
    // Heredar de Cliente a Persona
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

// Se debe heredar las funciones delos prototypes antes de realizar 
// una instancia, caso contrario marcará error

// Pasamos todo el prototype de Cliente al prototype de Persona
Persona.prototype = Object.create( Cliente.prototype );
// Persona.prototype.constructor = Cliente;
Persona.prototype.constructor = Persona;

// Instanciar
const jorvict = new Persona('Jorvict', 5000, 987654321);
console.log(jorvict);
console.log(jorvict.nombreClienteSaldo());

// Esta funcion estará en Persona pero no en Cliente
// Ya que heredamos de Cliente a Persona, pero no de Persona a Cliente
Persona.prototype.mostrarTelefono = function(){
    return `El teléfono de ésta persona es ${this.telefono}`;
}

console.log(jorvict.mostrarTelefono());