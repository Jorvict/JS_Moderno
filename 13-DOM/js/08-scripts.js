// Traversing the DOM
// Se refiere a recorrer el HTML del DOM

const navegacion = document.querySelector('.navegacion');
// console.log(navegacion);
// console.log(navegacion.childNodes); // Los espacios en blanco (Saltos de línea) son considerados elementos
// console.log(navegacion.children); // Listará elementos reales

// console.log(navegacion.children[0].nodeName);
// console.log(navegacion.children[0].nodeType);

// card.children[1].children[1].textContent // Haciendo un traversing en el DOM para llegar al itulo de la primera card

const card = document.querySelector('.card');
card.children[1].children[1].textContent = 'Nuevo heading desde traversing the DOM';
console.log(card.children[1].children[1].textContent);

// Cambiar img utilizando thaversing the dom
card.children[0].src= 'img/hacer3.jpg';
console.log(card.children[0]);

// ==============================================
// === Traversing the dom desde hijo al padre ===
// ==============================================
// console.log(card.parentNode); // Tiene el mismo problema que childNodes (Listar saltos de línea)
console.log(card.parentElement.parentElement.parentElement)

// Con children recorres hacia los hijos
// Con parentElement recorres hacia los padres


// ==============================================
// === Traversing the dom elementos hermanos  ===
// ==============================================
console.log(card) // Marca el elemento donde está iniciando el traversing
console.log(card.nextElementSibling) // Marca el elemento hermano siguiente adyacente
console.log(card.nextElementSibling.nextElementSibling) // Marca el elemento hermano siguiente adyacente del hermano siguiente adyacente (Es decir, el tercero)

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling); // Marca el elemento hermano anterior adyacente


// ==============================================
// == Traversing the dom elementos hijos (alt) ==
// ==============================================
console.log(navegacion.firstElementChild); //Retorna el primer hijo
console.log(navegacion.lastElementChild); // Retorna el ultimo hijo
