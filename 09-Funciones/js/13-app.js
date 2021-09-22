// Arrow Functions en el Reproductor de Música

const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`) ,
    pausar: () => console.log(`Pausando...`) ,
    borrar: id => console.log(`Borrando canción con el id ${id}`) ,
    crearPlaylist: nombre => {
        console.log(`Creando playlist "${nombre}".`);
        reproductor.reproducirPlaylist(nombre);
    },
    reproducirPlaylist: nombre => console.log(`Reproduciendo playlist "${nombre}".`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);

reproductor.pausar();

reproductor.borrar(30);

reproductor.crearPlaylist(`Mejores éxitos de Chayanne`);

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion; // Como es un get, no necesita un parentesis