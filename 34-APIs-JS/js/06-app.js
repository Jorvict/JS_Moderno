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
    /* 
        onstart es un evento que se dispara cuando el reconocimiento de voz 
        comienza. Cuando se establece la función recognition.onstart, 
        se está configurando el manejador de eventos para el evento onstart, 
        lo que significa que la función se ejecutará cuando se produzca ese 
        evento. Sí el evento onstart ya está definido y se establece una 
        nueva función para él, la nueva función simplemente se agregará como 
        un segundo manejador de eventos y no reemplazará la función original. 
        Para sobrescribir la función original, se tendría que usar el método 
        recognition.removeEventListener('start', oldFunction) antes de 
        establecer la nueva función.
    
    */
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