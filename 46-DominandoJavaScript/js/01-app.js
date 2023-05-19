// Scope
 /**
  * Se define como el alcance de una variable, es decir, es cuando creas una
  * variable y puede ser vista ya sea por una función o por un bloque de
  * código, existen 2 tipos de Scope, el Scope Global y el Scope en una función
  * o en un bloque de código
  */

 const cliente = 'Jorvict';
 
 
 function mostrarCliente(){
     
     // Esta variable de cliente solo existirá dentro de este bloque de código
     /**
      * Puedes tener n variables const que se llamen igual siempre y cuando
      * estén en scopes distintos, por ejemplo el siguiente const ya está
      * declarado de manera global pero el siguiente const al estar en otro 
      * scope es válido nombrar un segundo const con el mismo nombre, tener
      * en consideración que lo que ejecutes en el bloque de código respecto
      * a esa variable siempre priorizará al que está dentro del bloque
      * y no a la variable global, por lo cual en este caso el console.log
      * imprimirá Enrique y no Jorvict, solo imprimirá Jorvict si eliminamos
      * el const cliente que se encuentra dentro del bloque
      */
    const cliente = 'Enrique';
    console.log(cliente);
}

mostrarCliente();

// Otro ejemplo

// Scope Global
const login = true;

function clienteLogueado(){

    const cliente = 'Jed';
    console.log(cliente);

    if(login){

        // Scope por bloque
        // console.log(cliente); Si lo ponemos antes de definir la variable
        // dará error debido a que no se ha declarado
        const cliente = 'Admin';
        console.log(cliente);
    }
}
clienteLogueado();