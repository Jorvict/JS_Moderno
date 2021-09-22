// Añadir Funciones en un Objeto - Métodos de propiedad

const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function () {
        console.log(`Pausando...`);
    },
    borrar: function (id) {
        console.log(`Borrando canción con el id ${id}`);
    },
    crearPlaylist: function (nombre) {
        console.log(`Creando playlist "${nombre}".`);
        this.reproducirPlaylist(nombre);
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo playlist "${nombre}".`)
    }
}

/* Para acceder a las funciones desde el navegador, podemos escribir
en la consola "reproductor" y podremos visualizar los diversos
métodos que se encuentran registradas dentro de éste objeto*/

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();

// Para agregar una propiedad fuera del objeto
/* reproductor.borrar = function (id) {
    console.log(`Borrando canción con el id ${id}`);
} */
reproductor.borrar(30);

reproductor.crearPlaylist(`Mejores éxitos de Chayanne`);