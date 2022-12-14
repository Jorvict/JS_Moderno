// Definiendo e Instanciando una clase

// class expression (Se utiliza más)
class Cliente {

    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const jorvict = new Cliente('Juan', 400);
console.log(jorvict);



// class declaration
const Cliente2 = class {
    
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const juan2 = new Cliente2('Jorvict', 400);
console.log(juan2);