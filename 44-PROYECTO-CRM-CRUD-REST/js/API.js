/*
    Verbos de HTTP
        ~ GET: Para obtener registros
        ~ POST: Para enviar registros nuevos al servidor
        ~ PUT o PATCH: Para actualizar
        ~ DELETE: Para borrar registros
*/
const url = 'http://localhost:4000/clientes';

// Cuando se crea un nuevo cliente
export const nuevoCliente = async cliente =>{
    try {
        /**
         * Por default fetch ejecuta el verbo GET (obtener datos del servidor) sin
         * embargo como estamos intentando crear un nuevo registro debemos utilizar
         * el verbo de POST debemos adicionar un objeto de configuración y especificar
         * que queremos utilizar el método de POST. 
         * 
         * Como estamos enviando datos al servidor, en este caso un nuevo cliente, 
         * debemos especificar el contenido de la petición en un body, es decir el 
         * contenido que se va a registrar, algo importante a tener en consideración es 
         * que el BODY se envía solamente de 2 formas, como String o como Objeto.
         * 
         * Finalmente se debe especificar los headers, que son información de que tipo
         * de datos estamos enviando, es decir, que estamos enviando, estos varían en
         * base de lo que estamos enviando al servidor, sí es un objeto puede ser un
         * JSON, sí se estuviera cargando archivos sería multipart/form-data, etc.
         */
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify( cliente ),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';

    } catch (error) {
        console.log(error);
    }
}

// Obtiene todos los clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

// Eliminar un cliente
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}

// Obtener un cliente por su ID
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}