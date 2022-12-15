// Heredar una clase
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

// Herencia: colocamos extends y luego el nombre de la clase que queremos heredar
class Empresa extends Cliente {

    // Agregar campos extras que no se incluyen en la clase heredada
    // NOTA: Debemos usar una función llamada super y pasarle los atributos
    // que deseamos heredar, para que pueda ir a la clase padre y buscar dichos atributos.
    constructor(nombre, saldo, telefono, categoria){

        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    // Nota: Al definir un método en la clase hijo con un mismo nombre de un método 
    // de la clase padre lo que sucederá es que ese método de la clase hijo sobreescribirá
    // el método heredado
    static bienvenida(){
        return `Bienvenido al cajero de empresas`
    }
}

const jorvict = new Cliente('Jorvict', 400);
const empresa = new Empresa('Código con jorvict', 500, 987456312, 'Aprendizaje en línea');
console.log(empresa);
console.log(empresa.mostrarInformacion());
// NOTA: Sí un método no existe al momento de ser llamado, pero si existe en la clase
// padre, entonces ejecutará la función heredando el método de la clase padre


console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
// NOTA ADIC.: Que un método hijo sobrereescriba a un método de la clase padre no 
// significa que el método de la clase padre se va a modificar
