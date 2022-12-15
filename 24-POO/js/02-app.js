// Métodos y métodos estáticos en las classes

class Cliente {

    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    // Estas propiedades estáticas para mostrarlas no requieren una instancia
    static bienvenida(){
        return `Bienvenido al cajero`
    }

}

const jorvict = new Cliente('Jorvict', 400);
console.log(jorvict.mostrarInformacion());
console.log(jorvict);

// No requiere ser instanciada, se deben llamar desde la clase
console.log(Cliente.bienvenida()); 

// Mostrara error porque el método estático pertenece mas bien a la clase y no
// al objeto instanciado (jorvict)
// console.log(jorvict.bienvenida()); 



// class declaration
const Cliente2 = class {
    
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}

const jorvict2 = new Cliente2('jorvict', 400);
console.log(jorvict2.mostrarInformacion());
console.log(jorvict2);