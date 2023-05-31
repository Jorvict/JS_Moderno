/**
 * console.log(module1.nombre) Ejemplo module 05
 * module1.hola(); Ejemplo module 05
 */

// Mixin Pattern
/**
 * Es una forma de agregar funciones a una clase una vez que ha sido
 * creada
 */

class Persona{

    constructor(nombre, email){

        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente{

    constructor(nombre, email){

        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {

    mostrarInformacion(){
        console.log(`Nombre persona: ${this.nombre} Email: ${this.email}`)
    },
    mostrarNombre(){
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

console.log(funcionesPersona)

// Añadir funcionesPersona a la Class de Persona
/**
 * Al usar Object.assign() estamos asignando las funciones que se 
 * encuentran dentro del objeto funcionesPersona al Prototype de las 
 * Clases Persona y Cliente. Ahora estas funciones pasan a ser metodos 
 * de dichas Clases.
 */
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);


// Instanciamos las Classes
/**
 * Cuando se instancia (Al crear un objeto con el constructor de la Clase, 
 * este objeto tiene acceso a los distintos metodos que solo existen en la
 * Clase) las Clases Personas y Cliente, después usamos los metodos que 
 * previamente fueron agregados con el Object.assign, y estos metodos 
 * son los que nos imprimen en la consola las distintas propiedades de 
 * las instancias gracias a que usamos el this (el this hace referencia 
 * al objeto).
 */
const cliente = new Persona('Jorvict', 'correo@correo.com');
console.log(cliente);
cliente.mostrarInformacion();
cliente.mostrarNombre();

const cliente2 = new Cliente('Enrique', 'cliente@cliente.com')
console.log(cliente2);
cliente2.mostrarInformacion();
cliente2.mostrarNombre();


/**
 * Es similar a composition, sin embargo es mas sencillo, composition
 * es un poco más avanzado, además Mixin se desarrolla con Classes
 * mientras que composition utiliza unicamente funciones
 */

/**
 * NOTAS ADICIONALES:
 *  ~ Instancia: Se refiere a la creacion de un objeto con el constructor 
 *      de una Clase y esta instancia ahora tiene acceso a los diferentes 
 *      métodos que la Clase posee.
 *  ~ Prototype: Conjunto de metodos (funciones) exclusivos para ese tipo 
 *      de objeto.
 *  ~ Métodos: Se llaman metodos a las funciones que estan dentro de objetos.
 */