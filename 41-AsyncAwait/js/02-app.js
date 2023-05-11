// Primer ejemplo de Async Await y que es lo que hace
/*
    La sintaxis de Async Await consiste en que Async siempre deberá
    la función PADRE, es decir la función sobre la cual se está
    ejecutando el Promise, si el Promise está función como un
    callback para alguna función entonces el Async va sobre la función
    donde se hace el llamado de la función con callback Promise,
    en éste caso el Async va en la función "ejecutar". 

    Y await se utiliza en la parte que va a esperar a que se ejecute
    el promise, lo que realiza es detener el flujo de ejecución del
    código de JS y esperará hasta que tenga una respuesta del Promise,
    mientras no se ejecute por completo la función indicada y no se 
    tenga una respuesta no reanudará el flujo de ejecución del código,
    por ejemplo en el caso actual se mandará a llamar la función
    descargarClientes la cual tiene un temporizados de 3 segundos
    hasta que se ejecute la estructura condicional, lo que hará el
    await es esperar a que transcurran los 3 segundos y esperar a que
    finalice la ejecución de la función y recibir la respuesta de 
    la función descargarClientes antes de seguir con la ejecución del 
    código, se puede decir que "bloquea" el flujo de ejecución hasta
    que se resuelva el Promise (independientemente de si cae en el
    Resolve o Reject).
*/

function descargarClientes() {
    
    return new Promise((resolve, reject) => {

        const error = true;

        setTimeout(() => {
            
            if(!error){
                resolve('El listado de clientes se descargó correctamente');
            } else {
                reject('Error en la conexión');
            }
        }, 3000);
    });
}

// Async await
async function ejecutar(){

    try {
        console.log(1+1)
        const respuesta = await descargarClientes();

        // Este código no se ejecutará hasta recibir la respuesta de la función
        console.log(2+2);
        console.log(respuesta);
    } catch (error) {
        console.log(error)
    }
}
ejecutar();

/* 
    NOTA: Algo a tener en cuenta al momento de utilizar trycatch con
    Async Await es que sí en el Await el Promise cae en Reject, a pesar
    de que ya se esté ejecutando el Try sí este detecta un error el flujo 
    de ejecución de JS hará un salto hacia el catch, según el presente 
    ejemplo, si la función descargarClientes falla y el Promise cae 
    en el Reject, la ejecución hará un salto al catch y se ejecutará la 
    impresión en consola del error y no se ejecutará la impresión 
    del 2+2 ni de respuesta.

    Esto es muy utilizado en Node.js al momento de autenticar un usuario,
    donde se puede tener una función de autenticarUsuario() en la cual
    se pase el usuario y contraseña y sí coinciden se firmaría el inicio
    de sesión y acceda pero al no coincidir mande a un catch inmediatamente
    y las lineas de login sean inalcanzables-

    Recordar que Async va en la función padre y Await en donde queremos
    realizar la pausa de la ejecución del código
*/