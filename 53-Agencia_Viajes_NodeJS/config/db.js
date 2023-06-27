import Sequelize from 'sequelize';

/* 
    Creamos una instancia de sequelize, como primer argumento le pasamos
    la DB a la que nos queremos conectar. El segundo argumento es el nombre
    del usuario de gestor de DB (mysql en este caso). El tercero es el
    password del gestior de DB (mysql), y el cuarto es un objeto con una serie 
    de configuraciones que van dentro de un objeto.
*/
const db = new Sequelize('agenciaviajes', 'root', 'root', {

    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});

export default db;