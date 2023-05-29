// Constructor Pattern
/**
 * En éste patrón de diseño se utiliza una clase base que
 * sirve como "plano" para que las demás clases hereden
 * sobre esta. Dígamos que es como tener una classe
 * principal y desde esta vamos heredando a las demás
 * y así esta sea utilizada como base. En otros lenguajes
 * de programación se conocen como Classes abstractas, no
 * se pueden instanciar en JS debido a que aún no hay
 * soporte. Basicamente es definir la Classe padre y heredar
 * desde ella, de eso trata el constructor pattern. Tener
 * en cuenta que muchas personas dicen que tener una clase
 * principal y heredar todo los demás objetos de ella
 * se le conoce como un anti-patrón
 */

class Persona{

    constructor(nombre, email){

        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona{

    constructor(nombre, email, empresa){

        // Heredamos y reutilizamos el
        // constructor padre
        super(nombre, email);
        
        // Definiendo nuevos atributos en el 
        // constructor hijo
        this.empresa = empresa; 
    }
}

const persona = new Persona('Enrique', 'correo@correo.com');
console.log(persona);

const cliente = new Cliente('Jorvict', 'cliente@cliente.com', 'Código con Jorvict');
console.log(cliente);