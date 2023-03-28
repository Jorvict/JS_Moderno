// Speech Recognition API
// Permite grabar un audio y transcribirlo en un texto
// Nota: Se requiere permiso de acceso al microfono

/* 
    La ejecución se divide en varias etapas:
        1.- Arrancar el recognition
        2.- Comenzar a escuchar
        3.- Cuando el usuario termina de hablar
        4.- Cuando mostramos el resultado
*/

const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);


function ejecutarSpeechAPI(){
    
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    // 1.- Arrancar el recognition (Solicita acceso a micro)
    recognition.start();

    // 2.- Comenzar a escuchar
    recognition.onstart = function(){

        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando...';
    };

    // 3.- Cuando el usuario termina de hablar
    recognition.onspeechend = function(){

        salida.textContent = 'Se dejó de grabar';
        recognition.stop();
    }

    // 4.- Cuando mostramos el resultado
    recognition.onresult = function(e){

        console.log(e.results[0][0]);

        const {confidence, transcript} = e.results[0][0];

        const speech = document.createElement('p');
        speech.innerHTML = `Grabado: ${transcript}`;

        const seguridad = document.createElement('p');
        seguridad.innerHTML = `Claridad del audio: ${ parseInt ( confidence * 100 )}%`;
        
        salida.appendChild(speech);
        salida.appendChild(seguridad);
    }
}