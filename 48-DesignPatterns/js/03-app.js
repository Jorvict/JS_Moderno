// Singleton Pattern - Categoría: De creación
/**
 * La característica principal del Singleton es no te va a permitir
 * crear múltiples instancias de una misma clase, y sí lo intentas
 * lo que hará es retornar el objeto previamente instanciado. En
 * algunas ocasiones puede ser bastante útil tener un objeto con
 * toda la información para evitar crear múltiples instancias
 */

let instancia = null;

class Persona{

    constructor(nombre, email){
        
        /**
         * Para cumplir la condición if (!instancia), instancia debe 
         * ser evaluada como un valor falsy. En JavaScript, los 
         * valores falsy son aquellos que se consideran como falsos 
         * en un contexto booleano. Los valores falsy incluyen false, 
         * 0, '' (una cadena vacía), null, undefined y NaN
         */
        if(!instancia){
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            
            return instancia;
        }
    }
}

const persona = new Persona('Jorvict', 'correo@correo.com');
console.log(persona);

const persona2 = new Persona('Enrique', 'enrique@enrique.com');
console.log(persona2);