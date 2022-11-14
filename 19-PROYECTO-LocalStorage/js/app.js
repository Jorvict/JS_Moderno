// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();
function eventListeners(){

    // Cuando usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando documento está listo
    document.addEventListener('DOMContentLoaded', () => {
        
        // Intenta buscar en localStorage los tweets, los convierte y los asigna a tweets, 
        // pero si da null, entonces a tweets le asignará un array vacío
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
    

    // Validacion...
    if(tweet === ''){

        mostrarError('Un mensaje no puede ir vacío');

        // El return dentro de una función previene que se sigan ejecutando más líneas de código.
        // Se puede utilizar para detener la ejecución de una función en caso de cumplirse
        // una condición que esté dentro de la función 
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet, 
        // NOTA: En recientes versiones de JS, cuando dentro de un objeto una llave y su valor 
        // se llaman igual, se puede colocar solamente uno de ellos como abreviacion
    }

    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    // Una vez agregado vamos a crear el HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
}

// Mostrar mensaje de error
function mostrarError(error){
    
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina la alerta luego de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

// NOTA:    setTimeOut se ejecuta una vez luego de pasado el tiempo establecido
//          setInterval se ejecuta n veces cada vez que pase el tiempo establecido


// Muestra un listado de los tweets
function crearHTML(){

    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach( tweet => {
            // Agregar un botón de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // Añadir la función de eliminar, como se van a pasar parametros a la función
            // se debe realizar con ésta sintaxis
            btnEliminar.onclick = () =>{
                borrarTweet(tweet.id);
            }

            // Crear el HTML
            const li = document.createElement('li');

            // Añadir el texto
            li.innerText = tweet.tweet;

            // Asignar el botón
            li.appendChild(btnEliminar);

            // Insertar en el HTML
            listaTweets.appendChild(li);
        });
    }


    sincronizarStrorage();
}

// Agrega los Tweets actuales a LocalStorage
function sincronizarStrorage(){

    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Elimina un tweet
function borrarTweet(id){
    
    tweets = tweets.filter( tweet => tweet.id !== id);
    crearHTML();
}


// Limpiar el HTML
function limpiarHTML(){

    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}