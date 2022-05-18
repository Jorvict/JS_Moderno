// Eventos con el mouse
const nav = document.querySelector('.navegacion');

// Registrar un evento
nav.addEventListener('click', () =>{ // Se ejecuta cuando haces click en el elemento (pulsar y soltar)
    console.log('click en nav');
});

nav.addEventListener('mouseenter', () =>{ // Se ejecuta una vez al pasar el cursor sobre el elemento
    console.log('Entrando a la navegacion');
    nav.style.backgroundColor = 'white';
});

nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegación');
    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('mousedown', () =>{ // Se ejecuta cuando haces el primer click sobre el elemento, es similar al evento click, pero el evento click se ejecuta despues de soltarlo
    console.log('Se ejecutó mousedown');
});

nav.addEventListener('mouseup', () => { // Se ejecuta al hacer click, pero especificamente cuando sueltas el click, sería la contraparte de mousedown
    console.log('Se ejecutó mouseup');
});

nav.addEventListener('dblclick', () => { // Se ejecuta cuando haces doble click en el elemento
    console.log('Se ejecutó doble click');
});