// Hoisting
/**
 * Se refiere a como funcionan los contectos de ejecución en Javascript
 * Existen 2 fases:
 *  ~ Una fase de creación: Se crean todas las variables y se registran,
 *      al igual que las funciones.
 *  ~ Una fase de ejecución: Se ejecutan las variables y funciones
*/

// Con function declaration puedes invocar la función y luego declararla
obtenerCliente('Jorvict');

function obtenerCliente(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}
/**
 * Esto es posible debido a que como Javascript se ejecuta en 2 fases, en
 * la primera fase registra las funciones y en la segunda fase las manda 
 * a llamar y es por ello que al usar function declaration no nos muestra
 * ningún error.
*/

// Con function expression
obtenerCliente2('Enrique');
const obtenerCliente2 = (nombre) => {

    console.log(`El nombre del cliente es ${nombre}`);
}


/* 
    En la primera vuelta: JS escanea este documento, registra todas las
        funciones y determina que variables va a crear, a esta etapa se 
        le conoce como LA ETAPA DE CREACIÓN 
    En la segunda vuelta: Es la etapa de ejecución, por lo cual si
        mandamos a llamar a la función sumar en la segunda vuelta
        esta se ejecutará con normalidad ya que ya ha sido registrada
        en la primera vuelta.

    Sin embargo la función obtenerCliente2 muestra error debido a que al
    momento de la segunda vuelta, se ha definido la función y la
    variable pero no se ha asignado la funcion a la variable obtenerCliente2 
    para el momentoen el que se invocado, es decir, es como si el flujo de 
    depuración fuera de la siguiente forma:

    const obtenerCliente2;

    obtenerCliente2(); (undefined) <- Aquí se detiene la ejecución
                                    (Antes de poder asignar la función)

    obtenerCliente2 = function(){xxxxxx} 
    (Recién en este punto se aisnaría la función a la variable, luego
        de que ya se detuvo el flujo de ejecución)

    Devolverá error debido a que no se le ha definido y asignado el
    valor de la función a la variable.

    OJO: Esto ocurre porque se llama a la funcion antes de ser definida
    en Function Expression, si la función se llama luego de ser
    definida, entonces se ejecutará con normalidad.

En el caso de Function Declaration, la función puede ser llamada antes
de definirla sin ninún inconveniente.
Las Function Expression son regularmente utilizadas en React 

Considerar esta información ya que una pregunta de entrevista podría
ser validar que un codigo parecido al anterior e indicar que funcion
se ejecutaría correctamente y cual no*/