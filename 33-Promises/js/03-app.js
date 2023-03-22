// Creando un Promise, .then y .catch

// Resolve es lo que se ejecuta cuando el Promise se ejecuta 
// correctamente o cuando se cumple el promise

// Reject cuando tenemos un error en el promise
const aplicarDescuento = new Promise( (resolve, reject) =>{

    const descuento = true;

    if(descuento){

        resolve('Descuento Aplicado');
    } else {

        reject('No se pudo aplicar el descuento');
    }
});

// .then es la acción que va a pasar una vez que se realiza el promise (resolve)
// .catch es la acción que va a pasar siempre que el promise falle (reject)

// Se pueden mandar a llamar funciones en el resolve
aplicarDescuento
    .then( resultado => descuento(resultado))
    .catch( error => console.log(error))

console.log(aplicarDescuento);

// Hay 3 valores posibles en un promise
// fulfilled -> El promise se cumplió
// rejected -> El promise no se cumplió
// pending -> El promise aún no se ha cumplido y tampoco fue rechazado

function descuento(mensaje){

    console.log(mensaje)
}