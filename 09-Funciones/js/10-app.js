// Arrow Functions

// Function Expression
/* Recordar que la function expression se crea asignando la funcion a
una variable */
const aprendiendo = function () {
    console.log(`Aprendiendo JavaScript`);
}

// Arrow function
/*  La palabra "function" se elimina y se sustituye por "=>" el cual
        irá a la derecha de los parentesis. 
    Los parentesis se mantienen ya que ahí es donde pasaremos 
        los parametros a la función.
    Cuando tienes una arrow function que solo tiene una línea de 
        código, entonces las llaves de la función ya no son necesarias.
    Igualmente cuando el arrow function tiene solo una línea de código
        dan por ímplicito el return

*/
const aprendiendo2 = () => `Aprendiendo JavaScript`;

console.log(aprendiendo2());

/* Recordar que al usar arrow functions, la palabra function se
elimina y se coloca el simbolo => a la derecha del parentesis. 
El parentesis se mantiene, y cuando la función solamente tiene una
línea de código, las llaves son opcionales y se da por implicito el
return */