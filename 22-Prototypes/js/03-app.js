// Creando un prototype

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

// Instanciarlo
const enrique = new Cliente('Enrique', 6000);

// Para utilizar el prototype es exactamente igual que un método / función
console.log(enrique);
console.log( enrique.tipoCliente() );
console.log( enrique.nombreClienteSaldo() );
enrique.retiraSaldo(1000);
console.log( enrique.nombreClienteSaldo() );

/* NOTA: Al definir un nuevo prototype, se establece con
function y no con un arrow function, esto debido a que el
arrow function se va a ir al scope global y no podrá hacer
referencia al "this" que se encuentra dentro del objeto al que
pertenece el prototype. Es decir, el "function" buscará en el 
objeto actual y el arrow function en la ventana global. Podrías
utilizar un arrow function siempre y cuando no hagas referencia
a un this */