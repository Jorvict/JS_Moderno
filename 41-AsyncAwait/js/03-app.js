// Async Await en Function Expression y Declaration
/*
    En caso de Function Expression el async va ántes del parentesis
    de la función padre.

    En caso de Function Declaration el async va ántes del function
    de la función padre
*/
function descargarClientes() {
    
    return new Promise((resolve, reject) => {

        const error = false;

        setTimeout(() => {
            
            if(!error){
                resolve('El listado de clientes se descargó correctamente');
            } else {
                reject('Error en la conexión');
            }
        }, 3000);
    });
}

// Async await Function Expression
const ejecutar = async () => {

    try {
        console.log(1+1)
        const respuesta = await descargarClientes();

        console.log(2+2);
        console.log(respuesta);
    } catch (error) {
        console.log(error)
    }
}
ejecutar();


// Async await Function Declaration
async function ejecutar2(){
    
}