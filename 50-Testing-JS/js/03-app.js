// Probando Código Asincrono
/**
 * Usar Promises para que en caso se cumpla o no la condición, aceptar
 * o rechazar la prueba que estamos realizando.
 */

function suma(a, b){
    debugger;
    return a + b;
}

function restar(a, b){
    return a - b;
}

async function sumaAsync(a, b){
    debugger;
    return Promise.resolve( suma(a, b) );
}

function expected( esperado ){

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

async function test(mensaje, callback){

    try {
        debugger;
        await callback();
        debugger;

        console.log(`El Test: ${mensaje} se ejecutó correctamente`);
    } catch (error) {
        console.error('Error:');
        console.error(error);
    }
}


// let resultado = suma(1, 2);
// let esperado = 3;
// expected(esperado).toBe(resultado);

// resultado = restar(10, 5);
// esperado = 5;
// expected(esperado).toBe(resultado);
// expected(esperado).toEqual(resultado);

debugger;
// Sintaxis similar a Jest utilizando código asíncrono
test('Suma 10 + 20 y el resultado debe ser 30', async () => {
    debugger;
    const resultado = await sumaAsync(10, 20);
    const esperado = 30;
    expected(esperado).toBe(resultado);
})

// Flujo referencial de ejecución de los return 67->46->70->17->8->48