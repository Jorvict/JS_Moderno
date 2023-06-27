import Sequelize from "sequelize";
import db from "../config/db";

/* 
    Definimos nuestro primer modelo, como primer argumento pasamos el nombre 
    de la tabla, y de segundo argumento le pasamos un objeto de configuración
    en el cual vamos a definir cada una de las COLUMNAS, tener en cuenta que
    las columnas que no se definan en dicho objeto, cuando se realice la
    consulta a la DB no se traerá esas columnas omitidas. Especificamos el 
    nombre de la columna, y dentro de un objeto asignado a la key especificamos
    que tipo de dato va a tener y cuantos carácteres va a utilizar.

*/
export const Viaje = db.define('viajes', {
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    },
});