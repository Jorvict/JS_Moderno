// ¿Cómo manejar múltiples Awaits?

function descargarNuevosClientes(){

    return new Promise( resolve => {

        console.log('Descargando clientes...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados')
        }, 5000);
    });
}

function descargarNuevosPedidos(){

    return new Promise( resolve => {

        console.log('Descargando pedidos...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados')
        }, 3000);
    });
}


const app = async () => {

    /* 
        Sí estás intentando acceder a la data de 2 endpoints esto
        no es recomendable para el performance puesto que según el código,
        primero debera TERMINAR de ejecutarse la función 
        descargarNuevosClientes para que RECIÉN se empiece a ejecutar la
        función descargarNuevosPedidos. En otras palabras, al momento de
        ejecutar la función descargarNuevosClientes, la ejecución queda
        en pausa durante 5 segundos plazo de tiempo en el que también
        se podría estar extrayendo la data de pedidos ejecutando la
        función descargarNuevosPedidos, en ALGUNAS OCASIONES eso está
        bien y es correcto, como por ejemplo cuando necesitas un
        resultado específico para utilizarlo en una consulta hacia otro
        endpoint, pero en éste caso son CONSULTAS INDEPENDIENTES, así que
        nada tiene que ver una con la otra, algo que podemos realizar para
        evitar esto y mejorar el performance es acceder a la ejecución 
        de ambos endpoints en paralelo.
    */
    /* 
        try {
            const clientes = await descargarNuevosClientes();
            console.log(clientes);

            const pedidos = await descargarNuevosPedidos();
            console.log(pedidos);

        } catch (error) {
            console.log(error);
        }
    */

    // Ejecución en paralelo
    // Promise.all toma un arreglo de diferentes Promises que quieres ejecutar
    // Puedes agregar la cantidad que desees y todas se ejecutarán en paralelo
    try {

        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);
        console.log(respuesta[0]);
        console.log(respuesta[1]);
    } catch (error) {
        console.log(error);
    }

    /*
        RECORDAR: Utilizar esta sintaxis solamente cuando tengas 2 o más
        funciones que sean independientes, es decir que no requieran el
        resultado de una consulta previa para realizarse, en otro caso
        sí es válido la otra sintáxis
    */
}
app();