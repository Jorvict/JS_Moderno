//querySelector
// Actual similar a getElementById en el sentido de que solo te retornará máximo 1 elemento, pero tiene la caracteristica de que permite seleccionar incluso clases
// Es una sintaxis similar a los selectores de CSS

const card = document.querySelector('.card'); // Hay varios cards en el DOM pero solo retornará el primero, en caso de que no exista no retornará nada
console.log(card);

// Podemos tener selectores especificos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// Permite seleccionar tambien mediante IDs utilizando la sintaxis de CSS
const formulario = document.querySelector('#formulario');
console.log(formulario);

// Seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);