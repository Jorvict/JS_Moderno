// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
const contenedor = document.querySelector('#contenido');
let tweets = [];

// Eventos
inicializarEventos();
function inicializarEventos(){

    formulario.addEventListener('submit', registrarTweet);
    document.addEventListener('DOMContentLoaded', () =>{

        tweets = JSON.parse( localStorage.getItem('tweets') ) || [];
        console.log(tweets);
        crearHTML();
    });
}


// Funciones
function registrarTweet(e){

    e.preventDefault();
    const tweet = document.querySelector('#tweet').value;

    if(tweet === ""){

        imprimirError('No se aceptan campos vacíos.');
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    };

    tweets = [...tweets, tweetObj];
    formulario.reset();

    crearHTML();
}

function imprimirError(mensaje){

    const mensajeError = document.createElement('p');
    mensajeError.innerText = mensaje;
    mensajeError.classList.add('error');

    const errores = document.querySelectorAll(".error");
    if(errores.length === 0){
        contenedor.appendChild(mensajeError);
    }

    setTimeout(() => {
        mensajeError.remove();
    }, 2000);
}

function crearHTML(){

    limpiarHTML();

    if(tweets.length > 0){ //Optimización para no ejecutar forEach si array vacio

        tweets.forEach( tweet =>{
            
            const li = document.createElement('li');
            li.innerText = tweet.tweet;

            const btnEliminar = document.createElement('a');
            btnEliminar.innerText = 'X';
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.onclick = () =>{
                eliminarTweet(tweet.id);
            };

            li.appendChild(btnEliminar);
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

function limpiarHTML(){

    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

function sincronizarStorage(){

    localStorage.setItem('tweets', JSON.stringify( tweets ));
}

function eliminarTweet(id){

    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}