// Ejecutar pantalla completa con JS
const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click', pantallaCompleta);
salirBtn.addEventListener('click', cerrarPantallaCompleta);

function pantallaCompleta(){

    document.documentElement.requestFullscreen();
}

function cerrarPantallaCompleta(){

    // Para salir del modo pantalla completa (También podemos presionar Esc)
    document.exitFullscreen();
}