// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


// Event Listeners
eventListeners();

function eventListeners(){

    // Cuando usuario agrega nuevo tweet
    formulario.addEventListener('submit', agregarTweet);
    
    // Cuando documento está listo
    document.addEventListener('DOMContentLoaded', () =>{
        tweets = JSON.parse( localStorage.getItem('tweets')) || [];

        console.log(tweets);

        crearHTML();
    });
}


// Funciones
function agregarTweet(e){

    e.preventDefault();

    //Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    // Validación
    if(tweet === ''){
        mostrarError('Un tweet no puede ir vacío');
        return; // Evita que se ejecuten mas líneas de código
    }

    const tweetObj = {
        id: Date.now(),
        tweet,
    }

    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    // Una vez agregado vamos a crear el HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
}

// Mostrar un mensaje de error
function mostrarError(error){

    const mensajeError = document.createElement('p');
    const siError = document.querySelectorAll('.error-existe');
    mensajeError.textContent = error;
    mensajeError.classList.add('error', 'error-existe');


    if(siError.length === 0 ){
        // Insertarlo en el contenido
        const contenido = document.querySelector('#contenido');
        contenido.appendChild(mensajeError);

        // Elimina la alerta despues de 3 segundos
        setTimeout(() => {
            mensajeError.remove();
        }, 3000);
    }
}

// Muestra el listado de los tweets
function crearHTML(){

    limpiarHTML();

    if(tweets.length > 0){
        
        tweets.forEach( tweet => {

            // Agregar un botón de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // Añadir la función de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            // Crear el HTML
            const li = document.createElement('li');

            // Añadir el texto
            li.innerText = tweet.tweet;

            // Asignar el botón
            li.appendChild(btnEliminar);

            // Insertarlo en el HTML
            listaTweets.appendChild(li);
        });
    }

    sincronizarStrorage();
}

// Agrega los tweets actuales a localStorage
function sincronizarStrorage(){

    localStorage.setItem('tweets', JSON.stringify( tweets ));
}

// Elimina un tweet
function borrarTweet(id){
    
    tweets = tweets.filter( tweet => tweet.id !== id );
    crearHTML();
}

// Limpiar HTML
function limpiarHTML(){
    
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild)
    }
}