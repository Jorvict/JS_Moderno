// Async Await hacia una API con Fetch

const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatosAsyncAwait);

// Obtener datos de API con Fetch
function obtenerDatosFetch(){

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => console.log(resultado))
        .catch(error => console.log(error));
}

// Obtener datos de API con Async Await (Recordar agregarle Trycatch)
async function obtenerDatosAsyncAwait(){

    /* 
        Esta línea bloquea la siguiente ya que es necesario la respuesta del 
        fetch para poder extraer el resultado usando respuesta.json(),
        en estos casos si es perfectamente válido usar el doble await, de
        hecho para estos casos no se recomienda usar Promise.all()
    */
    try {
        const respuesta = await fetch(url); 
        const resultado = await respuesta.json();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}