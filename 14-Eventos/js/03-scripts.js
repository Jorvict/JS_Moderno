// Eventos sobre los inputs
const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', () => { // Se ejecuta cuando presionas una tecla
    // console.log('Escribiendo...');
});

busqueda.addEventListener('keyup', () =>{ // Se ejecuta cuando sueltas la tecla luego de haberla presionado
    // console.log('Escribiendo...');
});

busqueda.addEventListener('blur', () =>{ // Se ejecuta cuando sales de un input en el cual estabas escribiendo o tenías seleccionado
    // console.log('Se ejecutó Blur');
});

busqueda.addEventListener('copy', () =>{ // Se ejecuta cuando copias (Ctrl + C) el texto que está en el input
    // console.log('Se ejecutó Copy');
});

busqueda.addEventListener('paste', () => { // Se ejecuta cuando pegas (Ctrl + V) un texto en el input
    // console.log('Se ejecutó Paste');
});

busqueda.addEventListener('cut', () =>{ // Se ejecuta cuando cortas (Ctrl + X) un texto del input
    // console.log('Se ejecutó Cut');
});

busqueda.addEventListener('input', () => { // Se ejecuta cuando escribes / pegas en el input
    // console.log('Se ejecutó Input');
});


// Como parametro de la función se puede colocar el evento que esta sucediendo
busqueda.addEventListener('input', (e) =>{
    // console.log(e.type); // Sobre que elemento estamos trabajando
    // console.log(e.target); // En que input especifico estamos escribiendo
    // console.log(e.target.value); // Visualizar que estamos escribiendo

    if(e.target.value === ''){
        console.log('Falló la validación');
    }
});

/* Sí tienes un proyecto que consulte a un web service, puedes leer lo que el usuario esta escribiendo 
haciendo uso de e.target.value y con ello, enviarlo a un endpoint de una API. 
Adicionalmente tambien son útiles para validar */