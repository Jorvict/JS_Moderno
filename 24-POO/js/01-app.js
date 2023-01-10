// Definiendo e Instanciando una clase

// class declaration (Se utiliza más)
class Cliente {

    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const juan = new Cliente('Juan', 400);
console.log(juan);



// class expression
const Cliente2 = class {
    
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const jorvict = new Cliente2('Jorvict', 400);
console.log(jorvict);