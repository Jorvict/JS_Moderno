// Crear servidor express

// Importamos express
// const express = require('express'); // Importamos con CommonJS
import express from 'express'; // Inportamos con Modules

// Importamos los routes con las URLs, este routing se añadirá al app
import router from './routes/index.js';

// Importamos el archivo de configuración de la DB
import db from './config/db.js';

// Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch( error => console.log(error));

// Almacenamos la función de ejecución de express
const app = express();

// Definir puerto haciendo uso de variable de entorno
/*  El siguiente código lo que hace es asignar a port el puerto que nos
    asigne el site donde hagamos el deploy, en nuestro caso como aún
    estamos en desarrollo local y no deploy, lo asignará el puerto 4000 */
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Creando un middleware PROPIO - Para obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";
    
    next();
});

// Definir la carpeta pública para ruta principal y rutas hijas de "/viajes"
// Esto se conoce como servicios de archivos estáticos
app.use(express.static('public'));
app.use('/viajes', express.static('public'));

// Agregar router
//.use soporta GET, POST, PUT, PATCH, DELETE, y lo que hará la siguiente
// línea es agregar las rutas establecidas y anexarlos a la pagina principal
app.use('/', router);


// Arrancamos el servidor y le pasamos el puerto donde se va a ejecutar
app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
})