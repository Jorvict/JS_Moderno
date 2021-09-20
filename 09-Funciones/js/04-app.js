// La Diferencia entre Función y Método
const numero1 = 20;
const numero2 = '20';

// Esto es una función (nombre seguido de () y se pasa la variable)
console.log( parseInt( numero2 )); 

// Esto es un método (Variable seguido de . y nombre del método)
console.log( numero1.toString() ); 


// Un Ejemplo más que les puede ayudar a comprender un poco mejor.

// ======== Función =========
function funcionSaludar(nombre){
    console.log(`Hola ${nombre} desde una Función`);
}

// ======== Método =========
const metodo = {
    saludar: function(nombre){
        console.log(`Hola ${nombre} desde un Método`);
    },
    saludar2: function(nombre, apellido) {
        console.log(`Hola ${nombre} ${apellido}`);
    }
}
 
funcionSaludar('Juan');
metodo.saludar('Juan');
metodo.saludar2(`Jorvict`, `Piña`);