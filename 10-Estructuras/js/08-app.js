// Detener la ejecución de un if con una función

const autenticado = true;

if(autenticado){
    console.log('El usuario está autenticado');
}

const puntaje = 500;

function revisarPuntaje() {
    if(puntaje > 400){
        console.log('Excelente!!!');
        return;
        /* Como está dentro de una función, al momento de ejecutarse el
        return deja de ejecutarse la función y el resto del código deja de
        ejecutarse por lo cual la otra condicional ya no se ejecuta.
        Cabe recalcar que esto solo funciona cuando las condiciones
        se están ejecutando dentro de una función. En otroas palabras,
        para la ejecución del código en esa linea. */
    }
    
    if (puntaje > 300){
        console.log('Buen puntaje... felicidades');
        return;
    }
}

revisarPuntaje();