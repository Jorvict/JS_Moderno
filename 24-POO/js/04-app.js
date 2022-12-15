// Propiedades privadas en JavaScript

// Atributos públicos: Puedes acceder a ellos dentro de la clase o del objeto
// Atributos privados: Solamente se puede acceder a ellos dentro de la clase.

// Anteriormente se colocaba un guion bajo al inicio del nombre de una variable
// para especificar que era una variable privada (aunque no existiera dicha funcion)
// ya que se podia acceder con normalidad a la variable a través de la consola.

// En la actualidad ya existe la función de atributo privado y consiste en agregar
// un # al inicio de la variable.

class Cliente {

    // Esto es una propieda privada y solamente se podrá acceder desde la
    // misma clase, haciendo uso de un atributo (get, set, constructor o método)
    #nombre;

    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }

    // Estas propiedades estáticas para mostrarlas no requieren una instancia
    static bienvenida(){
        return `Bienvenido al cajero`
    }
}

const jorvict= new Cliente('Jorvict', 2000);


// =========== Forma incorrecta de acceder a una propiedad privada ===========
// Marca error ya que se está accediendo a una propiedad privada desde la consola
// console.log(jorvict.#nombre); 


// =========== Forma correcta de acceder a una propiedad privada ===========
console.log(jorvict.mostrarInformacion()); 
// Si va a poder acceder a la propiedad privada ya que se accedió a el a través
// de un método que está definido dentro de la clase



// =========== Ejemplo con get y set ===========
class Cliente2 {

    #nombre2;

    setNombre(nombre){
        this.#nombre2 = nombre;
    }
    getNombre(){
        return this.#nombre2;
    }
}

const jorvict2 = new Cliente2();
jorvict2.setNombre('Jorvict Jed');
console.log( jorvict2.getNombre() );