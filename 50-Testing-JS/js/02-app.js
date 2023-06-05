// Más funciones a nuestro Framework
function suma(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

// Recordar que si resultado y esperado no coinciden, hay algo mal
let resultado = suma(1, 2);
let esperado = 3;
expected(esperado).toBe(resultado);

resultado = restar(10, 5);
esperado = 5;
expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);


function expected( esperado ){

    // Esta sintaxis se conoce como factory function, es una función
    // que retorna un objeto con varias funciones a las cuales podremos
    // acceder una vez que sea llamada la función principal (expected)
    return{
        toBe(resultado){

            if(resultado !== esperado){
                console.error(`El resultado es diferente a lo esperado, el resultado fue ${resultado} y lo esperado era ${esperado}. La prueba no pasó`);
            } else{
                console.log('La prueba pasó correctamente');
            }
        },
        toEqual(resultado){

            if(resultado !== esperado){
                console.error(`El resultado no es igual a lo esperado, el resultado fue ${resultado} y lo esperado era ${esperado}. La prueba no pasó`);
            } else{
                console.log('La prueba pasó correctamente');
            }
        }
    }
}