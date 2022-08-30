// Cambiando el CSS con JavaScript
const encabezado = document.querySelector('h1');
// console.log(encabezado.style);

/*  Una caracteristica que tienen los estilos en JS es que tienen otra sintaxis, similar pero diferente de CSS, si quieres usar un estilo en JS 
    y su sintaxis es de 2 palabras, se elimina el "-" que separan ambas palabras y la primera letra a partir de la segunda palabra se escribira 
    en mayusculas.
    Por ejemplo:
        CSS                             JS
            justify-content                 justifyContent
        
        CSS                             JS
            background-color                backgroundColor
*/

// encabezado.style.backgroundColor = 'lightblue';
// encabezado.style.fontFamily = 'Arial';
// encabezado.style.textTransform= 'uppercase';

const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase'); // Agregar varias clases
card.classList.remove('card') // Eliminar clase, sí deseas borrar varias, separa cada clase con comas ","
console.log(card.classList); 
// Recordar: classList retorna las clases del elemento seleccionado en un array, 
// className retorna las clases del elemento seleccionado como un string, 
// se podría utilizar funciones sobre el string devuelto
