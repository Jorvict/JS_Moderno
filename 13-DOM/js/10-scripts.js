// Generar HTML con JavaScript

// const enlace = document.createElement('img'); Crear un elemento html para imagen
// const enlace = document.createElement('p'); Crear un parrafo en html

// Creando elemento
const enlace = document.createElement('A'); //La etiqueta que se pase a createElement puede estar en mayusculas o minusculas, pero se recomienda minusculas

// Agregandole texto
enlace.textContent = 'Nuevo enlace';

// Añadiendo href
enlace.href = '/nuevo-enlace';
enlace.target = '_blank';
enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('alguna-clase');
enlace.onclick = miFuncion; // Cuando se coloca funcion en un método onclick, no es necesario colocar ()
console.log(enlace);

// Seleccionar navegacion
const navegacion = document.querySelector('.navegacion');

// navegacion.appendChild(enlace); // Lo coloca al final de los hijos que tiene el elemento padre seleccionado
// insertBefore requiere 2 argumentos, el primero es el elemento que vamos a agregar, el segundo argumento es donde deseamos mostrarlo
// Como la sintaxis es insertBefore, se colocará el elemento justo antes del hijo seleccionado
navegacion.insertBefore(enlace, navegacion.children[1])

function miFuncion(){
    alert('Diste click');
}


// ==============================================
// ============== Creando un card ===============
// ==============================================

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');
console.log(parrafo1);

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de música underground';
parrafo2.classList.add('titulo');
console.log(parrafo2);

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$1,500 por persona';
parrafo3.classList.add('precio');
console.log(parrafo3);



// Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

console.log(info);



// Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer1.jpg';
imagen.alt = 'Texto alternativo';
imagen.classList.add('img-fluid'); // Clase de Bootstrap para que las imágenes sean responsive

console.log(imagen);



/// Crear div con la clase de card
const card = document.createElement('div');
card.classList.add('card');

// Asignar la imagen e info
card.appendChild(imagen);
card.appendChild(info);

console.log(card);



// Insertar en el HTML
const contenedorCards = document.querySelector('.hacer .contenedor-cards'); // Especificidad debido a que hay varios contenedores
// contenedorCards.appendChild(card); // Insertar al ultimo
contenedorCards.insertBefore(card, contenedorCards.children[1]); // Inserta ántes del segundo elemento

console.log(contenedorCards);