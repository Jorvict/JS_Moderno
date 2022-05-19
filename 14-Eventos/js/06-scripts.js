// Qué es el event bubbling
// Es cuando presionas en un evento, pero éste se propaga por muchos otros eventos

/* Los eventos no se detienen en el elemento que los disparó sino que se propaga, la propagación irá hacia los ascentros
hasta llegar al último nodo padre (ascendente). Sí un usuario hace click en un elemento li, el evento llegara al li, inmediatamente
después el evento se propagará hacia su padre (el elemento lu), es como si el usuario hubiera hecho click en el lu tambien y de ahí se propagará
hacia todos los elementos padres */ 

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en card');
});

infoDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en info');
});

titulo.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en titulo');
});