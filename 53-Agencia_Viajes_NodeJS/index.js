// Crear servidor express

// Importamos express
// const express = require('express'); // Importamos con CommonJS
import express from 'express'; // Inportamos con Modules

// Almacenamos la función de ejecución de express
const app = express();

// Definir puerto haciendo uso de variable de entorno
/*  El siguiente código lo que hace es asignar a port el puerto que nos
    asigne el site donde hagamos el deploy, en nuestro caso como aún
    estamos en desarrollo local y no deploy, lo asignará el puerto 4000 */
const port = process.env.PORT || 4000;

/**
 * app.get es para cuando accedemos al site, en este caso el get se ejecuta
 * cuando accedemos a la ruta raíz, adicionalmente como segundo parametro
 * se establece una función callback en el cual contará con 2 parametros
 * que serán el REQUEST y el RESPONSE.
 * El REQUEST es lo que se envía al site o la petición que estamos realizando
 *      (P.ej: Un formulario llenado, solicitar acceso a una URL del site)
 * El RESPONSE es lo que Express te envía o responde (P.ej: Un error por datos 
 *      incorrectos, un error porque la página no existe, error porque falló
 *      la autenticación del usuario, etc.)
 * Cabe mencionar que puedes establecer tu propia respuesta con "res.send"
 * dentro del callback de .get, tener en cuenta que de momento solo utilizar
 * 1 res.send ya que solo se ejecuta el primero.
 * 
 * RECORDAR QUE GET ES CUANDO VISITAS UNA URL
 */
app.get('/', (req, res) => {
    res.send('Inicio'); // Express envia un texto al usuario del site
    /* res.json({
        id: 1 Express envía un JSON al usuario del site
    }); */
    // res.render(); // Se utiliza para mostrar una vista
});

app.get('/nosotros', (req, res) => {
    res.send('Nosotros');
});

app.get('/contacto', (req, res) =>{
    res.send('Contacto');
});

// Arrancamos el servidor y le pasamos el puerto donde se va a ejecutar
app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
})