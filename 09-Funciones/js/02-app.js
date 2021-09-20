// La Diferencia entre Function expression y Declaration

// ============= Declaración de función ( Function Declaration)
sumar();
function sumar() {
    console.log(2 + 2);
}

// ============= Expresión de función (Function Expression)
sumar2();
const sumar2 = function(){
    console.log(3 + 3);
}

/* Según el ejemplo desarrollado, la función sumar si retorna 4 pero
la función 2 muestra error, esto es debido a que JS se ejecuta en 
"2 vueltas" (se le conoce como "Hoisting").
    En la primera vuelta: JS escanea este documento, registra todas las
        funciones y determina que variables va a crear, a esta etapa se 
        le conoce como LA ETAPA DE CREACIÓN 
    En la segunda vuelta: Es la etapa de ejecución, por lo cual si
        mandamos a llamar a la función sumar en la segunda vuelta
        esta se ejecutará con normalidad ya que ya ha sido registrada
        en la primera vuelta.

    Sin embargo la función sumar2 muestra error debido a que al
    momento de la segunda vuelta, se ha definido la función y la
    variable pero no se ha asignado la funcion a la variable sumar2, es
    decir, es como si el flujo de depuración fuera de la siguiente forma:

    const sumar2;

    sumar2();

    Devolverá error debido a que no se le ha definido y asignado el
    valor de la función a la variable.

    OJO: Esto ocurre porque se llama a la funcion antes de ser definida
    en Function Expression, si la función se llama luego de ser
    definida, entonces se ejecuará con normalidad.

En el caso de Function Declaration, la función puede ser llamada antes
de definirla sin ninún inconveniente.
Las Function Expression son regularmente utilizadas en React 

Considerar esta información ya que una pregunta de entrevista podría
ser validar que un codigo parecido al anterior e indicar que funcion
se ejecutaría correctamente y cual no*/