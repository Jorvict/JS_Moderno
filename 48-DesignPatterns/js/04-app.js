// Factory Pattern - Categoría: De creación
/**
 * Es una forma de crear objetos basados en ciertas condiciones, es decir
 * van a compartir algunos atributos pero en base a esas condiciones
 * esos atributos algunos se re-utilizan pero otros son diferentes.
 */

class InputHTML{

    constructor(type, nombre){

        this.type = type;
        this.nombre = nombre;
    }

    crearInput(){
        return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}">`;
    }
}

class HTMLFactory{

    crearElemento(tipo, nombre){
        
        switch (tipo) {
            case 'text':
                return new InputHTML('text', nombre);

            case 'tel':
                return new InputHTML('tel', nombre);

            case 'email':
                return new InputHTML('email', nombre);
        
            default:
                break;
        }
    }
}

const elemento = new HTMLFactory();
const inputText = elemento.crearElemento('text', 'nombre-cliente');
console.log(inputText.crearInput());

const elemento2 = new HTMLFactory();
const inputText2 = elemento2.crearElemento('tel', 'telefono-cliente');
console.log(inputText2.crearInput());

const elemento3 = new HTMLFactory();
const inputText3 = elemento3.crearElemento('email', 'email-cliente');
console.log(inputText3.crearInput());