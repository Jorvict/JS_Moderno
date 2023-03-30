// Como utilizar FETCH API
// Solamente puede leer texto plano o JSON (No soporta XML por ejemplo)

const cargarTxt = document.querySelector('#cargarTxt');
cargarTxt.addEventListener('click', obtenerDatos);


function obtenerDatos(){

    const url = 'data/datos2.txt';

    // Con fetch puedes recibir o enviar datos
    // Aquí podemos colocar la URL de donde van a venir los datos
    // O también a donde se van a enviar los datos.

    /* 
        fetch funciona con Promises, sin embargo no es necesario
        escribir el resolve ni el reject ya que si el promise del
        fetch se cumple, automáticamente podrás ingresar al .then
        del resolve, caso contrario podrás ingresar al .catch del
        reject
    */

    /* 
        sí expandimos el proto de la respuesta, podremos 
        visualizar diversos prototipos, de los cuales, de momento
        los más importantes son .json y .text debido a que estos
        nos permitiran leer la data extraída
    */

    fetch(url)
        .then( respuesta => {
            console.log(respuesta);
            console.log(respuesta.status); // Imprime 200 sí fue bien
            console.log(respuesta.statusText);
            console.log(respuesta.url);
            console.log(respuesta.type); // Tipo de consulta

            return respuesta.text();
        })
        .then( datos => {
            console.log(datos); // Imprime el contenido de la respuesta
        })

        // En caso de error en la consulta (Ejecución del Reject)
        .catch( error => {
            console.log(error);
        })
}