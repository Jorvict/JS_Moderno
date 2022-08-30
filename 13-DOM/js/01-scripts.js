// Acceder a elementos HTML con document

let elemento;

elemento = document;                    // Es todo el HTML que tenemos en el documento
elemento = document.all;                // Selecciona todos los elementos del HTML (redundante)
elemento = document.head;               // Se refiere a la parte superior del documento (Donde ingresamos las etiquetas Meta, Link,etc)
elemento = document.body;               // Se refiere al cuerpo de la página (Parte visible)
elemento = document.domain;             // Muestra en que URL se está cargando el proyecto
elemento = document.forms;              // Imprime cuantos formularios hay en el proyecto, (Retorna un elemento similar a un array pero se llama HTML collection)
elemento = document.forms[0];           // Al ser similar a un array, con esta sintaxis podemos acceder al HTML collection
elemento = document.forms[0].id;        // Accedemos al ID del formulario
elemento = document.forms[0].method;    // Accedemos al method del formulario (Atributo ubicado en el HTML)
elemento = document.forms[0].classList; // Lista las clases que tiene el formulario (Atributo ubicado en el HTML)
elemento = document.forms[0].action;    // Muestra el action del formulario

elemento = document.links;              // Muestra todos los enlaces que tiene este proyecto
elemento = document.links[4];           // Accede al elemento ubicado en el índice 4
elemento = document.links[4].classList; // Lista las clases del enlace ubicado en el indice 4 (Lo retorna como un DOMTokenList que igualmente es similiar a un array)
elemento = document.links[4].className; // Lista las clases del enlace ubicado en el indice 4 (Lo retorna como un string)

elemento = document.images;             // Retorna un HTML collectión con todas las imágenes que se están utilizando en el archivo

elemento = document.scripts;            // Retorna un HTML collection con los diferentes scripts que tengamos en nuestro proyecto (Tambien incluyen scripts de extensiones)

console.log(elemento);